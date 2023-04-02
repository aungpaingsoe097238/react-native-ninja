import { View, Text, StyleSheet } from 'react-native'

export default function Header() {
    return <View style={styles.header}>
        <Text style={styles.title}>My Todos</Text>
    </View>
}

const styles = StyleSheet.create({
    header : {
        height : 50,
        display : 'flex',
        justifyContent : 'center',
        alignItems: 'center',  
        backgroundColor : "green",
        color: "#fff"
    },
    title : {
        color : "#fff",
        fontWeight : 'bold'
    }
});