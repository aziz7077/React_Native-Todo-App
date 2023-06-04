import React from 'react';
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';

export const Todo = ({todo, onRemove}) => {

    const longPressHandler = () => {
        onRemove(todo.id)
    }

    return (
        <TouchableOpacity
            onPress={() => console.log('pressed', todo.id)}
            onLongPress={longPressHandler}
        >
              <View style={s.todo}>
        <Text>
            {todo.title}
        </Text>
       </View>  
        </TouchableOpacity>
   
    );
};


const s = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 15
    }
})