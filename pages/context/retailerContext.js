import React, { createContext, useState } from 'react';

export const RetailerContext = createContext();

export const RetailerProvider = ({ children }) => {
  const [ownerName, setOwnerName] = useState('');
  const [retailerID, setRetailerID] = useState('');
  const [productData, setProductData] = useState([]);

  return (
    <RetailerContext.Provider value={{ retailerID, setRetailerID, productData, setProductData ,ownerName,setOwnerName}}>
      {children}
    </RetailerContext.Provider>
  );
};
