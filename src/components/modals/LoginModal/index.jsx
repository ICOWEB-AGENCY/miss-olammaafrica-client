import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Input } from "../..";
import { Formik } from "formik";
import { saveUser } from "../../../redux/store/user";
import { postData } from "../../../utils";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { setCookie, getCookie, getCookies } from "cookies-next";

// console.log(cookieCutter);
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
  const [login, setEmail] = useState("");
  const dispatch = useDispatch();
  const [password, setPassword] = useState("");
  const [isLoading, setIsloading] = React.useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const body = { login, password };

  // const ClickHandler =()=> {
  //   closeModal()
  //   openModal()
  // } 

  const loginbtn = async (e) => {
    setError("");
    e.preventDefault();
    setIsloading(true);
    if (!body.login) {
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
        setSuccess(true);
        setCookie("token", data.data.token);
        localStorage.setItem("token", data.data.token)
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
        <div className="flex" style={{ columnGap: 30, marginBottom: 32, paddingLeft: '10px', paddingRight: '10px'  }}>
          <Toaster />
          <div>
            <h2 style={{ marginBottom: 8 }}>Sign In</h2>
            <p onClick={end} className="f14 pointer hover">
              Don’t have an account? <span style={{ textDecoration: "underline", color: "#BC8924" }} >Sign Up</span>
            </p>
            {error && (
              <p style={{ color: "#FF4B0D", padding: "5px 0" }}>{error}</p>
            )}
            {success && (
              <p
                style={{
                  color: "rgba(0,255,0,1)",
                  fontWeight: "700",
                  padding: "5px 0",
                  padding: 5
                  // backgroundColor: "rgba(0,200,0,0.4)"
                }}
              >
                Your login was successful. You are being redirected...
              </p>
            )}
          </div>
          <div
            style={{ padding: 6,  marginLeft: 'auto' }}
            className="pointer hover"
            onClick={closeModal}
          >
            <Image src="/images/close.svg" width={12} height={12} />
          </div>
        </div>
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }} onSubmit={login}>
          <Input
            title="Email Address"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Enter Email"
            value={login}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: "#000" }}
          />
          {/* <Input
            title="Password"
            fg="rgba(0, 0, 0, 1)"
            type="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ color: "#000" }}
          /> */}
          <label
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: 14,
                marginTop: 12,
                marginBottom: 9,
                display: "inline-block", 
                width: 150
              }}
            >
              Password
            </label>
          <div style={{width: "100%", position: "relative",  marginBottom: 12 }} >
            <input
              style={{
                backgroundColor: "#fff",
                width: "100%",
                padding: 12,
                height: "49px",
                color: '#000',
                borderRadius: 5,
                border: "1px solid #DDDDDD",
              }} 
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text": "password"} placeholder="Password" />
              <div style={{marginLeft: "auto", position: "absolute", top: "0px", height: "48px", right: "20px", display: "flex" }} >
                <button className="pointer" style={{height: "47px", margin: "auto", backgroundColor: "transparent", border: "0px", color: "#BC8924" }} onClick={()=> setShowPassword((prev) => !prev)}  >{showPassword ? "Hide": "Show"}</button>  
              </div>
          </div>

          <div style={{ marginTop: 50 }}>
            <Button
              type="submit"
              title={isLoading ? "A moment..." : "Login"}
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%", opacity: isLoading ? 0.7 : 1 }}
              onClick={loginbtn}
              disabled={isLoading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
