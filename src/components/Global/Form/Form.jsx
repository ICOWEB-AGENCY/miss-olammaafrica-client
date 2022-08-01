import { Input } from "../../Input";
import styles from "./Hi.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const GeneralForm = ({ aUser }) => {
  const [user, setUser] = useState(aUser);
  return (
    <form style={{ padding: 20 }}>
      <div className={styles.first}>
        <Input
          title="First Name"
          fg="rgba(0, 0, 0, 1)"
          placeholder="First name"
          value={user.firstName}
          style={{ color: "rgba(0,0,0,1)" }}
        />
        <Input
          title="Last Name"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Last name"
          value={user.lastName}
          style={{ color: "rgba(0,0,0,1)" }}
        />
        <Input
          title="Bio"
          fg="rgba(0, 0, 0, 1)"
          placeholder="About you"
          style={{ color: "#000" }}
        />
        <Input
          title="Email Address"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Your email address"
          value={user.email}
          style={{ color: "rgba(0,0,0,1)" }}
        />
        <Input
          title="Phone Number"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Phone"
          type="tel"
          value={user.phone}
          style={{ color: "rgba(0,0,0,1)" }}
        />
      </div>

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

      <Input
        title="Country/Nationality"
        fg="rgba(0, 0, 0, 1)"
        placeholder="Your Country"
        type="tel"
        value={user.nationality}
        style={{ color: "rgba(0,0,0,1)" }}
      />

      <Input
        title="State"
        fg="rgba(0, 0, 0, 1)"
        placeholder="Your State"
        type="text"
        value={user.stateOfOrigin}
        style={{ color: "rgba(0,0,0,1)" }}
      />
      <Input
        title="Local Govt Area"
        fg="rgba(0, 0, 0, 1)"
        placeholder="Your LGA"
        type="text"
        value={user.LGA}
        style={{ color: "rgba(0,0,0,1)" }}
      />

      <Input
        title="Village"
        fg="rgba(0, 0, 0, 1)"
        placeholder="Your Village"
        type="text"
        value={user.village}
        style={{ color: "rgba(0,0,0,1)" }}
      />

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

      <h6
        className="f16 fw500"
        style={{
          color: "rgba(114, 114, 114, 1)",
          marginBottom: 14,
          marginTop: 20
        }}
      >
        Biometrics
      </h6>

      <div className="row__input__container">
        <Input
          title="D.O.B"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Date of Birth"
          type="data"
          value={user.birthday}
          style={{ color: "rgba(0,0,0,1)" }}
        />

        <Input
          title="Height"
          fg="rgba(0, 0, 0, 1)"
          placeholder="height"
          type="data"
          style={{ color: "rgba(0,0,0,1)" }}
        />
      </div>
    </form>
  );
};

export default GeneralForm;
