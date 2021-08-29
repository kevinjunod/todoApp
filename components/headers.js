import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native';

export default function Header() {
    return (
        <View>
            <ImageBackground style={{ width: Dimensions.get('screen').width, height: 125 }} source={require('../assets/background-header-green.jpg')} />
            <Text style={styles.title}>My To-do List</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        flex: 1,
        alignSelf: 'center',
        color: 'teal',
        fontSize: 30,
        fontWeight: '700',
        marginTop: 40,
        zIndex: 99,
        position: 'absolute'
    }
});