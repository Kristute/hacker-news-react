import { createContext } from "react";

interface ColorContextSchema {
  toggleColorMode: () => void;
}

export const ColorModeContext = createContext<ColorContextSchema>(
  {} as ColorContextSchema
);
