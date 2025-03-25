import { MoreOutlined } from "@ant-design/icons";
import { Button } from "antd";

interface MenuButtonProps {
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export const MenuButton = ({ onClick, disabled }: MenuButtonProps) => {
  return (
    <Button
      type="text"
      icon={<MoreOutlined />}
      onClick={onClick}
      disabled={disabled}
    />
  );
};
