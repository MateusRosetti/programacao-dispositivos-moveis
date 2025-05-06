import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function ProfileScreen({navigation}) {

      return (
        <View style={styles.container}>
          <View style={styles.imageBox}>
            <Text style={styles.imageText}>Imagem{'\n'}Perfil</Text>
          </View>
    
          <Text style={styles.name}>João da Silva</Text>
          <Text style={styles.email}>joao.silva@email.com.br</Text>
          <Text style={styles.phone}>(61) 99999-9999</Text>
    
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Editar Perfil</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: '#fff',
      },
      imageBox: {
        width: 120,
        height: 120,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
      },
      imageText: {
        textAlign: 'center',
        color: '#666',
      },
      name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
      },
      email: {
        fontSize: 16,
        color: '#666',
        marginBottom: 4,
      },
      phone: {
        fontSize: 16,
        color: '#666',
        marginBottom: 24,
      },
      button: {
        width: '100%',
        backgroundColor: '#007bff',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        maxWidth: 300,
      },
      buttonText: {
        color: '#fff',
        fontSize: 16,
      },
    });
    
export default ProfileScreen;