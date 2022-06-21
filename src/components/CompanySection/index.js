import React from "react";
import { VisionAndMission } from "..";
import styles from "./Index.module.css";

export const CompanySection = function () {
  return (
    <section
      style={{
        backgroundColor: "rgba(5, 7, 5, 0.8)",
      }}
      className={styles.container}
    >
      <div className={styles.aboutWrapper}>
        <div style={{ marginBottom: 105 }} className={styles.about}>
          <h2
            style={{
              textAlign: "center",
              color: "rgba(255, 255, 255, 1)",
              fontSize: 22,
              fontWeight: "700",
              fontFamily: "Circular Std",
            }}
          >
            About us
          </h2>
          <p
            style={{
              lineHeight: 1.4,
              color: "rgba(238, 238, 238, 1)",
              fontFamily: 14,
            }}
          >
            Miss Olamma Africa is not only a celebration of the beauty of Africa
            from the eyes of the Igbo women of South East Nigeria, it is the
            acknowledgement of the most virtuous, most valuable, the most
            precious gift of all that the universe has bestowed upon humanity,
            THE WOMAN.
          </p>
        </div>
      </div>
      <VisionAndMission bg="" />
      <div style={{ marginTop: 30 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: 20,
            fontWeight: "500",
            fontFamily: "Circular Std",
            marginBottom: 17.3,
          }}
        >
          The Contest
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 16,
          }}
        >
          Miss Olamma Africa Pageant is an online voting contest that culminates
          into a grand finale amidst a high-quality audience, the media and
          stakeholders across Nigeria
        </p>
      </div>
    </section>
  );
};
