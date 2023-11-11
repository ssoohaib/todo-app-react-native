import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import colorPallete from '../resources/ColorPallete';

export default function Item(props) {
  return (
    <View style={styles.listItem}>
      <Pressable android_ripple={{color:colorPallete.primary}} onPress={()=>props.deleteItem(props.id)}>
        <Text style={styles.listItemText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
      marginBottom:8,
      backgroundColor:colorPallete.secondary,
      borderRadius:16,
      overflow:'hidden',
      
    },
    listItemText:{
      padding:16,
      color:colorPallete.textColor,
      fontSize:16,
    }
  });  