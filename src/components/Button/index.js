import React from "react";

export const Button = function ({
  bg,
  title = "Login",
  fg = "rgba(255, 255, 255, 1)",
  style,
  ...rest
}) {
  return (
    <button
      className="hover pointer"
      style={{
        padding: "16.5px 52px",
        backgroundColor: bg,
        borderRadius: 5,
        border: "1px solid rgba(188, 137, 36, 1)",
        color: fg,
        ...style,
        fontFamily: "Circular Std",
      }}
      {...rest}
    >
      {title}
    </button>
  );
};
