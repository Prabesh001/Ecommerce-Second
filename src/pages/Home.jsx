import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { handleGetOperation } from "../functions/handleGetOperation";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      navigate("/login");
    }

    const handleAuth = async () => {
      const result = await handleGetOperation("/auth/verify/home");

      if (result.status === 200) {
        toast.success("Login Successfully!");
      } else {
        toast.error("Login first!");
        navigate("/login");
      }
    };

    handleAuth();
  }, []);

  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
