import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function CallScreen({navigation}){
    
    const callData = [
      { id: '1', name: 'Campos Sales', date: '28/02/2024 12:03' },
      { id: '2', name: 'Rui Barbosa', date: '04/12/2023 21:10' },
    ];
    
      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <View style={styles.header}>
            <Text style={styles.name}>👤 {item.name}</Text>
            <Text style={styles.icon}>📞</Text>
          </View>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      );
    
      return (
        <FlatList
          data={callData}
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
      icon: {
        fontSize: 18,
      },
      date: {
        marginTop: 4,
        fontSize: 14,
        color: '#666',
      },
    });
    

export default CallScreen;