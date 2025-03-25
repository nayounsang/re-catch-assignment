import { Checkbox } from "antd";
import { useId } from "react";
import styles from "./FilterContent.module.css";
import { Option } from "../../types";

export const FilterContent = ({ options }: { options: Option[] }) => {
  return (
    <div className={styles.container}>
      {options.map((option, idx) => (
        <FilterElement
          key={option.value}
          value={option.value}
          label={option.label}
          checked={idx % 2 === 1}
          disabled={idx % 3 === 0}
        />
      ))}
    </div>
  );
};

const FilterElement = ({
  value,
  label,
  onChange,
  checked,
  disabled,
}: {
  value: string;
  label: string;
  onChange?: (value: string) => void;
  checked: boolean;
  disabled?: boolean;
}) => {
  const id = useId();

  return (
    <div
      className={`${styles.element} ${checked && styles.selected} ${
        disabled && styles.disabled
      }`}
    >
      <Checkbox
        id={id}
        onChange={() => {
          onChange?.(value);
        }}
        checked={checked}
        disabled={disabled}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};
