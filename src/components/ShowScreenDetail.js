
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
        width:"100%",
        aspectRatio:"4/3",
        objectFit:"cover",
        margin:"auto"
    }
});

export default ShowScreenDetil;