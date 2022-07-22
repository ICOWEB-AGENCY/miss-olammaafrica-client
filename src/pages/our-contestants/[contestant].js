import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Input, VotingModal } from "../../components";
import GeneralForm from "../../components/Global/Form/Form";
import { getData, postData } from "../../utils";
import { usePaystackPayment } from "react-paystack";
import styles from "./Index.module.css";

const AContestant = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [votingModalIsOpen, setVotingModalIsOpen] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const [name, setName] = useState("");
  const [votes, setVotes] = useState("");
  const [email, setEmail] = useState("");

  const [total, setTotal] = useState(0);
  const [phone, setPhone] = useState("");
  const [user, setUser] = useState({});

  const router = useRouter();
  const contestant = router.query.contestant;

  useEffect(() => {
    (async function () {
      try {
        console.log(contestant);
        const data = await getData(`/users/user/${contestant}`);
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [contestant]);
  useEffect(() => {
    setTotal(votes * 50);
  }, [votes]);
  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: 100 * 50 * votes,
    publicKey: "pk_test_52ac3dbe89ac4fa0c7e991aeb550665815a0f815",
    // publicKey:process.NODE_ENV==="production"?"pk_live_b46762cf95f045b5d7b9e8ca27e7bc1d28d178be":'pk_test_b8241186ab1ccd92c2a4a302501be9066f4c452c'
  };
  const initializePayment = usePaystackPayment(config);
  const onSuccess = async (reference) => {
    const body = {
      reference,
      email,
      votes,
      contestant: user._id,

      name,
      amount: total,
    };
    if (phone) body.phone = phone;
    // console.log(body);
    try {
      const data = await postData("/transactions", body);
      console.log(data);
      setUser(data.user);
      setIsSuccessful(true);
      setVotingModalIsOpen(false);
    } catch (err) {
      console.log(err);
    }

    // router.push(`/contestants?reference=${parsed.contestant}&id=${parsed.id}`);
  };
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log("closed");
  };
  const init = () => {
    try {
      initializePayment(onSuccess, onClose);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      {/* <VotingModal modalIsOpen={true} /> */}
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "fixed",
          zIndex: 20,
          display: votingModalIsOpen ? "flex" : "none",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            width: "100%",
            height: "fit-content",
            maxWidth: 650,
          }}
          className="br-8"
        >
          <div>
            <div
              className="flex justify-end"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <Image
                alt="close"
                src="/images/close.svg"
                width={12}
                height={12}
                onClick={() => setVotingModalIsOpen(false)}
              />
            </div>
            <h2>Vote {user?.firstName}</h2>
            <p
              className="f14"
              style={{ color: "rgba(114, 114, 114, 1)", marginTop: 8 }}
            >
              Enter the number of votes
            </p>
          </div>
          <div className={styles.voteInputs1}>
            <Input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.voteInputs1}>
            <Input
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <div className={styles.voteInputs2}>
              <Input
                placeholder="Votes"
                value={votes}
                onChange={(e) => setVotes(e.target.value)}
              />
              <div style={{ marginTop: 18 }}>
                <p
                  className="f10"
                  style={{ color: "rgba(114, 114, 114, 1)", padding: 12 }}
                >
                  {total}
                  <span
                    className="f10"
                    style={{ color: "rgba(114, 114, 114, 1)" }}
                  >
                    {" "}
                    NGN
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Button
            title={`Vote ${user?.firstName}`}
            bg="rgba(188, 137, 36, 1)"
            style={{ marginTop: 20, width: "100%" }}
            onClick={init}
          />
        </div>
      </div>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "rgba(0,0,0,0.6)",
          position: "fixed",
          zIndex: 20,
          display: isSuccessful ? "flex" : "none",
          padding: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "white",
            padding: 20,
            width: "100%",
            height: "fit-content",
            maxWidth: 600,
          }}
          className="br-8"
        >
          <div>
            <div
              className="flex justify-end"
              style={{ marginTop: 20, marginBottom: 20 }}
            >
              <Image
                alt="close"
                src="/images/close.svg"
                width={12}
                height={12}
                onClick={() => setVotingModalIsOpen(false)}
              />
            </div>
            <div className="center flex-col">
              <Image
                alt="success"
                src="/images/success.svg"
                width={96}
                height={96}
              />
              <p className="f18" style={{ color: "#000", marginTop: 17 }}>
                Success
              </p>
              <p
                className="f14"
                style={{ color: "rgba(114, 114, 114, 1)", marginTop: 14 }}
              >
                You have just given {user.firstName} {votes} votes
              </p>
            </div>
          </div>

          <Button
            title={`Ok`}
            bg="rgba(188, 137, 36, 1)"
            style={{ marginTop: 40, width: "100%" }}
            onClick={() => {
              setEmail("");
              setVotes("");
              setName("");
              setPhone("");
              setIsSuccessful(false);
            }}
          />
        </div>
      </div>
      <div className="container relative">
        <header>
          <div>
            <img
              src="/images/profile-header.svg"
              style={{ width: "100%", height: 221, objectFit: "cover" }}
            />
          </div>
          <div className="center" style={{ transform: "translateY(-101px)" }}>
            <div
              style={{
                width: 200,
                height: 200,
                borderRadius: 100,
                overflow: "hidden",
                padding: 3,
                backgroundColor: "#fff",
              }}
            >
              <img
                src={user?.avatar || "/images/gal3.1.svg"}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: 100,
                }}
              />
            </div>
          </div>
          <div className="flex-col align-center" style={{ marginTop: -60 }}>
            <p style={{ color: "rgba(14, 14, 14, 1)" }} className="f18 fw700">
              {" "}
              {`${user?.lastName} ${user?.firstName}`}
            </p>
            <p className="f700" style={{ color: "rgba(188, 137, 36, 1)" }}>
              {user?.stateOfOrigin} state
            </p>
          </div>
          <div
            style={{
              position: "absolute",
              top: 30,
              padding: "0 20px",
              width: "100%",
            }}
            className="flex justify-between align-center"
          >
            <Button
              title="Go Back"
              bg="transparent"
              style={{ border: "1px solid #fff", padding: "11px 30px" }}
              onClick={() => router.back()}
            />
            <div
              style={{
                textAlign: "center",

                zIndex: 10,
              }}
            ></div>
          </div>
          <div
            style={{
              width: "100vw",
              height: "100vh",
              backgroundColor: "rgba(0,0,0,0.25)",
              position: "fixed",
              top: 0,
              zIndex: 10,
              display: navIsOpen ? "flex" : "none",
              justifyContent: "flex-end",
            }}
          >
            <div
              style={{
                backgroundColor: "#fff",
                padding: "50px 34px",
                width: "70vw",
              }}
              className="flex-col profile-nav"
            >
              <div style={{ marginBottom: 100 }}>
                <Image
                  alt="close"
                  src="/images/close.svg"
                  width={10}
                  height={10}
                  className="pointer"
                  onClick={() => setNavIsOpen(false)}
                />
              </div>
              <ul style={{ marginBottom: 100 }}>
                <li>
                  <Link href="">
                    <a
                      style={{
                        color: "rgba(188, 137, 36, 1)",
                        marginBottom: 20,
                        display: "inline-block",
                      }}
                      className="f14"
                    >
                      Profile
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <a
                      style={{
                        color: "rgba(51, 51, 51, 1)",
                        marginBottom: 20,
                        display: "inline-block",
                      }}
                      className="f14"
                    >
                      Change Password
                    </a>
                  </Link>
                </li>
              </ul>
              <Button
                title="Log out"
                bg="transparent"
                fg="rgba(188, 137, 36, 1)"
                style={{ padding: "11px 45px" }}
              />
            </div>
          </div>
        </header>
        <div className={styles.body}>
          <div style={{ padding: 30 }}>
            {user?.bio ? (
              <p style={{ color: "rgba(114, 114, 114, 1)" }}>{user?.bio}</p>
            ) : (
              <p style={{ textAlign: "center", padding: 30 }}>No Bio</p>
            )}
            <div style={{ marginTop: 20 }}>
              <p>
                <span
                  style={{ fontSize: 40, color: "black" }}
                  className="fw500"
                >
                  {user?.votes || 0}
                </span>
                <span style={{ color: "rgba(114, 114, 114, 1)" }}>
                  {user?.votes <= 1 ? "vote" : "votes"}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.navWrapper}>
            <div style={{ padding: 20 }} className={styles.navContainer}>
              <Button
                title="Copy Link"
                fg="#000"
                bg="#fff"
                style={{ width: "100%" }}
              />
              <Button
                title={`Vote ${user?.firstName}`}
                bg="rgba(188, 137, 36, 1)"
                style={{ width: "100%" }}
                onClick={() => setVotingModalIsOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AContestant;
