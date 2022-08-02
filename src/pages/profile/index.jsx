import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../../components";
import GeneralForm from "../../components/Global/Form/Form";
import { useSelector } from "react-redux";
import clientBaseURL from "../../configs/clientBaseURL";

const Profile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);

  return (
    <div className="container relative">
      <header>
        <div>
          {/* <Image
          src="/images/profile-header.svg"
          width="100%"
          height={221}
          layout="responsive"
          objectFit="cover"
        /> */}
          <img
            src="/images/profile-header.svg"
            style={{ width: "100%", height: 221, objectFit: "cover" }}
          />
        </div>
        <div className="center" style={{ transform: "translateY(-52px)" }}>
          <div
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              overflow: "hidden",
              padding: 3,
              backgroundColor: "#fff",
            }}
          >
            <img
              src={user.avatar || "/images/gal3.1.svg"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 100,
              }}
            />
          </div>
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
          <div
            style={{
              textAlign: "center",

              zIndex: 10,
            }}
          >
            <Link href="/">
              <img src="/images/logo.svg" width={50} />
            </Link>
          </div>
          <Button
            title="Menu"
            bg="transparent"
            style={{ border: "1px solid #fff", padding: "11px 30px" }}
            onClick={() => setNavIsOpen(true)}
          />
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
                src={"/images/close.svg"}
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
        <GeneralForm /> 
  
      <div className='formStylebtn '>
        <div className="forminput" >
          <div style={{width: "100%"}} > 
            <Input
              title="Voting link"
              fg="#000"
              placeholder="your voting link"
              value={clientBaseURL + "/" + user.votingLink}
            />
          </div>
          <div className="formargin" > 
            <p>
              Number of Votes: <span>{user.votes}</span>
            </p> 
          </div> 
        </div>
        <div className="forminput" style={{marginTop: '20px'}} >
          <div style={{width: "100%"}} > 
            <Button
              title="Update Password"
              fg="#000"
              bg="#fff"
              style={{ width: "100%", marginBottom: 25 }}
            />
          </div>
          <div className="formargin" >  
            <Button
              title="Update Profile"
              bg="rgba(188, 137, 36, 1)"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Profile;
