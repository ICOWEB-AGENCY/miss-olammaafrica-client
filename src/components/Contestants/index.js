import Link from "next/link";
import { useEffect, useState } from "react";
import { getData } from "../../utils";
import { Button } from "../Button";
import { Search } from "../Search";
import styles from "./Index.module.css";

export const Contestants = () => {
  const [contestants, setContestants] = useState([]);
  const [page, setPage] = useState(1);
  const [pages, setPages] = useState(0);

  useEffect(() => {
    (async function () {
      try {
        const data = await getData("/users?limit=8&page=" + page);
        // console.log(data);
        setContestants(data.users);
        setPages(data.pages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [page]);
  const handleNext = () => {
    if (page + 1 <= pages) {
      setPage(page + 1);
    }
  };
  const handlePrev = () => {
    if (page - 1 >= 1) {
      setPage(page - 1);
    }
  };
  return (
    <div
      role="Contestants"
      // style={{
      //   display: "flex",
      //   justifyContent: "center",
      //   backgroundColor: "red",
      // }}
      style={{ backgroundColor: "rgba(5, 7, 5, 0.8)" }}
      className={styles.container}
    >
      <div>
        <Search
          setContestants={setContestants}
          setPage={setPage}
          setPages={setPages}
        />
        {contestants.length === 0 ? (
          <p style={{ textAlign: "center", color: "#fff", padding: 20 }}>
            There is no match
          </p>
        ) : (
          <>
            <ul style={{ padding: 0 }} className={styles.contestantsWrapper}>
              {contestants.map((contestant, idx) => (
                <li
                  key={idx}
                  style={{
                    // height: 500,
                    marginBottom: 60,
                    overflow: "hidden",
                    borderRadius: 2,
                    cursor: "pointer",
                  }}
                >
                  <div style={{ height: 300, overflow: "hidden" }}>
                    <Link href={"/our-contestants/" + contestant.votingLink}>
                      <img
                        src={contestant.avatar || "/images/logo.svg"}
                        alt={`image of ${contestant.firstName}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                        className="grow"
                      />
                    </Link>
                  </div>
                  <div style={{ marginTop: 17 }}>
                    <Link href={"/our-contestants/" + contestant.votingLink}>
                      <p
                        style={{
                          color: "rgba(255, 255, 255, 1)",
                          fontSize: 18,
                          fontWeight: "700",
                          marginBottom: 6,
                        }}
                      >
                        {`${contestant.lastName} ${contestant.firstName}`}
                      </p>
                    </Link>
                    <div className="flex justify-between align-center">
                      <p
                        style={{
                          fontSize: 16,
                          fontWeight: "700",
                          color: "rgba(188, 137, 36, 1)",
                        }}
                      >
                        {contestant.stateOfOrigin} State
                      </p>
                      <Link href={"/our-contestants/" + contestant.votingLink}>
                        <a
                          className=""
                          style={{
                            padding: "6px 15px",
                            color: "white",
                            backgroundColor: "rgba(188, 137, 36, 1)",
                            borderRadius: 4,
                          }}
                        >
                          Vote
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: 18,
                      alignItems: "center",
                    }}
                  >
                    <p
                      style={{
                        fontSize: 14,
                        color: "#fff",
                        fontWeight: "500",
                        padding: "7px 16px",
                        borderRadius: 50,
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                      }}
                      className="pointer"
                    >
                      Share
                    </p>
                    <p
                      style={{
                        fontSize: 16,
                        color: "rgba(188, 137, 36, 1)",
                        fontWeight: "500",
                      }}
                    >
                      {contestant.votes}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <div className={"flex justify-between " + (!(pages > 1) && "hide")}>
              <Button
                bg="rgba(188, 137, 36, 1)"
                title="Previous"
                style={{
                  width: 100,
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={handlePrev}
              />
              <Button
                bg="rgba(188, 137, 36, 1)"
                title="Next"
                style={{
                  width: 100,
                  display: "flex",
                  justifyContent: "center",
                }}
                onClick={handleNext}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
