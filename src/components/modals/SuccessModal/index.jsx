import Image from "next/image";
import React from "react";
import { Input, Button } from "../..";

export const SuccessModal = ({
  modalIsOpen = false,
  closeModal = () => {},
  end
}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        // backgroundColor: "rgba(0, 0, 0, 0.25)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        overflowY: "auto",
        display: modalIsOpen ? "flex" : "none"
      }}
      className="register-auth-modal"
    >
      <div
        style={{
          backgroundColor: "white",
          maxHeight: "80vh",
          overflowY: "auto"
        }}
        className="br-8"
      >
        <div className="flex" style={{ columnGap: 30, marginBottom: 32 }}>
          <div
            style={{ padding: 6 }}
            className="pointer hover"
            onClick={closeModal}
          >
            <Image src="/images/back.svg" width={5} height={10} />
          </div>
          <div>
            <h2 style={{ marginBottom: 8 }} className="f24 fw500">
              Set up your account
            </h2>
            <p onClick={end} className="f14 pointer hover ">
              Already have an account? Sign In
            </p>
          </div>
        </div>
        <form>
          <Input
            title="Password"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Password"
          />
          <div>
            <p className="f12" style={{ color: "rgba(114, 114, 114, 1)" }}>
              Clicking and submitting this form binds me to the terms and
              conditions and all the governing principles named and unnamed of
              this contest
            </p>
          </div>

          <div style={{ marginTop: 30 }}>
            <Button
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%" }}
              title="Proceed"
            />
          </div>
        </form>
      </div>
    </div>
  );
};
