import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function ChatScreen({navigation}) {

    const messages = [
      { id: '1', name: 'Ana Souza', time: '08:45', message: 'Oi, tudo bem?' },
      { id: '2', name: 'Carlos Lima', time: '09:30', message: 'Vamos marcar aquela reunião?' },
      { id: '3', name: 'Mariana Santos', time: '10:10', message: 'Enviei o arquivo para vc.' },
    ];
    
      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.name}>👤 {item.name}</Text>
            <Text style={styles.time}>{item.time}</Text>
          </View>
          <Text style={styles.message}>{item.message}</Text>
        </View>
      );
    
      return (
        <FlatList
          data={messages}
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
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      name: {
        fontWeight: 'bold',
        fontSize: 15,
      },
      time: {
        fontSize: 13,
        color: '#999',
      },
      message: {
        marginTop: 4,
        fontSize: 14,
        color: '#444',
      },
    });
    

export default ChatScreen;