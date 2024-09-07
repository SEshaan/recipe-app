import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ResultDetail = ({result}) => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri:result.image_url }} />
            <Text style={styles.name}>{result.name}</Text>
            <Text>{result.rating} Stars, {result.review_count} Reviews</Text>
            <View style={styles.contact}>
                <Ionicons name="md-call" size={24} color="black" style={styles.iconStyle} />
                <Text> : {result.phone}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container : {
        marginLeft:20
    },
    image : {
        width:250,
        height:200,
        borderRadius:10,
        marginBottom:3
    },
    name : {
        fontWeight:"bold",
        fontSize:14
    },
    contact : {
        flexDirection:"row"
    },
    iconStyle:{
        alignSelf:"center"
    }
});

export default ResultDetail;