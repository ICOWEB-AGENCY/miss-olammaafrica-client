import { Input } from "../../Input";
import styles from "./Hi.module.css";

const ResetPasswordForm = () => {
  return (
    <form style={{ padding: 20 }}>
      <div className={styles.first}>
        <Input
          title="Old Password"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Old Password"
        />
        <Input
          title="New Password"
          fg="rgba(0, 0, 0, 1)"
          placeholder="New Password"
        />
        <Input
          title="Confirm New Password"
          fg="rgba(0, 0, 0, 1)"
          placeholder="Confirm New Password"
          type="tel"
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
