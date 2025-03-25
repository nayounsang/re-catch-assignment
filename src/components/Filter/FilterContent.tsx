import { Checkbox } from "antd";
import { useId } from "react";
import styles from "./FilterContent.module.css";
import { FilterOption } from "../../types";

interface FilterContentProps {
  options: FilterOption[];
  selectedKeys: React.Key[];
  setSelectedKeys: (selectedKeys: React.Key[]) => void;
  confirm: (param?: { closeDropdown: boolean }) => void;
}

export const FilterContent: React.FC<FilterContentProps> = ({
  options,
  selectedKeys,
  setSelectedKeys,
  confirm,
}) => {
  const handleOptionSelect = (value: string) => {
    if (selectedKeys.includes(value)) {
      setSelectedKeys([]);
    } else {
      setSelectedKeys([value]);
    }
    confirm({ closeDropdown: false });
  };

  return (
    <div className={styles.container}>
      {options.map((option) => (
        <FilterElement
          key={option.value}
          value={option.value}
          label={option.text}
          onChange={handleOptionSelect}
          checked={selectedKeys.includes(option.value)}
        />
      ))}
    </div>
  );
};

export const FilterElement = ({
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
