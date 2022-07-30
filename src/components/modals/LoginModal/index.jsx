import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Input } from "../..";
import { Formik } from "formik";
import { saveUser } from "../../../redux/store/user";
import { postData } from "../../../utils";
import { useDispatch } from "react-redux";

export const LoginModal = ({
  modalIsOpen = false,
  closeModal = () => {},
  end
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");

  const body = { email, password };

  // const ClickHandler =()=> {
  //   closeModal()
  //   openModal()
  // }

  const login = async (e) => {
    e.preventDefault();
    if (!body.email) {
      console.log("error-email");
      return;
    }
    if (!body.password) {
      console.log("error-password");
      return;
    }
    try {
      const data = await postData("/auth/login", body);
      if (data.error) {
        return;
      }
      console.log(data);
      dispatch(saveUser(data.data.user));
      router.push("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      style={{
        display: modalIsOpen ? "flex" : "none",
        height: "100vh",
        width: "100vw",
        // backgroundColor: "rgba(0, 0, 0, 0.25)",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 10
      }}
      className="login-modal"
    >
      <div style={{ backgroundColor: "white" }} className="br-8">
        <div className="flex" style={{ columnGap: 30, marginBottom: 32 }}>
          <div
            style={{ padding: 6 }}
            className="pointer hover"
            onClick={closeModal}
          >
            <Image src="/images/close.svg" width={12} height={12} />
          </div>
          <div>
            <h2 style={{ marginBottom: 8 }}>Sign In</h2>
            <p onClick={end} className="f14 pointer hover">
              Don’t have an account? Sign Up
            </p>
          </div>
        </div>
        <form>
          <Input
            title="Email Address"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            title="Password"
            fg="rgba(0, 0, 0, 1)"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <div style={{ marginTop: 50 }}>
            <Button
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%" }}
              onClick={login}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
