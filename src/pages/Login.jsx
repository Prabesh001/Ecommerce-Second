import { useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../functions/handlePostOperation";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handlePostOperation("/auth/login", {
      email,
      password,
    });
    console.log(result);
    if (result.status === 200) {
      localStorage.setItem("token", result.data.token);
      alert("User logged in successfully!");
      navigate("/");
    } else {
      alert(result.response.data || "Login error!");
    }
  };

  return (
    <>
      <div className="h-screen flex flex-col gap-3 justify-center items-center">
        <p>Login</p>
        <form onSubmit={handleSubmit} className="form-section">
          <TextField
            id={"email"}
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Eg. example@gmail.com"
          />
          <TextField
            id={"password"}
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Eg. ********"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
