import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ResultDetail from './ResultDetail';

const ResultsView = (props) => {
    const navigation = useNavigation();

    if (!props.results || props.results.length === 0) {
        return <Text>No results found.</Text>;
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <ScrollView>
            {props.results.map(( item ,index) => {                
                    return (
                        <TouchableOpacity key={index.toString()}
                            onPress={() => navigation.navigate('ResultsShow', { recipe:item.recipe })}>  
                            <ResultDetail result={item.recipe} /> 
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20,
        marginBottom: 3
    },
    container: {
        marginTop: 20
    }
});

export default ResultsView;
