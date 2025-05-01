import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useCheckin } from '../context/CheckinContext';

const ClienteHomeScreen = ({ navigation }) => {
  const { saldo } = useAuth();
  const { doCheckin } = useCheckin();

  const handleCheckin = () => {
    doCheckin('client-1'); // usando ID fixo para exemplo
    Alert.alert('Sucesso', 'Check-in realizado com sucesso!');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.saldo}>Saldo: R$ {saldo.toFixed(2)}</Text>
      </View>
      
      <View style={styles.content}>
        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('Carrinho')}
        >
          <Text style={styles.buttonText}>Ver Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.checkInButton}
          onPress={handleCheckin}
        >
          <Text style={styles.buttonText}>Fazer Check-in</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#007AFF',
  },
  saldo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    gap: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkInButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ClienteHomeScreen;