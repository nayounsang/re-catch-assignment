import { MoreOutlined } from "@ant-design/icons";
import { Button, Divider, Popover } from "antd";
import { useState } from "react";
import styles from "./MenuButton.module.css";
export interface MenuButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export const MenuButton = ({ onClick, disabled }: MenuButtonProps) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  return (
    <Popover
      arrow={false}
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
      placement="bottom"
      classNames={{
        body: styles["menu-container"],
      }}
      content={
        <div className={styles.menu}>
          <Button type="text">수정</Button>
          <Divider className={styles.divider} />
          <Button type="text" danger>삭제</Button>
        </div>
      }
    >
      <Button
        type="text"
        icon={<MoreOutlined />}
        onClick={onClick}
        disabled={disabled}
      />
    </Popover>
  );
};
