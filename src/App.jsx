import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav className="flex gap-3 md:justify-center justify-between lg:justify-around border-2 border-gray-400 px-6 py-2 flex-wrap bg-red-500 md:bg-green-400">
          <Link to={"/register"}>Register</Link>
          <Link to={"/login"}>Login</Link>
          <Link to={"/forgot-password"}>Forgot-password</Link>
          <Link to={"/verify-otp"}>Verify-otp</Link>
          <Link to={"/reset-password"}>Reset-password</Link>
          <Link to={"/"}>Home</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
