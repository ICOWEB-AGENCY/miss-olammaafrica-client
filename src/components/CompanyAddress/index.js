import React from "react";
import styles from "./Index.module.css";

export const CompanyAddress = function () {
  return (
    <div
      style={{ backgroundColor: "#060806 " }}
      className={styles.container}
    >
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
