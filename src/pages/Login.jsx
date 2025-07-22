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

    const result = await handlePostOperation(
      "http://localhost:4000/api/auth/login",
      {
        email,
        password,
      }
    );
    console.log(result);
    if (result.status === 200) {
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
        <form
          onSubmit={handleSubmit}
          className="flex flex-col p-4 gap-2 border border-gray-700"
        >
          <TextField
            id={"email"}
            label={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            id={"password"}
            label={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Login;
