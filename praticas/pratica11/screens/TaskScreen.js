import { useContext,useEffect,useState } from "react";
import { View,FlatList } from "react-native";
import { Appbar,FAB,Modal } from "react-native-paper";
import { TaskContext } from "../contexts/TaskContext";


function TaskScreen(){
<View>
<Appbar.Header>
    	<Appbar.Content title="Minhas Tarefas" />
</Appbar.Header>
<View style={{ flex: 1, paddingBottom: 16 }}>
    	<FlatList
      	data={tasks}
      	keyExtractor={(item) => item.id.toString()}
      	renderItem={({ item }) => <TaskItem task={item} />}
    	/>
</View>
<FAB
    	style={{ position: "absolute", bottom: 16, right: 16 }}
    	icon="plus"
    	onPress={() => setShowModal(true)}
/>
<Modal visible={showModal} animationType="slide" transparent={false}>
    	<TaskModal setShowModal={setShowModal} />
</Modal>
</View>
}
export default TaskScreen;