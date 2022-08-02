import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Input } from "../../components";
import GeneralForm from "../../components/Global/Form/Form";
import ResetPasswordForm from "../../components/Global/ResetPasswordForm";

const ChangePassword = () => {
  const [navIsOpen, setNavIsOpen] = useState(false);
  return (
    <div
      className="container relative"
      style={{ minHeight: "100vh", backgroundColor: "#fff" }}
    >
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
              src="/images/gal3.1.svg"
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
            <img src="/images/logo.svg" width={50} />
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
                      display: "inline-block"
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
      <ResetPasswordForm />

      <div className="btn flex justify-between" style={{ padding: 20 }}>
        <Button
          title="Go Back"
          fg="#000"
          bg="#fff"
          style={{ flex: 0.2, padding: 10 }}
        />
        <Button
          title="Update Password"
          bg="rgba(188, 137, 36, 1)"
          style={{ flex: 0.6, padding: 11 }}
        />
      </div>
    </div>
  );
};

export default ChangePassword;
