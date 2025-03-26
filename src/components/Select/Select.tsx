import { Select as AntSelect, SelectProps as AntSelectProps } from "antd";
import styles from "./select.module.css";
import { Option } from "../../types/option";
export interface SelectProps extends AntSelectProps {
  options: Option[];
}

export const Select = ({ options, ...props }: SelectProps) => {
  return (
    <AntSelect
      {...props}
      className={styles.select}
      popupClassName={styles["select-item"]}
    >
      {options.map((option) => {
        const { value, label } = option;
        return (
          <AntSelect.Option key={value} value={value}>
            {label}
          </AntSelect.Option>
        );
      })}
    </AntSelect>
  );
};
