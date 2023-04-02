import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ToDoItem from "./components/ToDoItem";
import AddToDo from "./components/AddToDo";

export default function App() {
  const [lists, setLists] = useState([
    { name: "apple", key: 1 },
    { name: "banana", key: 2 },
    { name: "orange", key: 3 },
  ]);

  const pressHandler = (key) => {
    setLists((lists) => {
      return lists.filter((item) => item.key !== key);
    });
  };

  const submitHandler = (todo) => {
    if(todo.length > 3){
      setLists((lists) => {
        return [
          { 'name' : todo, 'key' : Math.random().toString() },
          ...lists
        ];
      })
    }else{
      Alert.alert('OOH!','Todo must be over 3 char long.',[
        {
          text : 'Ok', onPress: () => console.log('Alert Closed.')
        }
      ]);
    }

  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.context}>
        <View style={styles.list}>
          <AddToDo submitHandler={submitHandler} />
          <FlatList
            data={lists}
            renderItem={({ item }) => (
              <ToDoItem item={item} pressHandler={pressHandler}  />
            )}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  context: {
    padding: 30,
  },
});
