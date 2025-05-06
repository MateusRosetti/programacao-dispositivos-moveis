import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, TouchableOpacity } from 'react-native';

function LoginScreen({navigation}){

      return (
        <View style={styles.container}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Esqueceu sua senha? Recuperar senha</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        padding: 24,
        backgroundColor: '#fff',
      },
      input: {
        height: 48,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        marginBottom: 16,
      },
      button: {
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginBottom: 16,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
      linkText: {
        color: '#007bff',
        textAlign: 'center',
      },
    });  
export default LoginScreen;