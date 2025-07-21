import { useState } from "react";
import TextField from "../components/TextField";

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password, username, phone, confirmPassword);
  };
  return (
    <div className="min-h-screen flex flex-col gap-3 justify-center items-center">
      <p>Register</p>

      <form onSubmit={handleSubmit} className="border p-2">
        <TextField
          id={"email"}
          label={"Email"}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id={"username"}
          label={"Username"}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id={"phone"}
          label={"Phone Number"}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <TextField
          id={"password"}
          label={"Password"}
          placeholder={"**********"}
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id={"confirmPassword"}
          label={"Confirm Password"}
          placeholder={"**********"}
          value={confirmPassword}
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
