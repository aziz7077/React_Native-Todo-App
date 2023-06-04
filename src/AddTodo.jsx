import React, { useState } from 'react';
import { Alert, Button, StyleSheet, TextInput, View } from 'react-native';

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')


    const pressHandler = () => {

        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Ошибка', 'Название дела не может быть пустым!')
        }
    }

    return (
        <View style={s.block}>
            <TextInput
                style={s.input}
                onChangeText={setValue}
                value={value}
                placeholder='введите название дела....'
            />
            <Button title="Добавить" onPress={pressHandler} />
        </View>
    );
};

const s = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    input: {
        width: '70%',
        padding: 7,
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    }
})