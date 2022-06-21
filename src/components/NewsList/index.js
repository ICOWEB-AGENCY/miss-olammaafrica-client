import { useEffect, useState } from "react";
import { getData } from "../../utils";

export const NewsList = () => {
  const blogContents = [
    {
      img: "blog1.jpeg",
      description: `
      Elizabeth Nganna Creates Record as First Miss Olamma Africa`,
    },
    {
      img: "blog2.jpg",
      description: `Africa Olamma Pageant to Debut February 2021`,
    },
    {
      img: "blog3.jpg",
      description: `Miss Olamma Africa emerges in February`,
    },
    {
      img: "blog4.jpg",
      description: `Miss Olamma 2020: Beauty Pageant For Young Igbo Women`,
    },
    {
      img: "blog5.jpg",
      description: `PAN-IGBO PAGEANT UNVEILED AMIDST PANDEMIC`,
    },
  ];

  return (
    <div
      role="Contestants"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   backgroundColor: "red",
      // }}
    >
      <ul style={{ padding: 36 }}>
        {blogContents.map((blogContent, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: 60,
              overflow: "hidden",
              borderRadius: 10,
              boxShadow: "0px 4px 30px rgba(196, 196, 196, 0.2)",
            }}
          >
            <div style={{ height: 250 }}>
              <img
                src={"/images/" + blogContent.img}
                alt={`image of ${blogContent.firstName}`}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
            <h3
              style={{
                fontFamily: "Typo Grotesk",
                padding: "18px 20px 27px 20px",
                fontSize: 20,
              }}
            >
              {blogContent.description}
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
