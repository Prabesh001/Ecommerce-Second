import { useState } from "react";
import TextField from "../components/TextField";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("email", email);
    console.log("password", password);
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
