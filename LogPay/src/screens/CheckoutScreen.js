import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { useCarrinho } from '../context/CarrinhoContext';
import { useCheckin } from '../context/CheckinContext';
import QRCodePix from '../components/QRCodePix';

const CheckoutScreen = ({ navigation }) => {
  const { userType, saldo, updateSaldo } = useAuth();
  const { carrinho } = useCarrinho();
  const { confirmCheckout, isCheckoutConfirmed, doCheckout } = useCheckin();
  const [confirmedLocal, setConfirmedLocal] = useState(false);

  const handleConfirm = () => {
    confirmCheckout(userType);
    setConfirmedLocal(true);

    if (isCheckoutConfirmed()) {
      if (userType === 'client') {
        const novoSaldo = saldo - carrinho.total;
        updateSaldo(novoSaldo);
      }
      doCheckout();
      navigation.replace('ClienteHome');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.total}>Total: R$ {carrinho.total.toFixed(2)}</Text>
        {userType === 'client' && (
          <Text style={styles.saldo}>Saldo disponível: R$ {saldo.toFixed(2)}</Text>
        )}
      </View>

      {userType === 'client' && (
        <QRCodePix valor={carrinho.total} />
      )}

      <TouchableOpacity 
        style={[
          styles.confirmButton,
          confirmedLocal && styles.confirmedButton
        ]}
        onPress={handleConfirm}
        disabled={confirmedLocal}
      >
        <Text style={styles.confirmButtonText}>
          {confirmedLocal ? 'Confirmado!' : 'Confirmar Checkout'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  infoContainer: {
    width: '100%',
    marginBottom: 30,
  },
  total: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  saldo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  confirmButton: {
    backgroundColor: '#34C759',
    padding: 15,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
    marginTop: 30,
  },
  confirmedButton: {
    backgroundColor: '#8E8E93',
  },
  confirmButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CheckoutScreen;