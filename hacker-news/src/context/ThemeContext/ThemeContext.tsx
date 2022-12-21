import {
  useEffect,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";
import { ThemeProvider } from "@mui/material/styles";
import { lightTheme, darkTheme } from "./color/color";

type Props = {
  children?: React.ReactNode;
};

type ThemeType = "dark" | "light";

type ThemeContext = {
  themeTitle: ThemeType;
  setTheme: Dispatch<SetStateAction<ThemeType>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const themeMap = {
  light: lightTheme,
  dark: darkTheme,
} as const;

const getTheme = (): ThemeType => {
  const themeTitle = localStorage.getItem("theme") as ThemeType;
  if (!themeTitle) {
    // Default theme is taken as light
    localStorage.setItem("theme", "light");
    return "light";
  } else {
    return themeTitle as ThemeType;
  }
};

export const ThemeSetter = ({ children }: Props) => {
  const [themeTitle, setTheme] = useState<ThemeType>(getTheme);

  function toggleTheme() {
    if (themeTitle === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", themeTitle);
    };

    refreshTheme();
  }, [themeTitle]);

  return (
    <ThemeProvider theme={themeMap[themeTitle]}>
      <ThemeContext.Provider
        value={{
          themeTitle,
          setTheme,
          toggleTheme,
        }}
      >
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};
