import { useState } from 'react';
import{View,StyleSheet}from 'react-native';
import{Appbar,List,TextInput,FAB}from "react-native-paper"

function TaskScreen(){
   const [concluida;setConcluida]=
   useState(true);
    return(
     <View>
        <Appbar.Header/>
 <Appbar.Content title="lista de tarefas"/>
    <Appbar.Header/>
     <List.Item
         onPress={()=>{}}  
         title="estudar para a p1"
         right={(props)=><List.Icon{...props}icon="circle"/>}    
/>    
  
</View>
    )
}

const styles= StyleSheet.create({});

export default TaskScreen;
