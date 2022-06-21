import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Input } from "../../components";
import GeneralForm from "../../components/Global/Form/Form";

const Profile = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  const router = useRouter();
  console.log(router);

  return (
    <div className="container relative">
      <header>
        <div>
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
              src="/images/gal3.1.svg"
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
          <Button
            title="Go Back"
            bg="transparent"
            style={{ border: "1px solid #fff", padding: "11px 30px" }}
            onClick={() => setNavIsOpen(true)}
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
      <div style={{ padding: 30 }}>
        <p style={{ color: "rgba(114, 114, 114, 1)" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque donec
          elementum nunc vitae tortor lacus ac tincidunt aenean. Volutpat nulla
          enim, ac nulla tristique. Erat dolor phasellus morbi a mauris,
          pellentesque. Sagittis lacus, arcu a eget duis. Vel semper sit
          porttitor quis magnis volutpat. Fames non leo amet non nibh diam,
          ultricies consectetur. Egestas nibh odio tempus odio et lobortis diam
          ac. Ornare dictumst purus in sit justo nulla. Aliquam mauris ac vitae
          duis feugiat tellus dolor adipiscing egestas. Posuere facilisi mi
          vitae viverra nunc nunc hac commodo. Dictum senectus quam nec auctor.
          Sit at neque, bibendum rutrum condimentum consectetur condimentum dui
          odio. Enim tellus a tellus mollis. Ut et nulla scelerisque imperdiet
          vel nulla. Suscipit sit eu magna diam lacinia dictum morbi ipsum
          lorem. At amet enim at hendrerit pellentesque sociis pulvinar. Viverra
          eget urna ut elementum consectetur. Tincidunt ac elit, eget elementum.
          Malesuada sed enim amet aliquet faucibus phasellus scelerisque elit
          auctor. Enim, euismod pellentesque eget amet cursus convallis.
        </p>
        <div style={{ marginTop: 20 }}>
          <p>
            <span style={{ fontSize: 40, color: "black" }} className="fw500">
              1234
            </span>
            <span style={{ color: "rgba(114, 114, 114, 1)" }}>votes</span>
          </p>
        </div>
      </div>

      <div className="btn" style={{ padding: 20 }}>
        <Button
          title="Copy Link"
          fg="#000"
          bg="#fff"
          style={{ width: "100%", marginBottom: 25 }}
        />
        <Button
          title="Vote"
          bg="rgba(188, 137, 36, 1)"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default Profile;
