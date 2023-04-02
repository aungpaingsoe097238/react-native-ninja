import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

export default function AddToDo({submitHandler}) {
  const [todo, setTodo] = useState("");

  const handleChangeText = (value) => {
        setTodo(value)
  };

  return (
    <View>
      <TextInput
        style={styles.textInput}
        placeholder="Enter your text..."
        onChangeText={handleChangeText}
      />
      <Button title="add todo" color='coral' onPress={ () => submitHandler(todo) } />
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    paddingVertical: 20,
    borderColor: "#fff",
    borderBottomColor: "#ddd",
  },
});
