import { useState, createContext } from "react";
const IsLoggedInContext = createContext();

function IsLoggedInContextProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <IsLoggedInContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </IsLoggedInContext.Provider>
  );
}

export { IsLoggedInContext, IsLoggedInContextProvider };
