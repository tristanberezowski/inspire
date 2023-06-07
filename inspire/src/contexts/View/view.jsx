import React, { createContext, useReducer } from 'react';
import { reducer, initialState } from "./reducer";

// Create the ViewModeContext
export const ViewContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

// Create the ViewProvider component

export const ViewProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <ViewContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </ViewContext.Provider>
  )
}

export { initialState }