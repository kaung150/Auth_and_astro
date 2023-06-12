import { createContext, useContext, useState } from "react";

const stateContext = createContext({
  image: "",
  setImage: () => {},
});

const ContextProvider = ({ children }) => {
  const [image, setImage] = useState();

  const value = { image, setImage };

  return (
    <stateContext.Provider value={value}>{children}</stateContext.Provider>
  );
};

export default ContextProvider;
export const useStateContext = () => useContext(stateContext);
