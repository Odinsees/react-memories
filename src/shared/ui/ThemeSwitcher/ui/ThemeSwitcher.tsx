import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import ThemeDarkIcon from "shared/assets/icons/theme-dark.svg";
import ThemeLightIcon from "shared/assets/icons/Theme-light.svg";
import { Button, ThemeButton } from "shared/ui/Button/Button";

import styles from "./ThemeSwitcher.module.scss";

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(styles.themeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? (
        <ThemeDarkIcon width={20} height={20} />
      ) : (
        <ThemeLightIcon width={20} height={20} />
      )}
    </Button>
  );
};
