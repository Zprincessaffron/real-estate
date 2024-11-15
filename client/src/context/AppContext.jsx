import React, { createContext, useState, useContext, useMemo } from "react";

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [formOpen, setFormOpen] = useState(false);

  // Memoize the context value to prevent unnecessary re-renders
  const contextValue = useMemo(() => ({ formOpen, setFormOpen }), [formOpen]);

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};