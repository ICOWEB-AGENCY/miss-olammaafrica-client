import Image from "next/image";
import React from "react";
import { useRef } from "react";
import { useState } from "react";
import { Input, Button } from "../..";
import { postData } from "../../../utils";
import toast, { Toaster } from "react-hot-toast";
const notify = (message) =>
  toast(message, {
    style: { color: "#FF4B0D", border: "1px solid #FF4B0D" }
  });

export const RegistrationModal = ({
  modalIsOpen = false,
  closeModal = () => {},
  setPassModalIsOpen,
  end
}) => {
  const imageRef = useRef();
  const [country, setCountry] = React.useState([]);
  const [selectedcountry, setSelectedCountry] = React.useState("");
  const [stateloading, setStateLoading] = React.useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [imagePath, setImagePath] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [stateOfOrigin, setStateOfOrigin] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const body = {
    firstName,
    lastName,
    email,
    phone,
    dateOfBirth,
    nationality: selectedcountry,
    stateOfOrigin
  };
  // console.log(body);
  const register = async () => {
    try {
      setStateLoading(true);
      const formData = new FormData();
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("nationality", selectedcountry);
      formData.append("stateOfOrigin", stateOfOrigin);
      formData.append("birthday", dateOfBirth);
      formData.append("password", password);
      formData.append("image", image);

      const data = await postData("/auth/register", formData);
      if (data.error) {
        console.log(data.error.error.message);
        notify(data.error.error.message);
        setStateLoading(false);
        return;
      } else if (data?.data?.token) {
        setStateLoading(false);
        notify("Registration Was successful");
        setEmail("");
        setPhone("");
        setPassword("");
        setFirstName("");
        setLastName("");
        closeModal();
      } else {
        notify(
          "Something went wrong. Please , check your internet connection."
        );
        setStateLoading(false);
      }
    } catch (error) {
      console.log("error");
      setStateLoading(false);
    }
  };

  const handleImageClick = () => {
    imageRef?.current?.click();
  };

  const [state, setState] = React.useState([]);

  React.useEffect(() => {
    fetch(`https://www.universal-tutorial.com/api/countries/`, {
      method: "GET", // or 'PUT'
      headers: {
        Authorization: `Bearer ${localStorage.getItem("country-token")}`,
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });

    fetch(`https://www.universal-tutorial.com/api/states/${selectedcountry}`, {
      method: "GET", // or 'PUT'
      headers: {
        Authorization: `Bearer ${localStorage.getItem("country-token")}`,
        Accept: "application/json"
      }
    })
      .then((response) => response.json())
      .then((data) => {
        setState(data);
        if (data.length !== 0) {
          setStateLoading(false);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [selectedcountry]);

  const CountryHandler = (e) => {
    setSelectedCountry(e.target.value);
  };

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
      className="logout-modal"
    >
      <Toaster />
      <div
        style={{
          backgroundColor: "white",
          maxHeight: "80vh",
          overflowY: "auto",
        }}
        className="br-8"
      >
        <div className="flex" style={{ columnGap: 30, marginBottom: 32, paddingLeft: '10px', paddingRight: '10px' }}> 
          <div>
            <h2 style={{ marginBottom: 8 }} className="f24 fw500">
              Set up your account
            </h2>
            <p onClick={end} className="f14 pointer hover">
              Already have an account? <span style={{ textDecoration: "underline", color: "#BC8924" }} >Sign In</span> 
            </p>
          </div>
          <div
            style={{ padding: 6, marginLeft: 'auto' }}
            className="pointer hover"
            onClick={closeModal} >
            <Image src="/images/close.svg" width={12} height={12} />
          </div>
        </div>
        <div style={{ paddingLeft: '10px', paddingRight: '10px' }} >
          <Input
            title="First Name"
            fg="rgba(0, 0, 0, 1)"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            style={{ color: "#000" }}
          />
          <Input
            title="Last Name"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            style={{ color: "#000" }}
          />
          <Input
            title="Email"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Your Email Adrress"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: "#000" }}
          />
          <Input
            title="Phone number"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Your phone number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            style={{ color: "#000" }}
          />

          <div style={{ marginBottom: 14.2 }}>
            <label
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: 14,
                marginBottom: 9,
                display: "inline-block", 
                width: 150
              }}
            >
              Nationality
            </label>
            <select
              onChange={(e) => CountryHandler(e)}
              placeholder="Select Country"
              style={{
                backgroundColor: "#fff",
                width: "100%",
                padding: 12,
                height: "45px",
                color: '#000',
                borderRadius: 5,
                border: "1px solid #DDDDDD",
              }}
            >
              <option>Select Country</option>
              {country?.map((item) => {
                return (
                  <option key={item.country_name}>{item.country_name}</option>
                );
              })}
            </select>
          </div>
          <div style={{ marginBottom: 14.2 }}>
            <label
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: 14,
                marginBottom: 9,
                display: "inline-block", 
                width: 150
              }}
            >
              State Of Origin
            </label>
            <select
              placeholder="Select Country"
              style={{
                backgroundColor: "#fff",
                width: "100%",
                padding: 12,
                height: "45px",
                color: '#000',
                borderRadius: 5,
                border: "1px solid #DDDDDD",
              }}
              value={stateOfOrigin}
              onChange={(e) => setStateOfOrigin(e.target.value)}
            >
              <option>Select State</option>
              {!stateloading ? (
                <>
                  {state?.map((item) => {
                    return (
                      <option key={item.state_name}>{item.state_name}</option>
                    );
                  })}
                </>
              ) : (
                <>
                  <option>loading...</option>
                </>
              )}
            </select>
          </div>

          <Input
            title="Birth Date"
            fg="rgba(0, 0, 0, 1)"
            type="date"
            placeholder="DD-MM-YYYY"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
            style={{ color: "#000" }}
          />
          {!imagePath && ( 
            <div
              onClick={handleImageClick}
              style={{
                padding: 22,
                boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.06)",
                marginTop: 18
              }}
              className="br-8 flex-col center"
            >
              <Image
                src={imagePath || "/images/upload.svg"}
                width={imagePath ? 80 : 40}
                height={imagePath ? 80 : 40}
                style={{ borderRadius: 8 }}
              />
              <p
                className="f12"
                style={{ color: "rgba(114, 114, 114, 1)", marginTop: 14 }}
              >
                {imagePath ? "Change Uploaded Image" : "Upload Profile photo"}
              </p>
          <input
            type="file"
            ref={imageRef}
            style={{ display: "none" }}
            onChange={(e) => {
              if (URL.createObjectURL(e.target.files[0])) {
                setImagePath(URL.createObjectURL(e.target.files[0]));
                console.log(URL.createObjectURL(e.target.files[0]));
              }

              setImage(e.target.files[0]);
            }}
          />
            </div>
          )}

        {imagePath && ( 
            <div
              onClick={handleImageClick}
              style={{
                padding: 22,
                boxShadow: "0px 1px 14px rgba(0, 0, 0, 0.06)",
                marginTop: 18, 
                backgroundColor: "#F2E7D3",
                display: "flex", 
              }}
              className="br-8 "
            > 
              <div className="br-8 " style={{ position: "relative", width:"150px", height:"130px"}} >

                <Image className="br-8 " src={imagePath} width="100%" height="100%" objectFit='cover' layout="fill" />
              
              </div>
              <p
                className="f12"
                style={{ color: "rgba(114, 114, 114, 1)", marginTop: "auto", marginBottom: "auto", marginLeft: 12 }}
              >
                {imagePath ? "Change Uploaded Image" : "Upload Profile photo"}
              </p>
          <input
            type="file"
            ref={imageRef}
            style={{ display: "none" }}
            onChange={(e) => {
              if (URL.createObjectURL(e.target.files[0])) {
                setImagePath(URL.createObjectURL(e.target.files[0]));
                console.log(URL.createObjectURL(e.target.files[0]));
              }

              setImage(e.target.files[0]);
            }}
          />
            </div>
          )}

          {/* <Input
            title="Password"
            fg="rgba(0, 0, 0, 1)"
            type="password"
            placeholder="Enter a secured Password"
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
                height: "45px",
                color: '#000',
                borderRadius: 5,
                border: "1px solid #DDDDDD",
              }} 
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "text": "password"} placeholder="Password" />
              <div style={{marginLeft: "auto", position: "absolute", top: "0px", height: "44px", right: "20px", display: "flex" }} >
                <button className="pointer" style={{height: "43px", margin: "auto", backgroundColor: "transparent", border: "0px", color: "#BC8924" }} onClick={()=> setShowPassword((prev) => !prev)}  >{showPassword ? "Hide": "Show"}</button>  
              </div>
          </div>

          <div style={{ marginTop: 50 }}>
            <Button
              title={stateloading ? "A moment..." : "Register"}
              bg="rgba(188, 137, 36, 1)"
              fg="#fff"
              style={{ width: "100%" }}
              onClick={(e) => {
                e.preventDefault();
                register();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
