import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function ToDoItem({ item, pressHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <View style={ styles.name }>
          <AntDesign name="delete" size={20} color="black" />
          <Text style={styles.item}>{item.name}</Text>
        </View>
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
    flexDirection: 'row'
  },
  item: {
    marginLeft: 10
  }
});
