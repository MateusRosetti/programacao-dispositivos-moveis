import{View,ScrollView,StyleSheet} from "react-native";
import { Appbar,Text,List,TextInput,IconButton,FAB, } from "react-native-paper";

const conversas = [
    {
        id:1,
        nome:"Ana Souza ",
        mensagem:"oi,tudo bem?",
        hora:"8:45"
    },
{
    id: 2, 
    nome:"carlos lima",
    mensagem:"vamos marcar aquela rauniao?",
    hora:"9:30",
},
{
    id:3,
    nome:"mariana santos",
    mensagem:"Emviei o arquivo para voce.",
    hora:"10:10",
},
];

function ChatScreen(){

    return (
        <View style={styles.container}>
 <Appbar.Header>
<Appbar.Content title="conversas"/>
<Appbar.Action icon="dots-vertical"onPress={()=>{}}/>
 </Appbar.Header>
 <ScrollView>
    {conversas.map((conversas)=>(
        <List.Item
        key={conversas.id}
        title={conversas.nome}
        description={conversas.mensagem}
        left={()=><List.Icon icon="account-circle"/>}
        right={()=><Text>{conversas.hora}</Text>}
        onPress={()=>{}}
        />
    ))}
 </ScrollView>
<View style={styles.bottomBar}>
    <IconButton icon="camera"onPress={()=>{}}/>
    <TextInput mode="outlined" placeholder="mensagem"/>
    <IconButton icon="send"onPress={()=>{}}/>
</View>
<FAB icon="plus" onPress={()=>{}} style={styles.fab}/>
        </View>
    );
}
const styles= StyleSheet.create({

container:{flex:1,},

Appbar:{flexDirection:"row",justifyContent:"space-around",alignItems:"center",padding:8,},

fab:{position:"absolute",margin:16,right:0,bottom:60,},


});
export default ChatScreen;