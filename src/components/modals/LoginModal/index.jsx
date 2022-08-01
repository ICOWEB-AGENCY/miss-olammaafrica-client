import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Input } from "../..";
import { Formik } from "formik";
import { saveUser } from "../../../redux/store/user";
import { postData } from "../../../utils";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
// const notify = (message, color = "#FF4B0D") =>
//   toast(message, {
//     style: { color, border: "1px solid " + color }
//   });

export const LoginModal = ({
  modalIsOpen = false,
  closeModal = () => {},
  end
}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [error, setError] = useState("");

  const body = { email, password };

  // const ClickHandler =()=> {
  //   closeModal()
  //   openModal()
  // }

  const login = async (e) => {
    setError("");
    e.preventDefault();
    setIsloading(true);
    if (!body.email) {
      console.log("error-email");
      setIsloading(false);
      return;
    }
    if (!body.password) {
      console.log("error-password");
      setIsloading(false);
      return;
    }
    try {
      const data = await postData("/auth/login", body);
      if (data.error) {
        console.log(data.error.error.message);
        setError(data.error.error.message);
        setIsloading(false);
        return;
      } else if (data?.data?.token) {
        console.log(data);
        dispatch(saveUser(data.data.user));
        setIsloading(false);

        router.push("/profile");
      } else {
        notify("Network Error. Please check your internet connection.");
        setIsloading(false);
      }
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
          <Toaster />
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
            {error && (
              <p style={{ color: "#FF4B0D", padding: "5px 0" }}>{error}</p>
            )}
          </div>
        </div>
        <form onSubmit={login}>
          <Input
            title="Email Address"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: "#000" }}
          />
          <Input
            title="Password"
            fg="rgba(0, 0, 0, 1)"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: "#000" }}
          />

          <div style={{ marginTop: 50 }}>
            <Button
              type="submit"
              title={isLoading ? "A moment..." : "Login"}
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%" }}
              // onClick={login}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
