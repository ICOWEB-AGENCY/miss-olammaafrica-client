import React from "react";
import { Button, ContactForm, Input } from "..";
import styles from "./Index.module.css";

export const ComplainsSection = function () {
  return (
    <section
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.9)",
      }}
      className={styles.container}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div style={{ marginBottom: 105 }} className={styles.complainWrapper}>
          <h2
            style={{
              color: "rgba(255, 255, 255, 1)",
              fontSize: 24,
              fontWeight: "700",
              fontFamily: "Typo Grotesk Black",
              marginBottom: 10,
            }}
          >
            Got a complain?
          </h2>
          <p
            style={{
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.9)",
              fontSize: 14,
            }}
          >
            Emvirtue Network is made up of a team of stellar break away from the
            norm professional young men and women who have a depth of inspired
            imaginations, core brand strategy and innovation mechanics.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
