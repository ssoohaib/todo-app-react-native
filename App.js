import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, Pressable } from 'react-native';
import InputField from './components/InputField'
import Item from './components/Item';


export default function App() {
  const [itemList,setItemList]=useState([]);
  const [inputVisibility, setInputVisibility]=useState(false);

  const handleAddItem=(item)=>{
    setItemList((currentItem)=>[
      ...currentItem,
      {id:Math.random().toString(), text:item}
    ])
    setInputVisibility(false)
  }

  const handleDeleteItem = (id)=>{
    setItemList((currentItem)=>{
      return currentItem.filter(item => item.id !== id)
    })
  } 

  const toggleInputVisibility = () => {
    if (inputVisibility)
      setInputVisibility(false)
    else
      setInputVisibility(true)
  }

  return (
    <View style={styles.container}>
      <Pressable onPress={toggleInputVisibility}>
        <View style={styles.addItemBtn}>
          <Text>lol</Text>
        </View>
      </Pressable>
      <InputField visibility={inputVisibility} toggleVisibility={toggleInputVisibility} addItem={handleAddItem} />


      <View style={styles.lower}>
        {itemList.length == 0 && <Text >Add Items...</Text>}
        
        <FlatList
          keyExtractor={(item,index)=>item.id}
          data={itemList}
          renderItem={ itemData =>
            <Item id={itemData.item.id} text={itemData.item.text} deleteItem={handleDeleteItem} />  
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:32,
    paddingTop:64,

  },
  addItemBtn:{
    borderColor:'red',
    borderWidth:1,
  },
  lower:{
    flex:1,
    marginTop:16,

  },
});
