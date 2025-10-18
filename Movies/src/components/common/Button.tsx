import React from "react";
import type { ButtonProps } from "../../interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  variant,
  className,
  onClick,
  type,
  isActive,
}) => {
  const baseStyles = `flex justify-center items-center gap-2 font-semibold ${className}`;
  const variantStyle =
    variant === "primary" ? "bg-none  border-2 border-white" : "";
  const activeStyles = isActive ? "border-2 border-white ring-2 " : "";
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${baseStyles} ${variantStyle} ${activeStyles}`}
    >
      {title}
      {variant === "primary" ? (
        <img src="/images/player.png" className="w-5 h-5" />
      ) : (
        ""
      )}
    </button>
  );
};

export default Button;
