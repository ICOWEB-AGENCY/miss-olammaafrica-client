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
          marginLeft: 10,
          width: 150
        }}
      >
        {title}
      </label>
      <input
        type={type}
        style={{
          backgroundColor: "rgba(196, 196, 196, 0.1)",
          width: "100%",
          padding: 12,
          color: "#fff",
          borderRadius: 5,
          border: "1px solid rgba(255,255,255,0.9)",
          ...style
        }}
        {...rest}
      />
    </div>
  );
};
