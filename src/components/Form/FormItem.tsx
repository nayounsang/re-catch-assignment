import { PropsWithChildren } from "react";
import styles from "./FormItem.module.css";
import { Form, FormItemProps as AntFormItemProps } from "antd";

interface FormItemProps extends AntFormItemProps {
  label: string;
  name: string;
  required?: boolean;
}

export const FormItem = ({
  label,
  name,
  required,
  children,
  ...props
}: PropsWithChildren<FormItemProps>) => {
  return (
    <label id={name} className={styles.container}>
      <span className={styles.label}>
        {label}
        {required && <span className={styles.required}>*</span>}
      </span>
      <Form.Item {...props} name={name} noStyle>
        {children}
      </Form.Item>
    </label>
  );
};
