import React, { useState } from "react";
import { FilterFilled } from "@ant-design/icons";
import { Popover } from "antd";
import styles from "./FilterTrigger.module.css";

interface FilterTriggerProps {
  label: string;
  onClick?: () => void;
}

export const FilterTrigger: React.FC<FilterTriggerProps> = ({
  label,
  onClick,
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const content = (
    <div className={styles.popoverContent}>
      <p>체크박스 리스트가 들어갈 영역</p>
    </div>
  );

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottom"
      classNames={{ root: styles.filterPopover }}
    >
      <div className={styles.filterTrigger} onClick={onClick}>
        <span className={styles.label}>{label}</span>
        <FilterFilled className={styles.icon} />
      </div>
    </Popover>
  );
};
