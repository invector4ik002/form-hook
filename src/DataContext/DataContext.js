import React, { createContext, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {

  const [data, setData] = React.useState({});

  const setValue = (values) => {
    setData((prevData) => ({
      ...prevData,
      ...values
    }));
  };

  return (
    <DataContext.Provider value={{data, setValue}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);