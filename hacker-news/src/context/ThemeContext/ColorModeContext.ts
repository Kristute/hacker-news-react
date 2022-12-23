import { createContext, useContext } from "react";

interface ColorContextSchema {
  toggleColorMode: () => void;
}

export enum THEME {
  LIGHT = "light",
  DARK = "dark",
}

export const ColorModeContext = createContext<ColorContextSchema>(
  {} as ColorContextSchema
);

export const useColorContext = () => {
  return useContext(ColorModeContext);
};
