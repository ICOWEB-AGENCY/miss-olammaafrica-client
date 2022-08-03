import { Input } from "../../Input";
import styles from "./Hi.module.css";

const ResetPasswordForm = () => {
  return (
    <form style={{ padding: 20, width: "100%", display: "flex", flexDirection: "column", fontFamily: "cursive"}}>
      <div  className={styles.first+ ' formStyle '}> 
          <Input
            title="Old Password"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Old Password"
            style={{ color: "rgba(0,0,0,1)" }}
          />
          <Input
            title="New Password"
            fg="rgba(0, 0, 0, 1)"
            placeholder="New Password"
            style={{ color: "rgba(0,0,0,1)" }}
          />
          <Input
            title="Confirm New Password"
            fg="rgba(0, 0, 0, 1)"
            placeholder="Confirm New Password"
            type="tel"
            style={{ color: "rgba(0,0,0,1)" }}
          /> 
        </div>
    </form>
  );
};

export default ResetPasswordForm;
