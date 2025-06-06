import { useContext,useState } from "react";
import { View } from "react-native";
import { Button,TextInput } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";

function TaskModal(props){

    const addTask = async (newTask) => {
        try {
          const response = await TaskService.addTask(newTask);
          setTasks([...tasks, response]);
        } catch (error) {
          throw new Error("Erro ao adicionar tarefa: " + error.message);
        }
}
const [taskTitle, setTaskTitle] = useState('');

  <div>
    <input
      type="text"
      value={taskTitle}
      onChange={(e) => setTaskTitle(e.target.value)}
      placeholder="Digite o título da tarefa"
    />
    <p>Tarefa: {taskTitle}</p>
  </div>
async function handleAddTask(){
    await assTask({descricao:taskTitle,concluida:false});
    setTaskTitle("");
    setShowModal(false);
}
function handleCancel(){
    setTaskTitle("");
    setShowModal(false);
}
return (
	<View
  		style={{
    	margin: 16,
    	padding: 20,
    	backgroundColor: "#fff",
    	borderRadius: 8,
  	}}
	>
  		<TextInput
    	label="Título da Tarefa"
    	value={taskTitle}
    	onChangeText={setTaskTitle}
    	mode="outlined"
    	style={{ marginBottom: 20 }}
  	/>
  		<Button mode="contained" onPress={handleAddTask}>
    	Adicionar Tarefa
  	</Button>
  		<Button
    	mode="outlined"
    	onPress={handleCancel}
    	style={{ marginTop: 10 }}
  	>
    	Cancelar
  	</Button>
	</View>
);



};
export default TaskModal;