import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen({navigation}) {
    

      return (
        <View style={styles.container}>
          <Text style={styles.title}>Bem-vindo ao Meu App!</Text>
          <Text style={styles.subtitle}>Navegue pelo menu lateral para</Text>
          <Text style={styles.subtitle}>acessar seu perfil.</Text>
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
      title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        textAlign: 'center',
      },
    });
    
export default HomeScreen;