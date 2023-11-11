import React, { useState } from 'react'
import { StyleSheet, ToastAndroid, View, TextInput, Button } from 'react-native'

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
        <View style={styles.upper}>
            <TextInput value={item} onChangeText={handleTextChange} style={styles.textInput} placeholder='Enter Item'></TextInput>
            <View style={styles.btnView}>
                <Button title='+' color={''} onPress={handleAddItem} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upper:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderBottomWidth:1,
      paddingBottom:32,
  
    },
    textInput:{
      flex:1,
      padding:16,
      marginRight:16,
  
      borderColor:'gray',
      borderWidth:1,
      borderRadius:16,
    },
    btnView:{
  
    },
  });