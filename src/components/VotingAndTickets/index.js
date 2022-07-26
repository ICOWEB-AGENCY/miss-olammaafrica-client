import React from "react";
import styles from "./Index.module.css";

export const VotingAndTickets = function () {
  return (
    <section
      style={{
        backgroundColor: "#060806",
      }}
      className={styles.container}
    >
      <div style={{ marginBottom: 50 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",

            fontWeight: "700",
            fontFamily: "Circular Std",
            marginBottom: 10,
          }}
          className={styles.heading}
        >
          Voting
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 14,
          }}
          className={styles.text}
        >
          Voting is done in two ways. 50% of your votes are generated from
          online clicks while the remaining 50% is generated from ticket sales.
          First 2 weeks of every voting stage will be ticket sales (which
          amounts to 50%) while the last 2 weeks will be online votes (which
          also amounts to 50%) each voting stage lasts for 4 weeks.
        </p>
      </div>
      <div style={{ marginBottom: 105 }}>
        <h2
          style={{
            color: "rgba(255, 255, 255, 0.9)",

            fontWeight: "700",
            fontFamily: "Circular Std",
            marginBottom: 10,
          }}
          className={styles.heading}
        >
          Ticket Sales
        </h2>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 14,
          }}
          className={styles.text}
        >
          Contestants are required to sell just 1 VIP ticket of #10,000 naira
          per stage which guarantees your 50% votes This means a total of 2
          tickets for the entire competition. Any ticket sold gives the buyer
          access to the grand finale
        </p>
        <p
          style={{
            lineHeight: 1.4,
            color: "rgba(226, 226, 226, 0.9)",
            fontFamily: 14,
            marginTop: 25,
          }}
          className={styles.text}
        >
          Same process is repeated in stage 2. At stage 2, after your ticket
          sale is locked in, the winner will be determined by the amount of vote
          generated online, physical presence at the grand finale, and panel of
          judges’ decision and the grand finale.
        </p>
      </div>
    </section>
  );
};
