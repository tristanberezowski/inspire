import React from "react"
import { UserContext } from "../contexts/User/UserProvider"

export default () => {
  const [ state, dispatch ] = React.useContext(UserContext)

  return (
    <button onClick={() => dispatch({ type: "toggle_button" })}>
      { state.active ? "On" : "Off" }  
    </button>
  )
}