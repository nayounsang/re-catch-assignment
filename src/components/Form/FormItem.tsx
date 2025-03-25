import { PropsWithChildren } from "react";
import styles from "./FormItem.module.css";

interface FormItemProps {
  label: string;
  name: string;
  required?: boolean;
}

export const FormItem = ({
  label,
  name,
  required,
  children,
}: PropsWithChildren<FormItemProps>) => {
  return (
    <label id={name} className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </span>
      {children}
    </label>
  );
};
