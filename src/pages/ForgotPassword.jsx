import React, { useState } from "react";
import TextField from "../components/TextField";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <p>Forgot Password</p>

      <form onSubmit={handleSubmit}>
        <TextField
          type="email"
          id={"email"}
          label={"Email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          plachoder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
