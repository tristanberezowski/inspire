import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from "./reducer";

// Create the ViewModeContext
export const ViewModeContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

// Create the ViewProvider component

export const ViewModeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ViewModeContext.Provider value={{ state, dispatch }}>
    	{ children }
    </ViewModeContext.Provider>
  )
}

export { initialState }