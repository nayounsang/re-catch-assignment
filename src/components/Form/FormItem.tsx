import { PropsWithChildren } from "react";
import styles from "./FormItem.module.css";
import { Form } from "antd";

interface FormItemProps {
  label: string;
  name: string;
  required?: boolean;
  valuePropName?: string;
}

export const FormItem = ({
  label,
  name,
  required,
  children,
  valuePropName,
}: PropsWithChildren<FormItemProps>) => {
  return (
    <label id={name} className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </span>
      <Form.Item name={name} valuePropName={valuePropName} noStyle>
        {children}
      </Form.Item>
    </label>
  );
};
