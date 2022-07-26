import Link from "next/link";
import React from "react";
import styles from "./Index.module.css";

export const Footer = function () {
  return (
    <footer style={{ backgroundColor: "#060806", paddingTop: 61 }}>
      <section role="links" className="flex justify-center">
        <ul className="flex" style={{ columnGap: 16 }}>
          {[
            { img: "facebook.svg" },
            { img: "instagram.svg" },
            { img: "twitter.svg" },
          ].map((link, idx) => (
            <li key={idx}>
              <a href="">
                <img src={"./images/" + link.img} />
              </a>
            </li>
          ))}
        </ul>
      </section>
      <ul
        className={styles.linksContainer}
        style={{ marginTop: 50, marginBottom: 42 }}
      >
        {[
          {
            menu: "Terms of use",
          },
          { menu: "Privacy poilicy" },
          { menu: "How voting works" },
        ].map((menu, idx) => (
          <li key={idx}>
            <Link href="/">
              <a
                style={{
                  color: "rgba(188, 137, 36, 1)",
                  fontSize: 14,
                  fontFamily: "Circular Std",
                  padding: 10,
                  display: "inline-block",
                }}
              >
                {menu.menu}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <div>
        <p
          style={{
            color: "rgba(255, 255, 255, 1)",
            fontSize: 12,
            lineHeight: 1.6,
            textAlign: "center",
            padding: "0 50px 38px 50px",
          }}
        >
          Copyright 2022 Miss Olamma africa beauty Pageant. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
