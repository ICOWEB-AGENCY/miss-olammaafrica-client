import { useEffect, useState } from "react";
import { getData } from "../../utils";

export const TopContestants = () => {
  const [contestants, setContestants] = useState([]);
  useEffect(() => {
    (async function () {
      try {
        const data = await getData("/users");
        console.log(data);
        setContestants(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  return (
    <div
      role="top-contestants"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   backgroundColor: "red",
      // }}
    >
      <ul style={{ padding: 20 }}>
        {contestants.map((contestant, idx) => (
          <li
            key={idx}
            style={{
              marginBottom: 30,
              backgroundColor: "#fff",
              borderRadius: 5,
              boxShadow: "0 4px 20px rgba(230, 231, 232, 0.5)",
              padding: "29px 27px",
            }}
          >
            <div style={{ display: "flex" }}>
              <div style={{ marginRight: 15, width: 85, height: 85 }}>
                <img
                  src={contestant.avatar || "/images/logo.svg"}
                  alt={`image of ${contestant.firstName}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: 10,
                  }}
                />
              </div>
              <div>
                <h3
                  style={{
                    textTransform: "uppercase",
                    fontFamily: "Typo Grotesk",
                    fontSize: 18,
                    fontStyle: "normal",
                    marginBottom: 10,
                  }}
                >
                  Chika Chika
                </h3>
                <p style={{ color: "rgba(108, 108, 108, 0.9)" }}>Chika Chika</p>
              </div>
            </div>
            <div
              style={{
                marginTop: 46.25,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex" }}>
                <img
                  src={"/images/thumbs-up.svg"}
                  alt={`image of ${contestant.firstName}`}
                  style={{
                    borderRadius: 10,
                  }}
                />
                <p
                  style={{
                    color: "rgba(53, 53, 53, 1)",
                    fontSize: 20,
                    fontFamily: "Typo Grotesk",
                    marginLeft: 11,
                  }}
                >
                  13,900
                </p>
              </div>
              <div>left it is</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
