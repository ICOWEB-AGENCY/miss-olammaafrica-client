import React from "react";

export const Input = function ({
  title,
  fg = "rgba(255, 255, 255, 1)",
  type = "text",
  style,
  ...rest
}) {
  return (
    <div style={{ marginBottom: 14.2 }}>
      <label
        style={{
          color: fg,
          fontSize: 14,
          marginBottom: 9,
          display: "inline-block",
          marginLeft: 0,
          width: 150,
        }}>
        {title}
      </label>
      <input
        type={type}
        style={{
          backgroundColor: "#fff",
          width: "100%",
          padding: 12,
          height: "49px",
          color: '#000',
          borderRadius: 5,
          border: "1px solid #DDDDDD",
        }}
        {...rest}
      />
    </div>
  );
};
