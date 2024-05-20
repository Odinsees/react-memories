import { FC } from "react";
import { classNames } from "shared/lib/classNames";
import { AppLink } from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";

import styles from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink to="/" className={styles.mainLink}>
          Main
        </AppLink>
        <AppLink to="/about">About</AppLink>
      </div>
      <ThemeSwitcher />
    </div>
  );
};
