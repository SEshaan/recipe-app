import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultDetail from './ResultDetail'

const ResultsView = (props) => {

    if(props.results.length === 0){
        return null;
    };

    return (
        // element === {item: result, index:0}
        // [ This is an element in FlatList. So we use renderItem and pass only {item}]
        // Here result is the item returned after filtering 
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList 
                horizontal={true}
                showsHorizontalScrollIndicator = {false}
                data={props.results}
                keyExtractor={(result) => result.id}
                renderItem={ ( {item} ) => {
                    return (
                        <TouchableOpacity onPress={ () => props.navigation.navigate('ResultsShow', { id : item.id }) }>
                            <ResultDetail result={item} />
                        </TouchableOpacity>
                    );
                } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:20,
        marginBottom:3
    },
    container : {
        marginTop:20
    }
});

export default withNavigation(ResultsView);