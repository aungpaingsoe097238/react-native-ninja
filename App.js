import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import ToDoItem from './components/ToDoItem';

export default function App() {

  const [lists,setLists] = useState([
    { 'name' : 'apple', 'key' : 1 },
    { 'name' : 'banana', 'key' : 2 },
    { 'name' : 'orange', 'key' : 3 }
  ]);

  const pressHandler = (key) => {
    setLists((lists) => {
      return lists.filter((item)=> item.key !== key )
    })
  }

  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.context}> 
        <View style={styles.list}>
          <FlatList
            data={ lists }
            renderItem={ ({ item }) => <ToDoItem item={item} pressHandler={pressHandler} /> } 
            keyExtractor={ (item) => item.key }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  context : {
    padding : 30
  }
});
