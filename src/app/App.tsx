import { useTheme } from "./providers/ThemeProvider";
import { AppRouter } from "./providers/router";
import { classNames } from "shared/lib/classNames";

import { Navbar } from "widgets/Navbar";

import "./styles/index.scss";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <button onClick={toggleTheme}>Toggle theme</button>
      <AppRouter />
    </div>
  );
};
