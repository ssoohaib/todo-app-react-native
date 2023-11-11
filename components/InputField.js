import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, View, TextInput, Button, Modal, Pressable, Text } from 'react-native'

export default function InputField(props) {
    const [item, setItem]=useState('');

    const handleTextChange = (text)=>{
        setItem(text)
      }

    const handleAddItem = ()=>{
        props.addItem(item)
        setItem('')
        // ToastAndroid.show('lol', ToastAndroid.SHORT);
    }


    return (
      <Modal visible={props.visibility} animationType='slide'>
        <View style={styles.upper}>
            <TextInput value={item} onChangeText={handleTextChange} style={styles.textInput} placeholder='Enter Item'></TextInput>
            <View style={styles.btnSection}>
                <Pressable onPress={props.toggleVisibility}>
                  <View style={styles.cancelBtn} >
                    <Text>Cancel</Text>
                  </View>
                </Pressable>
                <Pressable onPress={handleAddItem}>
                  <View style={styles.addBtn}>
                    <Text>Add</Text>
                  </View>
                </Pressable>
            </View>
        </View>
      </Modal>
    )
}

const styles = StyleSheet.create({
    upper:{
      flex:1,
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
      padding:32,
  
    },
    textInput:{
      width:'100%',
      padding:16,
      marginBottom:16,
      borderColor:'gray',
      borderWidth:1,
      borderRadius:16,

    },
    btnSection:{
      flexDirection:'row',

    },
    addBtn:{
      borderWidth:1,
      borderColor:'gray',
      borderRadius:16,
      padding:16,

    },
    cancelBtn:{
      borderWidth:1,
      borderColor:'gray',
      borderWidth:1,
      borderColor:'gray',
      borderRadius:16,
      padding:16,
    }
  });