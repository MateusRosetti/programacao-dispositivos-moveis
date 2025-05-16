import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
function ForgotPasswordScreen(){
 
 const [email,setEmail]= useState('');
 const [erro,setErro]=useState('');
  
 const validarEmail = () => {
  const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  if (!email){
    setErro("E-mail é obrigatorio.");
  }else if (!email.includes("@")){
    setErro("E-mail invalido.");
  }else {
    setEmail("");
    alert("instruçoes enviadas para o e-mail");
  }
 
  return (
    <View>
      <TextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        error={!!erro} 
     />
        {erro && <Text>{erro}</Text>}
    </View>
  );
}
  return(
  
    <View style={StyleSheet.container}>
        <TextInput
        style={styles.input}
        placeholder="E-mail"
        KeyboardType="email-address"
        autoCapitalize="nome"
        />
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText.validarEmail}>Enviar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={styles.link}>voltar para o login</Text>
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

export default ForgotPasswordScreen;