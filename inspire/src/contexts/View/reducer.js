export const reducer = (state, action) => {
    switch (action.type) {
      case "SET_HOME":
        return {
          ...state,
          viewMode: "home"
        };
      case "SET_PROFILE":
        return {
          ...state,
          viewMode: "profile"
        };
      default:
        return state
    }
  }
  
  export const initialState = {
    active: false,
    viewMode: "home"
  }