import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function Item(props) {
  return (
    <View style={styles.listItem}>
      <Pressable android_ripple={{color:'red'}} onPress={()=>props.deleteItem(props.id)}>
        <Text style={styles.listItemText}>{props.text}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    listItem:{
      marginBottom:8,
      backgroundColor:'gray',
      borderRadius:16,
      overflow:'hidden'
    },
    listItemText:{
      padding:16,
    }
  });  