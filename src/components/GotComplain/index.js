import React from "react";
import { ContactForm } from "..";
import styles from "./Index.module.css";

export const GOtComplain = function () {
  return (
    <div
      style={{
        backgroundColor: "rgba(5, 7, 5, 0.8) ",

        paddingBottom: 70,
      }}
    >
      <div className={styles.headerWrapper}>
        <div className={styles.complainHeader}>
          <h2 className="f20" style={{ color: "#fff", marginBottom: 10 }}>
            Got a complain?
          </h2>
          <p style={{ color: "#fff", lineHeight: 1.7, marginBottom: 30 }}>
            Emvirtue Network is made up of a team of stellar break away from the
            norm professional young men and women who have a depth of inspired
            imaginations, core brand strategy and innovation mechanics.
          </p>
        </div>
      </div>
      <div className="flex justify-center" style={{}}>
        <div style={{ width: "50%", maxWidth: 700, minWidth: 250 }}>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
