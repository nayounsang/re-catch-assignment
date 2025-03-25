import { Button as AntButton } from "antd";

interface ButtonProps {
  icon: React.ReactNode;
  text: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
  disabled?: boolean;
}

export const Button = ({ icon, text, onClick, disabled }: ButtonProps) => {
  return (
    <AntButton icon={icon} onClick={onClick} disabled={disabled} type="primary">
      {text}
    </AntButton>
  );
};
