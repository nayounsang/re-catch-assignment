import { PlusOutlined } from "@ant-design/icons";
import { Button as AntButton } from "antd";

export interface AddButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export const AddButton = ({ onClick, disabled }: AddButtonProps) => {
  return (
    <AntButton
      icon={<PlusOutlined />}
      onClick={onClick}
      disabled={disabled}
      type="primary"
    >
      추가
    </AntButton>
  );
};
