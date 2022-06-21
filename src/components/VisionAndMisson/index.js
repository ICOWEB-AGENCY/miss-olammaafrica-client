import React from "react";
import styles from "./Index.module.css";
export const VisionAndMission = function () {
  return (
    <div
      style={{
        // backgroundColor: "rgba(5, 7, 5, 0.8)",
        paddingTop: 60,
      }}
      className={styles.visAndMis}
    >
      <div style={{ marginBottom: 30 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",

            fontWeight: "500",
            fontFamily: "Circular Std",
            marginBottom: 17.3,
          }}
          className={styles.heading}
        >
          Our vision
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 16,
          }}
          className={styles.text}
        >
          We are determined to create a pan African platform that celebrates the
          African beauty through the eyes of the Igbo Woman.
        </p>
      </div>
      <div style={{ marginTop: 30 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontWeight: "500",
            fontFamily: "Circular Std",
            marginBottom: 17.3,
          }}
          className={styles.heading}
        >
          Our mission
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 16,
          }}
          className={styles.text}
        >
          To design an annual contest that allows Igbo African Women to express
          themselves through pageantry.
        </p>
      </div>
    </div>
  );
};
