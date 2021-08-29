import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';

export default function AddTodo({ submitHandler }) {
    [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    };

    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='add new to-do list...'
                placeholderTextColor={'#999'}
                onChangeText={changeHandler}
                value={text}
            />
            <Button color='#8FD873' onPress={() => submitHandler(text)} title='add' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
});