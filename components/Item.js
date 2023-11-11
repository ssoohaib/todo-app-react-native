import React from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'

export default function Item(props) {
  return (
    <Pressable onPress={()=>props.deleteItem(props.id)}>
        <View style={styles.listItem}>
            <Text>{props.text}</Text>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    listItem:{
      backgroundColor:'gray',
      marginBottom:8,
      padding:16,
      borderRadius:16
    }
  });  