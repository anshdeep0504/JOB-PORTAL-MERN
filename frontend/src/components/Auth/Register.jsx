import React, { useState, useContext } from "react";
import { FaUser, FaPhoneAlt, FaLock } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLock2Fill } from "react-icons/ri";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { Context } from "../../main";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const { isAuthorized, setIsAuthorized, user, setUser } = useContext(Context);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/api/v1/user/register",
        { name, phone, email, role, password },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setName("");
      setEmail("");
      setPassword("");
      setPhone("");
      setRole("");
      setIsAuthorized(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    }
  };

  if (isAuthorized) {
    return <Navigate to={"/"} />;
  }

  return (
    <section className="register-page">
      <div className="register-container">
        <div className="register-form">
          <div className="register-header">
            <h3>Create a New Account</h3>
          </div>

          <form onSubmit={handleRegister}>
            {/* Role Selection */}
            <div className="input-group">
              <label>Register As</label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="input-field"
                required
              >
                <option value="">Select Role</option>
                <option value="Employer">Employer</option>
                <option value="Job Seeker">Job Seeker</option>
              </select>
            </div>

            {/* Name Input */}
            <div className="input-group">
              <label>Name</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input-field"
                  required
                />
                <FaUser className="input-icon" />
              </div>
            </div>

            {/* Email Input */}
            <div className="input-group">
              <label>Email Address</label>
              <div className="input-wrapper">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                  required
                />
                <MdOutlineMailOutline className="input-icon" />
              </div>
            </div>

            {/* Phone Input */}
            <div className="input-group">
              <label>Phone Number</label>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Enter your phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="input-field"
                  required
                />
                <FaPhoneAlt className="input-icon" />
              </div>
            </div>

            {/* Password Input */}
            <div className="input-group">
              <label>Password</label>
              <div className="input-wrapper">
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field"
                  required
                />
                <RiLock2Fill className="input-icon" />
              </div>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Register
            </button>

            {/* Login Link */}
            <p className="login-link">
              Already have an account? <Link to="/login">Login Now</Link>
            </p>
          </form>
        </div>
      </div>

      <style jsx>{`
        /* Register Page Styles */
        .register-page {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f7f9fc;
        }

        .register-container {
          display: flex;
          justify-content: center;
          width: 100%;
          max-width: 500px; /* Reduced max width for smaller box */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          overflow: hidden;
          background-color: #fff;
        }

        .register-form {
          width: 100%;
          padding: 30px; /* Reduced padding */
        }

        .register-header {
          text-align: center;
          margin-bottom: 20px; /* Reduced margin */
        }

        .register-header h3 {
          font-size: 20px; /* Slightly smaller font */
          color: #333;
        }

        .input-group {
          margin-bottom: 15px; /* Reduced margin */
        }

        .input-group label {
          font-size: 14px;
          color: #333;
          margin-bottom: 5px;
          display: block;
        }

        .input-wrapper {
          display: flex;
          align-items: center;
        }

        .input-field {
          width: 100%;
          padding: 10px 12px; /* Reduced padding */
          font-size: 14px; /* Reduced font size */
          border-radius: 8px;
          border: 1px solid #ddd;
          box-sizing: border-box;
          outline: none;
        }

        .input-wrapper .input-icon {
          font-size: 18px; /* Slightly smaller icon */
          color: #888;
          margin-left: 10px;
        }

        .submit-btn {
          width: 100%;
          padding: 10px 12px; /* Reduced padding */
          background-color: #007bff;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 16px; /* Slightly smaller font */
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .submit-btn:hover {
          background-color: #0056b3;
        }

        .login-link {
          text-align: center;
          margin-top: 15px; /* Reduced margin */
        }

        .login-link a {
          color: #007bff;
          text-decoration: none;
        }

        /* Mobile responsive */
        @media (max-width: 768px) {
          .register-container {
            width: 85%; /* Increased width for mobile */
          }

          .register-form {
            padding: 20px;
          }
        }
      `}</style>
    </section>
  );
};

export default Register;
