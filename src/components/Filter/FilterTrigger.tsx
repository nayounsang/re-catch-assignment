import React, { useState } from "react";
import { FilterFilled } from "@ant-design/icons";
import { Popover } from "antd";
import styles from "./FilterTrigger.module.css";

interface FilterTriggerProps {
  label: string;
  onClick?: () => void;
  content?: React.ReactNode;
}

export const FilterTrigger = ({
  label,
  onClick,
  content,
}: FilterTriggerProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      content={content}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottom"
      classNames={{
        root: styles.filterPopover,
        body: styles.popoverContent,
      }}
      arrow={false}
    >
      <div className={styles.filterTrigger} onClick={onClick}>
        <span className={styles.label}>{label}</span>
        <FilterFilled className={styles.icon} />
      </div>
    </Popover>
  );
};
