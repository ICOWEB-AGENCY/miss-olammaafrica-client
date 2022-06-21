import Image from "next/image";
import React from "react";
import { Input, Button } from "../..";

export const RegistrationModal = ({
  modalIsOpen = false,
  closeModal = () => {},
  setPassModalIsOpen,
}) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100vw",
        backgroundColor: "rgba(0, 0, 0, 0.25)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10,
        overflowY: "auto",
        display: modalIsOpen ? "flex" : "none",
      }}
      className="logout-modal"
    >
      <div
        style={{
          backgroundColor: "white",
          maxHeight: "80vh",
          overflowY: "auto",
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
            <p className="f14">Already have an account? Sign in</p>
          </div>
        </div>
        <form>
          <Input
            title="First Name"
            fg="rgba(0, 0, 0, 1)"
            placeholder="First Name"
          />
          <Input
            title="Last Name"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Last Name"
          />
          <Input
            title="Email"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Your Email Adrress"
          />
          <Input
            title="Phone number"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Your phone number"
          />
          <Input
            title="Nationality"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Nationality"
          />
          <Input
            title="State of origin"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Select State"
          />
          <Input
            title="Birth Date"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="DD-MM-YYYY"
          />
          <div
            style={{
              padding: 22,
              boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.06)",
              marginTop: 18,
            }}
            className="br-8 flex-col center"
          >
            <Image src="/images/upload.svg" width={40} height={40} />
            <p
              className="f12"
              style={{ color: "rgba(114, 114, 114, 1)", marginTop: 14 }}
            >
              Upload Profile photo
            </p>
          </div>

          <div style={{ marginTop: 50 }}>
            <Button
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%" }}
              title="Proceed"
              onClick={(e) => {
                e.preventDefault();
                setPassModalIsOpen(true);
                closeModal();
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
