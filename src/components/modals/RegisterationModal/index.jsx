import Image from "next/image";
import React from "react";
import { Input, Button } from "../..";

export const RegistrationModal = ({
  modalIsOpen = false,
  closeModal = () => {}, 
  setPassModalIsOpen, 
  end
}) => {


  const [country, setCountry] = React.useState([])
  const [selectedcountry, setSelectedCountry] = React.useState('') 
  const [stateloading, setStateLoading] = React.useState(true)
  const [state, setState] = React.useState([]) 


  React.useEffect(() => { 
    fetch(`https://www.universal-tutorial.com/api/countries/`, {
        method: 'GET', // or 'PUT'
        headers: { 
            Authorization : `Bearer ${localStorage.getItem('country-token')}`,
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {    
        setCountry(data)
    })
    .catch((error) => {
        console.error('Error:', error); 
    });  

    fetch(`https://www.universal-tutorial.com/api/states/${selectedcountry}`, {
        method: 'GET', // or 'PUT'
        headers: { 
            Authorization : `Bearer ${localStorage.getItem('country-token')}`,
            "Accept": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {   
        setState(data) 
        if(data.length !== 0){
            setStateLoading(false)
        }
    })
    .catch((error) => {
        console.error('Error:', error); 
    });  
  }, [selectedcountry])
  
  const CountryHandler =(e)=> {
    setSelectedCountry(e.target.value)
  } 

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
          <Image src="/images/close.svg" width={12} height={12} />
          </div>
          <div>
            <h2 style={{ marginBottom: 8 }} className="f24 fw500">
              Set up your account
            </h2>
            <p onClick={end} className="f14 pointer hover">Already have an account? Sign In</p>
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

          <div style={{ marginBottom: 14.2 }}>
            <label
              style={{
                color: "rgba(0, 0, 0, 1)",
                fontSize: 14,
                marginBottom: 9,
                display: "inline-block",
                marginLeft: 10,
                width: 150,
              }}
            >
              Nationality
            </label>
            <select   
              onChange={(e)=> CountryHandler(e)}
              placeholder="Select Country"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.1)",
                width: "100%",
                padding: 12,
                borderRadius: 5,
                border: "1px solid rgba(255,255,255,0.9)",
              }} 
            >
              <option>Select Country</option> 
              {country.map((item)=> {
                return(
                  <option key={item.country_name} >{item.country_name}</option>
                )
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
                marginLeft: 10,
                width: 150,
              }}
            >
              Nationality
            </label>
            <select  
              placeholder="Select Country"
              style={{
                backgroundColor: "rgba(196, 196, 196, 0.1)",
                width: "100%",
                padding: 12,
                borderRadius: 5,
                border: "1px solid rgba(255,255,255,0.9)",
              }} 
            >
              <option>Select State</option> 
              {!stateloading ?
                  <> 
                      {state.map((item)=> {
                          return(
                              <option key={item.state_name} >{item.state_name}</option>
                          )
                      })}
                  </>
              :
                  <>
                      <option>loading...</option>
                  </>
              }
            </select>
          </div>
          {/* <Input
            title="Nationality"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Nationality"
          /> */}
          <Input
            title="State of origin"
            fg="rgba(0, 0, 0, 1)"
            type="text"
            placeholder="Select State"
          />
          <Input
            title="Birth Date"
            fg="rgba(0, 0, 0, 1)"
            type="date"
            placeholder="DD-MM-YYYY"
          />
          {/* <div
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
          </div> */}

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
