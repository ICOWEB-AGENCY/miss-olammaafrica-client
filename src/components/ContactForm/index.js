import React from "react";
import { Button, Input } from "..";
import styles from "./Index.module.css";

export const ContactForm = function () {
  return (
    <div className={styles.container}>
      <Input placeholder="First Name" title="What’s your First name?" />
      <Input placeholder="Last Name" title="What’s your last name?" />

      <Input placeholder="Email" title="What’s your last email address?" />

      <Input placeholder="Message" title="Give us your message" />
      <Button
        title="Send message"
        bg="rgba(255, 255, 255, 1)"
        fg="rgba(0, 0, 0, 1)"
        style={{ width: "100%", marginTop: 30 }}
      />
    </div>
  );
};
