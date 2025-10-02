import { FlatList, View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
export default function HomeScreen() {
  return (
    <View>
        <View>
          <Text style={style.titulo}>Perfil de usuario</Text>
      <SafeAreaView style={style.container}>
          <Text>Username</Text>
          <Text>Name</Text>
      </SafeAreaView>
        </View>
    </View>
  );
}


const style = StyleSheet.create({
  texto: {
    fontFamily: "Cochin",
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "#ffafafff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontFamily: "Cochin",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center"
  },
});