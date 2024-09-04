import React from "react";
import { Button as AntButton } from "antd";

type ButtonProps = {
  className?: string;
  text: string;
  outlet?: boolean;
};

const Button = ({ className, text, outlet }: ButtonProps) => {
  return (
    <div>
      {outlet ? (
        <AntButton
          className={`bg-white text-primary hover:text-white p-4 hover:bg-primary border-primary ${className}`}
        >
          {text}
        </AntButton>
      ) : (
        <AntButton
          className={`hover:bg-white hover:text-primary  text-md text-white   bg-primary border-primary ${className}`}
        >
          {text}
        </AntButton>
      )}
    </div>
  );
};

export default Button;
