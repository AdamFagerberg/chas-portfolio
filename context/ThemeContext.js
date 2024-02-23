const { createContext, useReducer, useContext } = require("react");

export const ThemeContext = createContext();

const initialState = {
  darkTheme: false,
  userPreferences: {
    fontSize: "medium",
    reduceAnimations: false,
  },
};

function themeReducer(state, action) {
  switch (action.type) {
    case false:
      return {
        ...state,
        darkTheme: false,
      };
    case true:
      return {
        ...state,
        darkTheme: true,
      };
    default:
      return state;
  }
}

export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state: state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
