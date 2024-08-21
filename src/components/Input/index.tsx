import { FC } from "react";

import styles from "./styles.module.css";

type InputProps = {
  className?: string;
  onChange: (k: string) => void;
  value: string;
  onSubmit?: (e: React.KeyboardEvent) => void;
  error?: string | boolean;
  disabled?: boolean;
};

export const Input: FC<InputProps> = ({
  value,
  onChange,
  onSubmit,
  disabled,
}) => (
  <input
    className={styles.input}
    value={value}
    onChange={(e) => onChange(e.target.value)}
    type="text"
    placeholder="Enter the country name"
    onKeyDown={onSubmit}
    disabled={disabled}
  />
);
