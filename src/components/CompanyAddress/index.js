import React from "react";

export const CompanyAddress = function () {
  return (
    <div style={{ padding: 30, backgroundColor: "rgba(5, 7, 5, 0.8) " }}>
      <div style={{ marginBottom: 24 }}>
        <h3
          style={{
            color: "#fff",
            fontFamily: "Circular Std",
            fontWeight: "700",
          }}
        >
          Address
        </h3>
        <p
          style={{
            color: "#fff",
            fontFamily: "Circular Std",
            marginTop: 10,
          }}
        >
          Suit 4/5, Lucky Plaza, Lucky Oil Station, Enugu-PH Expressway, Opp Jac
          Company, Amaechi Uwani, Awkunanaw, Enugu State
        </p>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h3
          style={{
            color: "#fff",
            fontFamily: "Circular Std",
            fontWeight: "400",
          }}
        >
          Email
        </h3>
        <ul>
          <li style={{ color: "rgba(188, 137, 36, 1)", fontSize: 14 }}>
            missolammaafrica@gmail.com,
          </li>
          <li style={{ color: "rgba(188, 137, 36, 1)", fontSize: 14 }}>
            contact@missolammaafrica.com
          </li>
        </ul>
      </div>
      <div style={{ marginBottom: 24 }}>
        <h3
          style={{
            color: "#fff",
            fontFamily: "Circular Std",
            fontWeight: "400",
            marginBottom: 5,
          }}
        >
          Call line
        </h3>
        <p
          style={{
            color: "#fff",
            fontFamily: "Circular Std",
            fontWeight: "400",
          }}
        >
          08067119142
        </p>
      </div>
    </div>
  );
};
