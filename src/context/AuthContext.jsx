import { AUTH } from "../constants.js";
import React, { useReducer } from "react";
import { getUserById } from "../services/users.js";
import { useMutation } from "react-query";

const tokenStorage = localStorage.getItem("token");
const userStorage = JSON.parse(localStorage.getItem("user"));
const userInfoStorage = JSON.parse(localStorage.getItem("userInfo"));

const initialState = {
  isAuthenticated: tokenStorage && userStorage ? true : false,
  token: tokenStorage ?? null,
  user: userStorage ?? null,
  userInfo: userInfoStorage ?? null,
};

function authReducer(state, action) {
  const { type, payload } = action;
  switch (type) {
    case AUTH.LOGIN: {
      const { token, user, userInfo } = payload;
      return {
        ...state,
        isAuthenticated: true,
        token,
        user,
        userInfo,
      };
    }
    case AUTH.LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        user: null,
        userInfo: null,
      };
    case AUTH.ADDINFO:
      return {
        ...state,
        userInfo: payload,
      };
    default:
      return state;
  }
}

const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(authReducer, initialState);

  const handleLogin = (data) => {
    dispatch({ type: AUTH.LOGIN, payload: data });
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const handleLogout = () => {
    dispatch({ type: AUTH.LOGOUT });
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("userInfo");
  };

  const handleAddInfo = (data) => {
    dispatch({ type: AUTH.ADDINFO, payload: data });
    localStorage.setItem("userInfo", JSON.stringify(data));
  };

  return (
    <AuthContext.Provider
      value={{ state, handleLogin, handleLogout, handleAddInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
