import { createContext, useContext } from "react";
import { Theme, ThemeContextType } from "./theme";

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn("no theme provider"),
});
export const useTheme = () => useContext(ThemeContext);
