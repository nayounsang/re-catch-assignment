import { Select as AntSelect } from "antd";
import styles from "./select.module.css";

export interface DefaultOptionType {
  value: string;
  label: string;
}

export interface SelectProps {
  defaultValue?: string;
  onChange?: (
    value: string,
    option?: DefaultOptionType | DefaultOptionType[] | undefined
  ) => void;
  options: DefaultOptionType[];
}

export const Select = ({ defaultValue, onChange, options }: SelectProps) => {
  console.log(styles);
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
          <AntSelect.Option
            key={value}
            value={value}
          >
            {label}
          </AntSelect.Option>
        );
      })}
    </AntSelect>
  );
};
