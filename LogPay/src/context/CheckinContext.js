import React, { createContext, useState, useContext } from 'react';

const CheckinContext = createContext();

export const CheckinProvider = ({ children }) => {
  const [activeCheckins, setActiveCheckins] = useState([]);
  const [checkoutConfirmations, setCheckoutConfirmations] = useState({
    client: false,
    vendor: false
  });

  const doCheckin = (clientId) => {
    const newCheckin = {
      clientId,
      timestamp: new Date().toISOString(),
      status: 'active'
    };
    setActiveCheckins(prev => [...prev, newCheckin]);
  };

  const confirmCheckout = (userType) => {
    setCheckoutConfirmations(prev => ({
      ...prev,
      [userType]: true
    }));
  };

  const resetCheckoutConfirmations = () => {
    setCheckoutConfirmations({
      client: false,
      vendor: false
    });
  };

  const doCheckout = (clientId) => {
    setActiveCheckins(prev => 
      prev.filter(checkin => checkin.clientId !== clientId)
    );
    resetCheckoutConfirmations();
  };

  const isCheckoutConfirmed = () => {
    return checkoutConfirmations.client && checkoutConfirmations.vendor;
  };

  return (
    <CheckinContext.Provider value={{
      activeCheckins,
      doCheckin,
      doCheckout,
      confirmCheckout,
      resetCheckoutConfirmations,
      isCheckoutConfirmed
    }}>
      {children}
    </CheckinContext.Provider>
  );
};

export const useCheckin = () => useContext(CheckinContext);