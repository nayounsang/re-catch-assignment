import { MoreOutlined } from "@ant-design/icons";
import { Button, Divider, Popover } from "antd";
import { useState } from "react";
import styles from "./MenuButton.module.css";
import { useRecordStore } from "../../store/recordStore";
export interface MenuButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
  /**
   * Record 스키마의 key
   */
  keyID: string;
}

export const MenuButton = ({ onClick, disabled, keyID }: MenuButtonProps) => {
  const [open, setOpen] = useState(false);
  const { deleteRecords } = useRecordStore();

  const handleOpenChange = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const handleDelete = () => {
    deleteRecords([keyID]);
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
          <Button type="text" danger onClick={handleDelete}>
            삭제
          </Button>
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
