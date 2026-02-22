"use client"

import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, reducer } from "./reducer";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const storedToken = localStorage.getItem("access-token");

    if (storedToken){
      dispatch({
        type: "LOGIN",
        payload: {token: storedToken, user: null},
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
