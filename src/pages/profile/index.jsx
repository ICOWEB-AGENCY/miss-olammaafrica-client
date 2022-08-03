import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../../components";
import GeneralForm from "../../components/Global/Form/Form";
import { useSelector } from "react-redux";
import clientBaseURL from "../../configs/clientBaseURL";
import { useRouter } from "next/router";
import { getData, getProtectedData } from "../../utils";
import cookie from "cookies";
import cookieCutter from "cookie-cutter";
import { setCookie, getCookie, getCookies } from "cookies-next";

const Profile = ({ data }) => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const { user } = useSelector((state) => state.user);
  const [copySuccess, setCopySuccess] = useState('');
  const textAreaRef = React.useRef(null); 

  function copyToClipboard(e) {
    textAreaRef.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  return (
    <div style={{paddingBottom: "40px"}} className="container relative">
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
              backgroundColor: "#fff"
            }}
          >
            <img
              src={user.avatar}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 100
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: 30,
            padding: "0 20px",
            width: "100%"
          }}
          className="flex justify-between align-center"
        >
          <div
            style={{
              textAlign: "center",

              zIndex: 10
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
            justifyContent: "flex-end"
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "50px 34px",
              width: "70vw"
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
                      display: "inline-block"
                    }}
                    className="f14"
                  >
                    Profile
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/profile/change-password">
                  <a
                    style={{
                      color: "rgba(51, 51, 51, 1)",
                      marginBottom: 20,
                      display: "inline-block"
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
          <div style={{width: "100%", position: 'relative'}} > 
                    
            <input
              ref={textAreaRef}
              value={clientBaseURL + "/" + user.votingLink}
              style={{
                backgroundColor: "#fff",
                width: "100%",
                padding: 12,
                height: "45px",
                color: '#000',
                borderRadius: 5,
                border: "1px solid #DDDDDD",
              }}
            />
            <div style={{marginLeft: "auto", position: "absolute", top: "0px", height: "44px", right: "20px", display: "flex" }} >
              <button style={{height: "44px", margin: "auto", backgroundColor: "#fff", border: "0px", color: "#BC8924" }} onClick={copyToClipboard}>{copySuccess === "" ? 'COPY' : copySuccess}</button>  
            </div>

            {/* <Input
              title="Voting link"
              fg="#000"
              placeholder="your voting link"
              value={clientBaseURL + "/" + user.votingLink}
            /> */}
          </div>
          <div className="formargin" > 
            <p>
              Number of Votes: <span>{user.votes}</span>
            </p> 
          </div> 
        </div>
        <div className="forminput" >
          <div style={{width: "100%"}} > 
            {/* <Button
              title="Update Password"
              fg="#000"
              bg="#fff"
              style={{ width: "100%", marginBottom: 25 }}
            /> */}
            <button
            style={{
              padding: "16.5px 52px",
              backgroundColor: "#fff",
              borderRadius: 5,
              border: "1px solid #BC8924",
              color: "#BC8924", 
              fontFamily: "Circular Std",
              width: "100%",
marginTop: '20px'
            }}>
              Update Password
            </button>
          </div>
          <div className="formargin" >  
            <Button
              title="Update Profile"
              bg="rgba(188, 137, 36, 1)"
              style={{ width: "100%",marginTop: '20px'}}
            />
          </div>
        </div>
      </div> 
    </div>
  );
};

export default Profile;

export async function getServerSideProps({ req, res }) {
  // Fetch data from external API
  // const router = useRouter();
  const tokens = getCookies({ req, res });
  console.log(tokens);
  console.log(tokens.token);

  const data = await getProtectedData(`/users/a-user`, tokens.token);
  // console.log(data);
  // Pass data to the page via props
  return { props: { data } };
}
