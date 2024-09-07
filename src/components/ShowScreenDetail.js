import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ShowScreenDetil = ({result}) => {
    return (
        <View>
            <Image style={styles.imageStyle} source={{ uri:result }} />
        </View>
    )
};

const styles = StyleSheet.create({
    imageStyle : {
        width:250,
        height:200,
        borderRadius:10,
        marginLeft:10
    }
});

export default ShowScreenDetil;