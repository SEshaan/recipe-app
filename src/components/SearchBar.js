import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = (props) => {
    return (
        <View style={styles.backgroundStyle} >
            <Feather name="search" style={styles.iconStyle} />
            <TextInput 
                autoCapitalize="none"
                autoCorrect={false}
                style={styles.inputStyle} 
                placeholder="Search" 
                value={props.term}
                // onChangeText={(newTerm) => props.onTermChange(newTerm)}
                // onEndEditing={() => props.onTermSubmit()}
                onChangeText={props.onTermChange}
                onEndEditing={props.onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle:{
        flexDirection:"row",
        backgroundColor:'#e6ebed',
        height:50,
        borderRadius:5,
        marginHorizontal:20,
        marginTop:10,
        marginBottom:10
    },
    inputStyle : {
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:40,
        alignSelf:"center",
        marginHorizontal:15
    }
});

export default SearchBar;