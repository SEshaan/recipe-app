import React from 'react';
import { Text, StyleSheet, Linking, TouchableOpacity } from 'react-native';

export default function RedirectLink({ url, title, style }) {
    const handlePress = () => {
        Linking.openURL(url).catch((err) => console.error("An error occurred", err));
    };

    return (
        <TouchableOpacity onPress={handlePress}>
            <Text style={[styles.link, style]}>{title}</Text>
        </TouchableOpacity>
    );
};

styles = StyleSheet.create({
    link:{
        marginBottom:5,
        fontSize:18,
        fontWeight:"600"
    }
})
