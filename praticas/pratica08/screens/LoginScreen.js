import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import {useForm,Controller} from "react-hook-form";

function LoginScreen() {

const{ control,handleSubmit,formState:{errors},}=useForm();
const onSubmit=(data) => {
  alert ("login realizado com sucesso!");
}
  return (
    <View style={StyleSheet.container}>
       <Controller>
        <TextInput
        style={StyleSheet.input}
        placeholder="E-mail"
        keyboardType="email-address"
        autoCapitalize="nome"
        />
        </Controller>
        <TextInput
        style={StyleSheet.input}
        placeholder="senha"
        secureTextEntry
        />
        <TouchableOpacity style={StyleSheet.button}>
            <Text style={StyleSheet.buttonText} >entrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text style={StyleSheet.link}>esqueceu sua senha? recuperar senha</Text>
         </TouchableOpacity>
         <TouchableOpacity>
         <Text style={StyleSheet.link}>criar conta</Text>
        </TouchableOpacity>
        </View>
        );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#fff',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 6,
      padding: 12,
      marginBottom: 12,
    },
    button: {
      backgroundColor: '#007bff',
      padding: 12,
      borderRadius: 6,
      alignItems: 'center',
      marginBottom: 12,
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    },
    link: {
      color: '#007bff',
      textAlign: 'center',
      marginTop: 6,
    },
  });
export default LoginScreen;