import React from "react";
import styles from "./Index.module.css";

export const Prizes = function () {
  return (
    <section
      style={{ backgroundColor: "#060806" }}
      className={styles.container}
    >
      <h2
        className={styles.heading}
        style={{ color: "rgba(255, 255, 255, 1)", fontFamily: "Circular Std" }}
      >
        Prizes
      </h2>
      <p
        style={{ color: "rgba(238, 238, 238, 1)", marginTop: 8 }}
        className={styles.headingSub}
      >
        Contestants are required to sell just two tickets per stage.
      </p>
      <ul
        style={{ marginTop: 32, paddingBottom: 40 }}
        className={styles.prizesWrapper}
      >
        {[
          {
            position: "Winner",
            awards: [
              "A Toyota car worth N2,000,000",
              "A sum of N1,500,000",
              "A helicopter lift to a lavish weekend at Bonny Island,",
              "Lots of gifts and media tour",
            ],
          },
          {
            position: "1st Runner up",
            awards: [
              "A sum of N1,000,000",
              "A helicopter lift to a lavish weekend at Bonny Island,",

              "Lots of gifts and media tour",
            ],
          },
          {
            position: "2nd Runner up",
            awards: [
              "A sum of N500,000",
              "A helicopter lift to a lavish weekend at Bonny Island,",

              "Lots of gifts and media tour",
            ],
          },
        ].map((position, idx) => (
          <li
            style={{
              padding: "16px 24px",
              borderRadius: 8,
              backgroundColor: "rgba(5, 7, 5, 0.1)",
              boxShadow: "0 0 24px 0 rgba(188, 137, 36, 0.3)",
              marginBottom: idx === 2 ? 0 : 25,
              paddingTop: 34,
            }}
            key={idx}
          >
            <h3
              className="f16 f700"
              style={{ color: "rgba(188, 137, 36, 1)", marginBottom: 12 }}
            >
              {position.position}
            </h3>
            <ul>
              {position.awards.map((award, idx) => (
                <li
                  key={idx}
                  style={{ color: "#fff", marginBottom: 8, fontSize: 14 }}
                >
                  {award}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
};
