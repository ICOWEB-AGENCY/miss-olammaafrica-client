import React from "react";

export const PageHeader = ({ title }) => {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        className="f40 ct"
        style={{
          color: "rgba(14, 14, 14, 0.9)",
          marginBottom: 20,
          fontWeight: "400",
          fontFamily: "Minion Pro",
        }}
      >
        {title}
      </h1>
      <div
        style={{
          width: 90,
          height: 4,
          backgroundColor: "rgba(188, 137, 36, 1)",
        }}
      />
    </div>
  );
};
