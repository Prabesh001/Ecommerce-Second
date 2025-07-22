import { useState } from "react";
import TextField from "../components/TextField";
import { handlePostOperation } from "../functions/handlePostOperation";

const Register = () => {
  const [email, setEmail] = useState("");
  const [userName, setuserName] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await handlePostOperation(
      "http://localhost:4000/api/auth/register",
      {
        email,
        userName,
        password,
        confirmPassword,
        phone,
      }
    );

    console.log(result);

    if (result.status === 200) {
      alert(result.data.message || "User registered successfully!");
    } else {
      alert(result.response.data || "User registration failed!");
    }
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
          id={"userName"}
          label={"userName"}
          value={userName}
          onChange={(e) => setuserName(e.target.value)}
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
