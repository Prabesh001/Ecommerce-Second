import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem("email");

    if (!email) {
      navigate("/forgot-password");
    }
  }, []);
  return <div>VerifyOtp</div>;
};

export default VerifyOtp;
