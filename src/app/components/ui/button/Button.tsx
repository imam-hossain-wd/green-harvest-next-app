import React from "react";
import { Button as AntButton } from "antd";

type ButtonProps = {
  className?: string;
  outlet?: boolean;
  onClick?: () => void;
  children: React.ReactNode; 
};

const Button = ({ className, outlet, onClick, children }: ButtonProps) => {
  return (
    <div>
      {outlet ? (
        <AntButton
        htmlType="submit"
          className={`bg-white text-primary hover:text-white p-4 hover:bg-primary border-primary ${className}`}
          onClick={onClick}
        >
          {children}
        </AntButton>
      ) : (
        <AntButton
        htmlType="submit"
          className={`hover:bg-white hover:text-primary text-md text-white bg-primary border-primary ${className}`}
          onClick={onClick}
        >
          {children}
        </AntButton>
      )}
    </div>
  );
};

export default Button;
