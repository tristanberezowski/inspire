// example usercontext from http://www.thisdot.co/blog/creating-a-global-state-with-react-hooks/

//1: Uses the reducer function to create and maintain an application state and dispatch
//2: Returs a higher order Provider component generated by React.createContext (not a hook).
//   It passes a state and dispatch in an array as the value prop to that higher order component.

import React from "react"
import { reducer, initialState } from "./reducer"

export const UserContext = React.createContext({
  state: initialState,
  dispatch: () => null
})

export const UserProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={[ state, dispatch ]}>
    	{ children }
    </UserContext.Provider>
  )
}