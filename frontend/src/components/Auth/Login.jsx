import React, { useContext, useState } from "react";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";
import { Link, Navigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized } = useContext(Context);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/login",
        { email, password, role },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setEmail("");
      setPassword("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthorized) {
    return <Navigate to="/" />;
  }

  return (
    <section className="authPage">
      <div className="form-container">
        <div className="header">
          <h3>Login to your account</h3>
          <p className="subheading">Please login with your credentials</p>
        </div>
        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Login As</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            >
              <option value="">Select Role</option>
              <option value="Job Seeker">Job Seeker</option>
              <option value="Employer">Employer</option>
            </select>
            <FaRegUser />
          </div>
          <div className="input-group">
            <label>Email Address</label>
            <div className="input-wrapper">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <MdOutlineMailOutline />
            </div>
          </div>
          <div className="input-group">
            <label>Password</label>
            <div className="input-wrapper">
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <RiLock2Fill />
            </div>
          </div>
          <button type="submit" className="btn login-btn">
            Login
          </button>
          <Link to="/register" className="register-link">
            Don’t have an account? Register Now
          </Link>
        </form>
      </div>

      <style jsx>{`
        .authPage {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #fff;
          font-family: "Arial", sans-serif;
        }

        .form-container {
          width: 100%;
          max-width: 420px;
          padding: 30px;
          background: #ffffff;
          border-radius: 12px;
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
          text-align: center;
          animation: fadeIn 1s ease-out;
        }

        .header {
          margin-bottom: 20px;
        }

        .header h3 {
          font-size: 28px;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .subheading {
          font-size: 16px;
          color: #777;
        }

        .login-form {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .input-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          text-align: left;
        }

        .input-group label {
          font-size: 14px;
          color: #555;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
          border: 1px solid #ddd;
          border-radius: 8px;
          padding: 10px;
          background-color: #f9f9f9;
          transition: all 0.3s ease;
        }

        .input-wrapper:hover {
          border-color: #007bff;
        }

        .input-wrapper input {
          border: none;
          outline: none;
          flex-grow: 1;
          padding: 10px;
          font-size: 16px;
          background-color: transparent;
          color: #333;
        }

        .input-wrapper svg {
          color: #888;
        }

        .input-wrapper input:focus {
          background-color: #fff;
        }

        .btn {
          padding: 12px 20px;
          font-size: 16px;
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          box-shadow: 0 4px 10px rgba(0, 123, 255, 0.3);
        }

        .btn:hover {
          background-color: #0056b3;
          box-shadow: 0 4px 12px rgba(0, 123, 255, 0.5);
        }

        .register-link {
          margin-top: 10px;
          font-size: 14px;
          color: #007bff;
          text-decoration: none;
        }

        .register-link:hover {
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .form-container {
            padding: 25px;
          }

          .header h3 {
            font-size: 24px;
          }

          .input-wrapper input {
            font-size: 14px;
          }

          .btn {
            font-size: 14px;
          }
        }

        /* Animation */
        @keyframes fadeIn {
          0% {
            opacity: 0;
            transform: translateY(50px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Login;
