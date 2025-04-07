import { View, useContext,useState } from "react-native";
import{View,FlatList,Modal,Stylesheet} from "react-native";
import { Appbar,TextInput,Button,FAB } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";
import TaskItem  from "../components/TaskItem";

function TaskScreen() {

return (
    <View style={Styles.container}>
<Appbar.Header>
  <Appbar.Content title="Lista de Tarefas" />
</Appbar.Header>
<FlatList data={tarefas}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }) => <TaskItem tarefa={item} />}
/>
<FAB style={Styles.fab}icon="plus" onPress={() =>setExibeModal (true)}/>
<Modal visible={exibeModal} animationType="slide" transparent>
  <View style={Styles.modalContainer}>
    <View style={Styles.modal}>
    <TextInput style={Styles.input} label="Nova Tarefa" 
    value={novaTarefa} onChangeText={setNovaTarefa} mode="outlined" />
<Button style={Styles.input} mode="contained" onPress={() => {
   if (novaTarefa.trim()) {
     adicionar(novaTarefa);
     setNovaTarefa("");
     setExibeModal(false);
   }
}}>Adicionar</Button>

      <Button onPress={() => setExibeModal(false)}>Cancelar</Button>
    </View>
  </View>
</Modal>

    </View>
);

};

const Styles= Stylesheet.create({

container: {
    flex:1,
},
fab:{
    position:"absolute",
    bottom:16,
    right:16,
},
modal:{
    flex:1,
    justifyContent:"center",
    padding:20,
    backgroundColor:"rgba(0,0,0,0.5)",
},
modalContainer:{
    backgroundColor:"#FFFFFF",
    padding:20,
    borderRadius:10
},
input:{
    marginBottom:8,
},

})


function TaskItem(){

    const {tarefas,adicionar}= useContext(TaskContext);
    const [novaTarefa,setNovaTarefa]=useState("");
    const [exibeModal,setExibeModal]=useState(false);
};

export default TaskScreen;