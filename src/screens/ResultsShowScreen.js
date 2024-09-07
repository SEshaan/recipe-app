import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, Image} from 'react-native';
import yelp from '../api/yelp';
import ShowScreenDetail from '../components/ShowScreenDetail';
import { Ionicons } from '@expo/vector-icons';

const ResultsShowScreen = ({ navigation }) => {
    const [result,setResult] = useState( null );
    const id = navigation.getParam('id');

    const getResult = async (id) => {
       const response = await yelp.get(`/${id}`);
        setResult(response.data);
    }; 

    useEffect(() => {
        getResult(id);
    }, []);

    if(!result) {
        return null;
    } else {
        return(
            <View>
                <Text style={styles.textStyle}>{result.name}</Text>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator = {false}
                    data={result.photos}
                    keyExtractor={ (photo) => photo}
                    renderItem={ ( { item } ) => {
                        return (<ShowScreenDetail result={item}/>);
                    } }
                />
                <View style={styles.container}>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>{result.rating} Stars, {result.review_count} Reviews</Text>
                    <View style={styles.contact}>
                        <Ionicons name="md-call" size={28} color="black" style={styles.iconStyle} />
                        <Text style={{fontSize:15, fontWeight:"bold"}}> : {result.phone}</Text>
                    </View>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Location : {result.location.city}, {result.location.state}, {result.location.country}</Text>
                    <Text style={{fontSize:15, fontWeight:"bold"}}>Address : {result.location.display_address}</Text>
                </View>
            </View>
        );
    };
};

const styles = StyleSheet.create({
    textStyle : {
        textAlign:'center',
        fontSize:25,
        marginVertical:10,
        fontWeight:"bold"
    },
    contact : {
        flexDirection:"row"
    },
    iconStyle:{
        alignSelf:"center"
    },
    container: {
        marginLeft:10,
        marginTop:20,
    }
});

export default ResultsShowScreen;