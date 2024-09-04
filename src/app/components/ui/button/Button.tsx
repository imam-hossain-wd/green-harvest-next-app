import React from "react";
import { Button as AntButton } from "antd";

type ButtonProps = {
  className?: string;
  text: React.ReactNode; // Allows string, icon, or any JSX element
  outlet?: boolean;
  onClick?: () => void; // Optional click handler
};

const Button = ({ className, text, outlet, onClick }: ButtonProps) => {
  return (
    <div>
      {outlet ? (
        <AntButton
          htmlType="submit"
          className={`bg-white text-primary hover:text-white p-4 hover:bg-primary border-primary ${className}`}
          onClick={onClick}
        >
          {text}
        </AntButton>
      ) : (
        <AntButton
          htmlType="submit"
          className={`hover:bg-white hover:text-primary text-md text-white bg-primary border-primary ${className}`}
          onClick={onClick}
        >
          {text}
        </AntButton>
      )}
    </div>
  );
};

export default Button;
