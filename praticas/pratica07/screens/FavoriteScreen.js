import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

function FavoriteScreen  ({navigation}){    
   
    const favoriteSongs = [
      { id: '1', title: 'Música Favorita 1', artist: 'Artista 1' },
      { id: '2', title: 'Música Favorita 2', artist: 'Artista 2' },
    ];
    
      const renderItem = ({ item }) => (
        <View style={styles.card}>
          <Text style={styles.icon}>🎵 {item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      );
    
      return (
        <FlatList
          data={favoriteSongs}
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
    

export default FavoriteScreen;