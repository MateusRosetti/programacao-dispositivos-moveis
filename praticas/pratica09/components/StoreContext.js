import data from "../db/data.json";

import React, { createContext, useState } from 'react';


export const StoreContext = createContext();


export function StoreProvider({ children }) {
  const [stores, setStores] = useState([]);
  const [category, setCategory] = useState('');
  const [loading, setLoading] = useState(false);

  const data = [
    {
      tipo: "lojas",
      dados: [
        { id: 1, name: 'Loja A', categoria: 'Roupas' },
        { id: 2, name: 'Loja B', categoria: 'Eletrônicos' },
        { id: 3, name: 'Loja C', categoria: 'Livros' },
        { id: 4, name: 'Loja D', categoria: 'Roupas' }
      ]
    }
  ];

  
  function loadStores() {
    setLoading(true);
    const lojas = data.find(item => item.tipo === "lojas")?.dados || [];

    setTimeout(() => {
      setStores(lojas);
      setLoading(false);
    }, 2000);
  }


  function filterByCategory(categoryName) {
    if (!categoryName) {
      const lojas = data.find(item => item.tipo === "lojas")?.dados || [];
      setStores(lojas);
      setCategory('');
      return;
    }

    setLoading(true);
    setCategory(categoryName);

    setTimeout(() => {
      const result = data
        .filter(item => item.tipo === "lojas")
        .flatMap(item =>
          item.dados.filter(store => store.categoria === categoryName)
        );

      setStores(result);
      setLoading(false);
    }, 2000);
  }

  
  function searchByName(storeName) {
    if (!storeName) {
      filterByCategory(category);
      return;
    }

    setLoading(true);

    setTimeout(() => {
      const result = data
        .filter(item => item.tipo === "lojas")
        .flatMap(item =>
          item.dados.filter(
            store =>
              store.categoria === category &&
              store.name.toLowerCase().includes(storeName.toLowerCase())
          )
        );

      setStores(result);
      setLoading(false);
    }, 2000);
  }

  return (
    <StoreContext.Provider
      value={{
        stores,
        loading,
        loadStores,
        filterByCategory,
        searchByName
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}
export default {StoreContext,StoreProvider};
 