import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  name: {
    padding: 16,
    marginTop: 16,
    borderColor: "#ddd",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
});
