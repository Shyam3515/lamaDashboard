//create the initaial state first and pass it to the context

import { createContext, useReducer } from "react";
import DarkModeReducer from "./darkModereducer";

const INITIAL_STATE = {
  darkMode: false,
};

export const DarkModeContext = createContext(INITIAL_STATE);

//to reach this data everywhere we should have a context provider
//we are gonna wrap our application with these provider, and this children will be basically our application
//we are gonna need reducer which includes the reducer functions
export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);

  return (
    <DarkModeContext.Provider value={{ darkMode: state.darkMode, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};
