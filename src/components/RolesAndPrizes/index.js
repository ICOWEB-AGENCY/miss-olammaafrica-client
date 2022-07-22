import React from "react";
import styles from "./Index.module.css";
export const RolesAndPrizes = () => {
  const prizes = [
    {
      title: "WINNER",
      content:
        "3 Million Naira, A car, All expense paid trip, Brand endorsement, and Media expoure",
    },
    {
      title: "1ST RUNNER-UP",
      content:
        "2 Million Naira, All expense paid trip, Brand endorsement, and Media expoure",
    },
    {
      title: "2ND RUNNER-UP",
      content:
        "1 Million Naira, All expense paid trip, Brand endorsement, and Media expoure",
    },
  ];

  const terms = [
    "Entrants must be female and a minimum age of 18 years old NOT above 30years of age",
    "Contestants who are married or have children are NOT welcome to enter the contest.",
    "Contestants must come from any of the 5 Igbo states of Nigeria and Igbo speaking Delta but can be resident anywhere in the world.",
    "There must be nothing in your background that could bring the contest, the organizers, or its sponsors into disrepute.",
    "All contestants must be responsible for the contest fees. This includes Registration, camping, your local expense to attend the camp.",
    "If selected as a winner you will be required to stay back in Nigeria where you will carry out your pet project. All trips to any country would be from Nigeria. You may be allowed to go back to your country of residence after the grand finale for a period of 4 weeks in order to pay homage to your family after which you will be expected to return to Nigeria to commence your pet project.",
    "All feesentry fees, Visa fees are non-refundable, and any other required fees.",
    "All monetary votes are non-refundable regardless of the circumstances.",
    "Should you be found to have broken any of the above rules, you will be removed from the competition. No refunds will be given for any monies already paid, so please ensure you read all rules and Terms & Conditions thoroughly prior to submitting your application. Should you be removed and have associated parties and sponsors requiring a refund, this will be at your own personal expense and not the responsibility of the Miss Olamma Africa organization and its parent company Emvirtue Network.",
    "If rules are found to have been broken after you have been selected, your title will be revoked and you will be required to return any prizes, including sash and crown, to the Miss Olamma Africa Organisation and the title will be given to the 1st Runner Up.",
    "Should you fail to attend on the specified date for the boot camp, you will not be entitled to a refund of any monies paid in relation to that and you could be automatically disqualified. If you arrive more than one hour late, you may also be refused entry to the boot camp.",
    "By applying for this contest, you are confirming that you suit all criteria set out above and fully understand the rules and requirements, and agree to our Terms and Conditions.",
    " Miss Olamma Africa Organisation reserves the right to refuse applications. All successful entrants will receive a confirmation by email within an hour or less of applying.",
    "Contestants shall accept the final results of all contests as honest, true, and impartial as adjudged by our competent independent judges",
    "The pictures you submit for this contest and all pictures/content generated from the process are properties of Miss Olamma Africa and its parent company.",
    "It shall be the organization's discretion as to whether or not any rules have been broken. The decision of the Miss Olamma Africa Organisation is final.",
  ];

  return (
    <div
      style={{
        backgroundColor: "rgba(5, 7, 5, 0.8)",

        paddingBottom: 20,
      }}
      className={styles.container}
    >
      <section style={{ marginBottom: 40 }}>
        <h2 className="f24 f700" style={{ color: "#fff", marginBottom: 25 }}>
          PRIZES
        </h2>
        <ul className={styles.prizesWrapper}>
          {prizes.map((sec, idx) => (
            <li key={idx} style={{ marginBottom: 20 }}>
              <h2
                style={{
                  fontFamily: "Typo Grotesk Regular",
                  marginBottom: 15,
                  color: "rgba(188, 137, 36, 1)",
                }}
                className="f20 f700"
              >
                {sec.title}
              </h2>
              <p
                className="f20"
                style={{
                  fontFamily: "Minion Pro Regular",
                  color: "rgba(238, 238, 238, 1)",
                }}
              >
                {sec.content}
              </p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2
          style={{
            fontFamily: "Typo Grotesk Regular",
            marginBottom: 15,
            color: "rgba(255, 255, 255, 0.9)",
          }}
          className="f20 f700"
        >
          TERMS AND CONDITIONS
        </h2>
        <p
          className="f16"
          style={{
            fontFamily: "Minion Pro Regular",
            marginBottom: 20,
            color: "rgba(255, 255, 255, 0.9)",
          }}
        >
          The following terms and conditions will guide the contest of Miss
          Olamma Africa Pageant. Your application and enrollment to this contest
          signifies that you have read the terms and conditions and therefore
          submit yourself to it is provisions.
        </p>
        <ul>
          {terms.map((item, idx) => (
            <li
              key={idx}
              style={{
                marginBottom: idx === terms.length - 1 ? 0 : 16,
                fontFamily: "Minion Pro",
                lineHeight: "19.5px",
                color: "rgba(238, 238, 238, 1)",
                fontSize: 14,
              }}
              className="f20"
            >
              {idx + 1}. {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
