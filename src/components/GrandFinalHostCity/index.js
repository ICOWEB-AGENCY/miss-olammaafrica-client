import React from "react";
import styles from "./Index.module.css";

export const GrandFinalHostCity = function () {
  return (
    <div
      style={{ backgroundColor: "#060806" }}
      className={styles.container}
    >
      <h3
        style={{
          textAlign: "center",
          color: "#fff",

          fontFamily: "Circular Std",
          fontWeight: "700",
          marginBottom: 18,
          paddingTop: 40,
        }}
        className={styles.heading}
      >
        Grand Finale Host City
      </h3>
      <p
        style={{
          textAlign: "center",

          fontFamily: "Circular Std",
          lineHeight: 1.8,
          color: "#fff",
          paddingBottom: 60,
        }}
        className={styles.text}
      >
        Enugu is called the ‘Coal City’ State. This is because of the
        extraordinarily large and untapped deposit of coal in the belle of its
        earth. In the 1950s before oil/gas, the Nigerian nation depended on coal
        to run the economy. Coal miners were the heroes on whose backs the
        engine of the economy ran. They engineered innovations that powered
        electricity, rail transportation, coke production, cement production,
        etc. Decades after, as the world evolved, Enugu has also evolved with
        individuals whose business empires, political leadership, humanitarian
        endeavors, academic legacies, innovations and share force of will, is
        helping shape the future and destiny of Ndi Igbo and the Nigerian
        nation. The Coal City State will be hosting the maiden grand finale of
        Miss Olamma Africa Pageant
      </p>
    </div>
  );
};
