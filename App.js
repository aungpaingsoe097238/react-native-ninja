import { StyleSheet, View, Text } from "react-native";

export default function App () {
  return <View style={styles.container}>
    <Text>Hello Naija</Text>
  </View>
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  }
})