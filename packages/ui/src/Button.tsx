import styles from "./Button.module.css";
import type { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
  onClick?: () => void;
};

export function Button({
  children = "Shared Button",
  onClick,
}: ButtonProps) {
  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}
