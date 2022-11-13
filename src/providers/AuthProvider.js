import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const AuthContextDispatch = createContext();

const LOCAL_STORAGE_AUTH_STATE = "authState";

const AuthProvider = ({ children }) => {
  const [state, setState] = useState(false);

  useEffect(() => {
    const userData =
      JSON.parse(localStorage.getItem(LOCAL_STORAGE_AUTH_STATE)) || false;
    if (userData) {
      setState(userData);
    }
  }, []);

  useEffect(() => {
    const data = JSON.stringify(state);
    localStorage.setItem(LOCAL_STORAGE_AUTH_STATE, data);
  }, [state]);

  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispatch.Provider value={setState}>
        {children}
      </AuthContextDispatch.Provider>
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
export const useAuthAction = () => useContext(AuthContextDispatch);
