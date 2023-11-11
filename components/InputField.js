import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, View, TextInput, Modal, Pressable, Text } from 'react-native'
import colorPallete from '../resources/ColorPallete';

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

    const handleCancel=()=>{
      props.toggleVisibility()
      setItem('')

    }


    return (
      <Modal visible={props.visibility} animationType='slide'>
        <View style={styles.upper}>
            <TextInput placeholderTextColor={colorPallete.textColor} value={item} onChangeText={handleTextChange} style={styles.textInput} placeholder='Enter Item'></TextInput>
            <View style={styles.btnSection}>
                <Pressable style={styles.cancelBtn} onPress={handleCancel}>
                  <View>
                    <Text style={styles.btnText}>Cancel</Text>
                  </View>
                </Pressable>
                <Pressable style={styles.addBtn} onPress={handleAddItem}>
                  <View >
                    <Text style={styles.btnText}>Add</Text>
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
      backgroundColor:colorPallete.secondary,
  
    },
    textInput:{
      width:'100%',
      padding:16,
      marginBottom:16,
      borderColor:colorPallete.backgroundColor,
      borderWidth:2,
      borderRadius:16,
      fontSize:16,
      color:colorPallete.textColor

    },
    btnSection:{
      flexDirection:'row',
      width:'100%',

      // borderWidth:1,
      // borderColor:'red',

    },
    addBtn:{
      flex:1,
      alignItems:'center',
      // borderWidth:1,
      // borderColor:'gray',
      borderRadius:16,
      padding:16,
      backgroundColor:colorPallete.primary,
    },
    cancelBtn:{
      flex:1,
      borderWidth:1,
      alignItems:'center',
      // borderWidth:1,
      // borderColor:'gray',
      borderRadius:16,
      padding:16,
      backgroundColor:colorPallete.backgroundColor,

      marginRight:16,
    },
    btnText:{
      color:colorPallete.textColor,
      fontSize:16,
      // fontWeight:'bold'
    }
  });