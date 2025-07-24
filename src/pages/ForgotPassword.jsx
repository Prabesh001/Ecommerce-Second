import React, { useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../functions/handlePostOperation";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handlePostOperation("/auth/forgot-password", {
      email,
    });

    console.log(response)

    if (response.status === 200) {
      toast.success("OTP send to your email!");

      localStorage.setItem("email", email);

      setTimeout(() => {
        navigate("/verify-otp");
      }, 2000);
    } else {
      toast.error(response.response.data || "Error sending OTP!");
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <p>Forgot Password</p>

      <form onSubmit={handleSubmit} className="form-section">
        <TextField
          type="email"
          id={"email"}
          label={"Email"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          placeholder="Email"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ForgotPassword;
