import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const VendedorHomeScreen = ({ navigation }) => {
  // Mock data for clients
  const clientesAtivos = [
    { id: '1', nome: 'Cliente 1' },
    { id: '2', nome: 'Cliente 2' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.clienteCard}
      onPress={() => navigation.navigate('Carrinho', { clienteId: item.id })}
    >
      <Text style={styles.clienteNome}>{item.nome}</Text>
      <Text style={styles.statusText}>Check-in ativo</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Clientes Ativos</Text>
      <FlatList
        data={clientesAtivos}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  list: {
    gap: 10,
  },
  clienteCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    borderLeftWidth: 5,
    borderLeftColor: '#34C759',
  },
  clienteNome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusText: {
    color: '#34C759',
    marginTop: 5,
  },
});

export default VendedorHomeScreen;