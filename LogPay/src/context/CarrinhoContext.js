import React, { createContext, useState, useContext } from 'react';

const CarrinhoContext = createContext();

export const CarrinhoProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState({
    items: [],
    total: 0,
  });

  const addItem = (item) => {
    setCarrinho(prev => {
      const items = [...prev.items];
      const existingItem = items.find(i => i.id === item.id);

      if (existingItem) {
        existingItem.quantidade += 1;
      } else {
        items.push({ ...item, quantidade: 1 });
      }

      const total = items.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
      return { items, total };
    });
  };

  const removeItem = (itemId) => {
    setCarrinho(prev => {
      const items = prev.items.filter(item => item.id !== itemId);
      const total = items.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
      return { items, total };
    });
  };

  const updateQuantidade = (itemId, quantidade) => {
    if (quantidade < 1) return;
    
    setCarrinho(prev => {
      const items = prev.items.map(item => 
        item.id === itemId ? { ...item, quantidade } : item
      );
      const total = items.reduce((sum, item) => sum + (item.preco * item.quantidade), 0);
      return { items, total };
    });
  };

  return (
    <CarrinhoContext.Provider value={{
      carrinho,
      addItem,
      removeItem,
      updateQuantidade,
    }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

export const useCarrinho = () => useContext(CarrinhoContext);