import { PlusOutlined } from "@ant-design/icons";
import { Button as AntButton } from "antd";
import { useState } from "react";
import { RecordModal } from "../Modal/RecordModal";

export interface AddButtonProps {
  disabled?: boolean;
}

export const AddButton = ({ disabled }: AddButtonProps) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <AntButton
        icon={<PlusOutlined />}
        onClick={() => setOpen(true)}
        disabled={disabled}
        type="primary"
      >
        추가
      </AntButton>
      <RecordModal
        open={open}
        onCancel={() => setOpen(false)}
        onSubmit={() => setOpen(false)}
      />
    </>
  );
};
