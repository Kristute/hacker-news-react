import { createContext } from "react";

const ThemeContext = createContext(["green", () => {}]);
// everything inside createContext is for mimicing useState hook
// default color helps ts to know what type it should be
// arrow function is for that if that will be called, and it's not actually a hook, it invokes a function, that does nothing

export default ThemeContext;
