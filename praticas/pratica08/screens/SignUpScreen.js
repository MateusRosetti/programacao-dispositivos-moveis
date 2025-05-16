import React from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import {useForm,Controller} from "react-hook-form";
import {yupResolver}from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema =Yup.object().shape ({
  nome: Yup.string().required("nome é obrigatorio"),
  email: Yup.string().email("E-mail invalido").required("E-mail é obrigatorio"),
  senha: Yup.string().min(6,"senha deve ter no minimo 6 caracteres")
  .required("Senha é obrigatoria"),
  confirmarSenha: Yup.string().oneOf([Yup.ref("senha"),null],"as senhas nao coincidem")
.required("confirmar a senha "),

});


function SignUpScreen(){
  const { control, handleSubmit, formState: { errors }, } = useForm({ resolver: yupResolver(schema) });

const onSubmit = (data)=>{
  alert("conta criada com sucesso!");
}

return( 

<View style={StyleSheet.container}>
   
   <Controller
 control={control}
 name="nome"
 render={({field:{onchange,value}})=>(
  <input value={value}onchange={onchange} />
)}
/>
    <TextInput
    style={StyleSheet.container}
    placeholder="nome"
    autoCapitalize="words"
    />
    <TextInput
    style={styles.input}
    placeholder="E-mail"
    keyboardType="email-address"
    autoCapitalize="nome"
    />
    <TextInput
    style={styles.input}
    placeholder="senha"
    secureTextEntry
    />
    <TextInput
    style={styles.input}
    placeholder="confirmar a senha"
    secureTextEntry
    />
  
   
    <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>criar</Text>
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
      backgroundColor: '#28a745',
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
export default SignUpScreen;
