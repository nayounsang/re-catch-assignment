import { Select as AntSelect } from "antd";
import styles from "./select.module.css";
import { Option } from "../../types/option";
export interface SelectProps {
  defaultValue?: string;
  onChange?: (value: string, option?: Option | Option[] | undefined) => void;
  options: Option[];
}

export const Select = ({
  defaultValue,
  onChange,
  options,
}: SelectProps) => {
  return (
    <AntSelect
      defaultValue={defaultValue}
      onChange={onChange}
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
