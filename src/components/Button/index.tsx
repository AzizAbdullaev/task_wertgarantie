import { FC } from "react";
import classNames from "classnames";

import styles from "./styles.module.css";

type ButtonProps = {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
  disable: boolean;
};

export const Button: FC<ButtonProps> = ({
  title,
  onClick,
  isLoading,
  disable,
}) => (
  <button
    className={classNames(
      isLoading ? styles.loader : styles.button,
      disable && styles.disable
    )}
    onClick={onClick}
    disabled={disable}
  >
    {!isLoading && <span className={styles.buttonTitle}>{title}</span>}
  </button>
);
