import {Text} from "react-native";
import {text,View } from "react-native";
import { StyleSheet, Text, View } from "react-native";

function AppBar(props) {

  return (
    <View style={{ height: 50, backgroundColor: "#333", justifyContent: "center",
     paddingLeft: 16 }}>

    <AppBar />
    <AppBar titulo="Minha Aplicação React Native" />

    <View>  
    <Text>{props.titulo}</Text>
    <Text style={styles.title}/>


</View>
  </View>
  
  );
  
}

function App() {
  const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: "#fff", justifyContent: "center", alignItems: "center"},
    appBar: {height: 50, backgroundColor: "#333", justifyContent: "center", paddingLeft: 16},
    title: {fontSize: 20, fontWeight: "bold", color: "#fff"},

  });
  
  return (
<View style={styles.container}>

    <Text>Minha Aplicação React Native</Text>
    <View></View>
   </View>
  
  );  

}export default App;
