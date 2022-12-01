import {
  useEffect,
  createContext,
  useState,
  SetStateAction,
  Dispatch,
} from "react";

type Props = {
  children?: React.ReactNode;
};

type ThemeContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContext>({} as ThemeContext);

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    // Default theme is taken as light
    localStorage.setItem("theme", "light");
    return "light";
  } else {
    return theme;
  }
};

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState(getTheme);

  function toggleTheme() {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  }

  useEffect(() => {
    const refreshTheme = () => {
      localStorage.setItem("theme", theme);
    };

    refreshTheme();
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
