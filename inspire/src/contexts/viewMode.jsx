import React, { createContext, useReducer } from 'react';

// Define the reducer function
const viewModeReducer = (state, action) => {
  switch (action.type) {
    case "toggle_button":
      return action.payload;
    default:
      return state;
  }
};

// Define the initial state
const initialViewMode = 'home';

// Create the ViewModeContext
export const ViewModeContext = createContext();

// Create the ViewModeProvider component
export const ViewModeProvider = ({ children }) => {
  const [viewMode, dispatch] = useReducer(viewModeReducer, initialViewMode);

  const setViewMode = (mode) => {
    dispatch({ type: 'SET_VIEW_MODE', payload: mode });
  };

  return (
    <ViewModeContext.Provider value={{ viewMode, setViewMode }}>
      {children}
    </ViewModeContext.Provider>
  );
};

export const initialState = {
  active: false
}