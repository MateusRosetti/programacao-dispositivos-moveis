import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function PlaylistScreen({navigation}) {

    
    const playlists = [
      { id: '1', name: 'Playlist 1', count: 10 },
      { id: '2', name: 'Playlist 2', count: 5 },
      { id: '3', name: 'Playlist 3', count: 8 },
    ];
    
      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.icon}>🎼 {item.name}</Text>
          <Text style={styles.count}>{item.count} músicas</Text>
        </View>
      );
    
      return (
        <FlatList
          data={playlists}
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
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 12,
        marginBottom: 12,
        backgroundColor: '#fff',
      },
      icon: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      count: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
      },
    });
    

export default PlaylistScreen;