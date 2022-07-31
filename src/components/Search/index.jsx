import React, { useEffect, useState } from "react";
import { postData } from "../../utils";

export const Search = function ({ setContestants, setPage, setPages }) {
  const [term, setTerm] = useState("");

  const handleSearch = (e) => {
    setTerm(e.target.value);
  };

  useEffect(() => {
    setPages(0);
    (async function () {
      try {
        if (term) {
          const data = await postData("/users/search-by-names", {
            keyword: term,
          });
          console.log(data);
          setContestants(data.users);
        } else {
          setPage(1);
        }

        // setPages(data.pages);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [term]);
  return (
    <div  style={{ marginTop: -30, maxWidth: 450, marginLeft: "auto", marginRight: "auto" }}>
      <form>
        <div style={{ margin: "15px 0" }}>
          <label
            className=""
            style={{
              color: "#fff",
              padding: "10px 0",
              display: "inline-block",
            }}
          >
            Search for a contestant
          </label>

          <input
            type="search"
            style={{ padding: 10, width: "100%" }}
            placeholder="Search for contetsant"
            className="br-4"
            value={term}
            onChange={handleSearch}
          />
        </div>
      </form>
    </div>
  );
};
