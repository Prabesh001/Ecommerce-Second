import { useEffect, useState } from "react";
import TextField from "../components/TextField";
import { useNavigate } from "react-router-dom";
import { handlePostOperation } from "../functions/handlePostOperation";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const email = localStorage.getItem("email");
  const isOtpVerified = localStorage.getItem("isOtpVerified");

  useEffect(() => {
    if (!email || !isOtpVerified) {
      navigate("/verify-otp");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handlePostOperation("/auth/reset-password", {
      email,
      password,
    });

    console.log(response);

    if (response.status === 200) {
      toast.success("Password reset Successfully!");
      localStorage.removeItem("email");
      navigate("/login");
      return;
    } else {
      toast.error(response.response.data || "Error resetting password!");
      return;
    }
  };
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <p>Reset Password</p>

      <form onSubmit={handleSubmit} className="form-section">
        <TextField
          type="password"
          id={"password"}
          label={"Password"}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
          placeholder="**********"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
