import React from "react";
import styles from "./Index.module.css";
import Image from "next/image";

export const GallerySection = function () {
  return (
    <section
      style={{ backgroundColor: "rgba(0, 0, 0, 0.8)", padding: "95px 0" }}
    >
      <h2
        style={{
          fontSize: 32,
          textAlign: "center",
          color: "#fff",
          fontFamily: "Publica Sans",
          marginBottom: 16,
        }}
      >
        Gallery
      </h2>
      <div
        style={{
          width: "100%",
          overflowX: "auto",
          //   padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        <ul
          style={{
            display: "none",
            columnGap: 40,
            padding: "0 40px",
            margin: "50px 0",
          }}
          className={styles.galleryNav}
        >
          {[
            { title: "ALL" },
            { title: "FASHION" },
            { title: "LIFESTYLE" },
            { title: "NATURE" },
            { title: "PORTRAITS" },
            { title: "NUDES" },
            { title: "STUDIO" },
            { title: "VIDEO" },
          ].map((sec, idx) => (
            <li key={idx} style={{ cursor: "pointer" }}>
              <p
                style={{
                  fontSize: 14,
                  //   color: "rgba(231, 221, 213, 1)",
                  color:
                    idx == 0
                      ? "rgba(231, 221, 213, 1)"
                      : "rgba(255, 255, 255, 0.6)",
                  fontFamily: "Circular Std",
                }}
              >
                {sec.title}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <div
          style={{
            display: "none",
            justifyContent: "center",
            padding: "0 15px",
            height: 700,
          }}
        >
          <img
            src="./images/gallery1.svg"
            style={{ width: "100%", objectFit: "cover" }}
          />
        </div>
        <div className={styles.galleryWrapper}>
          <div>
            <img
              src="./images/gal1.1.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="./images/gal2.1.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <img
              src="./images/gal2.2.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="./images/gal3.1.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="./images/gal4.1.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
            <img
              src="./images/gal4.2.svg"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </div>
          <div>
            <img
              src="./images/gal5.1.svg"
              style={{ width: "100%", objectFit: "contain" }}
            />
          </div>
        </div>
        <div>
          <ul
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              padding: 10,
              columnGap: 8,
              rowGap: 20,
            }}
          >
            {[1, 2, 3, 4, 4, 5, 3, 5, 6].map((gal, idx) => (
              <li key={idx}>
                <Image
                  src="/images/gal3.1.svg"
                  width={"100%"}
                  height="100%"
                  layout="responsive"
                  objectFit="cover"
                />
              </li>
            ))}
          </ul>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: 42,
            marginBottom: 52,
          }}
        >
          <div
            style={{
              height: 8,
              width: 120,
              backgroundColor: "rgba(255, 255, 255, 0.08)",

              borderRadius: 4,
            }}
            className="flex"
          >
            <div
              style={{
                height: "100%",
                backgroundColor: "rgba(237, 179, 136, 1)",
                borderRadius: 4,
                flex: 0.25,
              }}
            />
            <div
              style={{
                height: "100%",
                borderRadius: 4,
              }}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <button
            style={{
              backgroundColor: "transparent",
              border: "1px solid rgba(255, 255, 255, 0.9)",
              padding: "18px 92px",
              fontSize: 16,
              borderRadius: 5,
              color: "rgba(255, 255, 255, 0.9)",
              fontFamily: "Circular Std",
            }}
          >
            More of the gallery
          </button>
        </div>
      </div>
    </section>
  );
};
