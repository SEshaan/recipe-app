
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import ShowScreenDetail from '../components/ShowScreenDetail';
import RedirectLink from '../components/RedirectLink';

const ResultsShowScreen = ({ route, navigation }) => {
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null); 
    const { recipe } = route.params; 
    
        return (
            <View>
                <ShowScreenDetail result={recipe.image} />
                
                <Text style={styles.textStyle}>{recipe.label}</Text>
                <ScrollView style={styles.container}>
                    <RedirectLink url={recipe.url} title="View Recipe"/>
                    <Text style={{fontSize:16,fontWeight:"500"}}>Ingredients : </Text>
                    {recipe.ingredientLines.map((ingredient,index) => {
                        return (<View key={index.toString()}>
                            <Text style={styles.ingredient}> • {ingredient}</Text>
                        </View>)
                    })}

                </ScrollView>
            </View>
        );
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        fontSize: 25,
        marginVertical: 10,
        fontWeight: 'bold'
    },
    contact: {
        flexDirection: 'row',
    },
    iconStyle: {
        alignSelf: 'center',
    },
    container: {
        marginLeft: 10,
        marginTop: 20,
    },
    errorContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    errorText: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold',
    },
});

export default ResultsShowScreen;
