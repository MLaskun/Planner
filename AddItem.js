import React, { Component, useState } from 'react';
import {
  Alert,
  Button,
  Platform,
  Text,
  StyleSheet,
  ScrollView,
  View,
  TextInput,
  TouchableOpacity,

} from 'react-native';

import Icon from 'react-native-vector-icons/dist/FontAwensome';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';



const AddItem = ({})  => {
    const [text, setText] = useState('');

    const onChange = textValue => setText(textValue);

    return (
        <Viev>

                <TextInput placeholder="Add Item..."

                style={styles.input} 
                onChangeText={onChange} 
                />

                <TouchableOpacity style={styles.btn}> onPress={() => 
                addItem(text)}
                    <Text style={styles.btnText}><Icon name="plus" size={20} />
                    Add Item
                    </Text>
                </TouchableOpacity>

        </Viev>



    );
};



const styles = StyleSheet.create({

    input: {
        height: 60,
        padding: 0,
        fontSize: 16,

    },
    btn: {
        backgroundColor: '#FFFFFFFF',
        padding: 9,
        margin: 5,

    },

    btnText: {

        color: '#c92ed1',
        fontSize: 25,
        textAlign: 'center',
    },




});

export default AddItem;