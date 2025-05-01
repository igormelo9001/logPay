import React from 'react';
import { View, StyleSheet } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const QRCodePix = ({ valor }) => {
  // Dados fake do PIX
  const pixData = {
    chavePix: "12345678900",
    valor: valor,
    beneficiario: "LogPay Demo",
    cidade: "São Paulo",
    transactionId: "LOGPAY" + Date.now()
  };

  return (
    <View style={styles.container}>
      <QRCode
        value={JSON.stringify(pixData)}
        size={200}
        color="black"
        backgroundColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default QRCodePix;