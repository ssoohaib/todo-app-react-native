import { useState } from 'react';
import { StyleSheet, ToastAndroid, Text, View, FlatList, Pressable } from 'react-native';
import InputField from './components/InputField'
import Item from './components/Item';
import colorPallete from './resources/ColorPallete';

export default function App() {
  const [itemList,setItemList]=useState([]);
  const [inputVisibility, setInputVisibility]=useState(false);

  const handleAddItem=(item)=>{
    // Trim the item to remove leading and trailing spaces
    const trimmedItem = item.trim();

    if (item.length>0 && trimmedItem.length>0){
      setItemList((currentItem)=>[
        ...currentItem,
        {id:Math.random().toString(), text:item}
      ])
      setInputVisibility(false)
    }else{
      ToastAndroid.show('Enter something', ToastAndroid.SHORT);
    }
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
      <View style={styles.addItemBtnContainer}>
        <Text style={styles.title}>ToDo</Text>
        <Pressable onPress={toggleInputVisibility} >
          <View style={styles.addItemBtn}>
            <Text style={styles.addItemBtnText}>+</Text>
          </View>
        </Pressable>
      </View>
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
    backgroundColor:colorPallete.backgroundColor

  },
  addItemBtnContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingBottom:16,

    borderColor:colorPallete.primary,
    borderBottomWidth:2
  },
  title:{
    color:colorPallete.primary,
    fontSize:32,
    fontWeight:'bold'
  },  
  addItemBtn:{
    // padding:16,
    alignItems:'center',
    height:50,
    width:50,
    borderWidth:1,
    backgroundColor:colorPallete.primary,
    borderRadius:16,
    // borderColor:colorPallete.secondary,
  },
  addItemBtnText:{
    color:colorPallete.textColor,
    fontSize:32,
    fontWeight:'bold'
  },
  lower:{
    flex:1,
    marginTop:16,

  },
});
