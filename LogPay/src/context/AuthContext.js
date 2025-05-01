import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);
  const [userId, setUserId] = useState(null);
  const [saldo, setSaldo] = useState(500);

  const loginAsClient = () => {
    setUserType('client');
    setUserId('client-1'); // Fake ID
    setSaldo(500);
  };

  const loginAsVendor = () => {
    setUserType('vendor');
    setUserId('vendor-1'); // Fake ID
  };

  const updateSaldo = (novoSaldo) => {
    setSaldo(novoSaldo);
  };

  const logout = () => {
    setUserType(null);
    setUserId(null);
    setSaldo(500);
  };

  return (
    <AuthContext.Provider value={{
      userType,
      userId,
      saldo,
      loginAsClient,
      loginAsVendor,
      updateSaldo,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);