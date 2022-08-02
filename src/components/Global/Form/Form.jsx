import { Input } from "../../Input";
import styles from "./Hi.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const GeneralForm = () => {
  const { user } = useSelector((state) => state.user);
  return ( 
    <form style={{ padding: 20, width: "100%", display: "flex", flexDirection: "column", fontFamily: "cursive"}}>
      <div  className={styles.first+ ' formStyle '}>
        <div className="forminput" >
          <div style={{width: "100%"}} > 
            <Input
              title="First Name"
              fg="rgba(0, 0, 0, 1)"
              placeholder="First name"
              value={user.firstName}
            />
          </div>
          <div className="formargin" >

            <Input 
              title="Last Name"
              fg="rgba(0, 0, 0, 1)"
              placeholder="Last name"
              value={user.lastName}
            />
          </div>
        </div>
        <Input title="Bio" fg="rgba(0, 0, 0, 1)" placeholder="About you" />
        <div className="forminput" >
          <div style={{width: "100%"}} > 
            <Input
              title="Email Address"
              fg="rgba(0, 0, 0, 1)"
              placeholder="Your email address"
              value={user.email}
            />
          </div>
          <div className="formargin" >

            <Input 
              title="Phone Number"
              fg="rgba(0, 0, 0, 1)"
              placeholder="Phone"
              type="tel"
              value={user.phone}
            />
          </div>
        </div> 
      </div>
      <div  className={styles.first+ ' formStyle '}>
      <h6
        className="f16 fw500"
        style={{
          color: "rgba(114, 114, 114, 1)",
          marginBottom: 14,
          marginTop: 20
        }}
      >
        Where are you from
      </h6>
      <div className="forminput" > 
        <div style={{width: "100%"}} > 
          <Input
            title="Country/Nationality"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Your Country"
            type="tel"
            value={user.nationality}
          />
        </div>
        <div className="formargin" > 
          <Input
            title="State"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Your State"
            type="text"
            value={user.stateOfOrigin}
          />
        </div>
      </div> 

      <div className="forminput" > 
        <div style={{width: "100%"}} > 
          <Input
            title="Local Govt Area"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Your LGA"
            type="text"
            value={user.LGA}
          />
        </div>
        <div className="formargin" > 
          <Input
            title="Village"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Your Village"
            type="text"
            value={user.village}
          />
        </div>
      </div>

      <h6
        className="f16 fw500"
        style={{
          color: "rgba(114, 114, 114, 1)",
          marginBottom: 14,
          marginTop: 20
        }}
      >
        Home Address
      </h6>

      <Input
        title="Home Address"
        fg="rgba(0, 0, 0, 1)"
        placeholder="Your Address"
        type="text"
        style={{ color: "rgba(0,0,0,1)" }}
      />
      </div>
      <div  className={styles.first+ ' formStyle '}>

        <h6
          className="f16 fw500"
          style={{
            color: "rgba(114, 114, 114, 1)",
            marginBottom: 14,
            marginTop: 20,
          }}
        >
          Biometrics
        </h6>
 
        <div className="forminput" > 
          <div style={{width: "100%"}} > 
            <Input
              title="D.O.B"
              fg="rgba(0, 0, 0, 1)"
              placeholder="Date of Birth"
              type="data"
              value={user.birthday}
            />
            </div>

            <div className="formargin" > 
              <Input
                title="Height"
                fg="rgba(0, 0, 0, 1)"
                placeholder="height"
                type="data"
              />
            </div>
        </div>
      </div>
    </form>
  );
};

export default GeneralForm;
