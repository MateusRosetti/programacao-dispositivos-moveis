import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ContactScreen({navigation}){

    
    const contacts = [
      { id: '1', name: 'Nome do Contato', phone: '(99) 99999-9999' },
      { id: '2', name: 'Nome do Contato', phone: '(99) 99999-9999' },
      { id: '3', name: 'Nome do Contato', phone: '(99) 99999-9999' },
    ];
    

      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.name}>👤 {item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
        </View>
      );
    
      return (
        <FlatList
          data={contacts}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.container}
        />
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        padding: 16,
      },
      card: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 12,
      },
      name: {
        fontSize: 15,
        fontWeight: 'bold',
      },
      phone: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
      },
    });
    

export default ContactScreen;