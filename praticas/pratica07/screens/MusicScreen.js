import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function MusicScreen ({navigation}) {
    const musicData = [
      { id: '1', title: 'Música 1', artist: 'Artista 1' },
      { id: '2', title: 'Música 2', artist: 'Artista 2' },
      { id: '3', title: 'Música 3', artist: 'Artista 3' },
      { id: '4', title: 'Música 4', artist: 'Artista 4' },
    ];
    

      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.icon}>🎵 {item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      );
    
      return (
        <FlatList
          data={musicData}
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
      artist: {
        fontSize: 14,
        color: '#666',
        marginTop: 4,
      },
    });
export default MusicScreen;