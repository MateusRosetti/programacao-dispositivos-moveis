import React from 'react';
import { View, TextInput, Text, StyleSheet, TouchableOpacity } from 'react-native';
function RecoverScreen({navigation}) {

      return (
        <View style={styles.container}>
          <TextInput
            placeholder="E-mail"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Recuperar Senha</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.linkText}>Voltar para o Login</Text>
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
        backgroundColor: '#28a745',
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
export default RecoverScreen;