import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../components/TextField";
import { handlePostOperation } from "../functions/handlePostOperation";
import { toast } from "react-toastify";
import { handleGetOperation } from "../functions/handleGetOperation";

const VerifyOtp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");
  const email = localStorage.getItem("email");

  useEffect(() => {
    if (!email) {
      navigate("/login");
    }

    const handleAuth = async () => {
      const result = await handleGetOperation("/auth/verify/otp");

      if (result.status === 200) {
        return;
      } else {
        toast.error("Please follow proper step!");
        navigate("/forgot-password");
      }
    };
    handleAuth();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await handlePostOperation("/auth/verify-otp", {
      email,
      otp,
    });

    console.log(response);

    if (response.status === 200) {
      toast.success("OTP verified!");
      localStorage.setItem("isOtpVerified", true);

      setTimeout(() => {
        navigate("/reset-password");
      }, 2000);
    } else {
      toast.error(response.response.data || "OTP verification failed!");
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <p>Verify OTP</p>

      <form onSubmit={handleSubmit} className="form-section">
        <TextField
          type="otp"
          id={"otp"}
          label={"OTP"}
          onChange={(e) => {
            setOtp(e.target.value);
          }}
          value={otp}
          placeholder="123456"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default VerifyOtp;
