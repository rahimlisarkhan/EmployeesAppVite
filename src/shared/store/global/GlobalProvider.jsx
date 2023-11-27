import React, { createContext, useContext, useReducer } from "react";
import { GLOBAL_PROVIDER_TYPE as type } from "./type";

const createGlobal = createContext();

const initialState = {
  users: [],
  isLoading: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case type.FILL_USERS:
      return { ...state, users: action.payload };

    case type.RMV_USER:
      const rmvUserId = action.payload;

      const filterUsers = state.users.filter((user) => user.id !== rmvUserId);

      return { ...state, users: filterUsers };

    case type.ADD_USER:
      const newUser = action.payload;

      const newUsers = [...state.users, newUser];

      return { ...state, users: newUsers };

    default:
      return state;
  }
};

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <createGlobal.Provider value={{ state, dispatch }}>
      {children}
    </createGlobal.Provider>
  );
};

export const useGlobalProvider = () => {
  const value = useContext(createGlobal);

  return value;
};
