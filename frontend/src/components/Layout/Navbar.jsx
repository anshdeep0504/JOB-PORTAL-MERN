import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const { isAuthorized, setIsAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await axios.get(
        "http://localhost:4000/api/v1/user/logout",
        {
          withCredentials: true,
        }
      );
      toast.success(response.data.message);
      setIsAuthorized(false);
      navigateTo("/login");
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthorized(true);
    }
  };

  return (
    <nav className={`navbar ${isAuthorized ? "active" : "inactive"}`}>
      <div className="navbar-container">
        <div className="logo">
          <h1 style={{ color: "white", fontSize: "20px", fontWeight: "bold" }}>
            CareerConnect
          </h1>
        </div>
        <div className={`links-container ${show ? "show" : ""}`}>
          <ul className="links">
            <li>
              <Link to="/" onClick={() => setShow(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/job/getall" onClick={() => setShow(false)}>
                All Jobs
              </Link>
            </li>
            <li>
              <Link to="/applications/me" onClick={() => setShow(false)}>
                {user && user.role === "Employer"
                  ? "Applicant's Applications"
                  : "My Applications"}
              </Link>
            </li>
            {user && user.role === "Employer" && (
              <>
                <li>
                  <Link to="/job/post" onClick={() => setShow(false)}>
                    Post New Job
                  </Link>
                </li>
                <li>
                  <Link to="/job/me" onClick={() => setShow(false)}>
                    View Your Jobs
                  </Link>
                </li>
              </>
            )}
            <li>
              <button className="logout-btn" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
        <div className="toggle-btn" onClick={() => setShow(!show)}>
          <span className={`bar ${show ? "rotate" : ""}`}></span>
          <span className={`bar ${show ? "rotate" : ""}`}></span>
          <span className={`bar ${show ? "rotate" : ""}`}></span>
        </div>
      </div>

      <style jsx>{`
        nav {
          background-color: #1f1f1f;
          padding: 10px 20px; /* Reduced padding */
          position: fixed;
          top: 0;
          width: 100%;
          transition: background-color 0.3s ease;
          z-index: 999;
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          max-width: 1200px;
          margin: 0 auto;
        }

        .logo h1 {
          color: white;
          font-size: 20px;
          font-weight: bold;
          padding: 5px 10px; /* Added padding for logo */
        }

        .links-container {
          display: flex;
          align-items: center;
        }

        .links {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .links li {
          margin: 0 15px;
        }

        .links li a {
          text-decoration: none;
          color: white;
          font-size: 14px;
          font-weight: 500;
          position: relative;
          padding: 10px 15px; /* Added padding to links for spacing */
          display: block; /* Ensures padding works as expected */
        }

        .links li a:hover {
          color: #007bff;
        }

        .links li a:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: #007bff;
          transform: scaleX(0);
          transform-origin: bottom right;
          transition: transform 0.3s ease-out;
        }

        .links li a:hover:after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        .logout-btn {
          background-color: #ff4d4f;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          font-size: 12px;
          transition: background-color 0.3s;
        }

        .logout-btn:hover {
          background-color: #e43f3a;
        }

        .toggle-btn {
          display: none;
          flex-direction: column;
          justify-content: space-around;
          width: 30px;
          height: 25px;
          cursor: pointer;
        }

        .bar {
          width: 100%;
          height: 4px;
          background-color: white;
          border-radius: 10px;
          transition: transform 0.3s ease;
        }

        .rotate {
          transform: rotate(45deg);
        }

        .show {
          display: block !important;
        }

        @media (max-width: 768px) {
          .links-container {
            position: absolute;
            top: 70px;
            right: 0;
            background-color: #1f1f1f;
            width: 100%;
            display: none;
            justify-content: center;
            padding: 20px 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          }

          .links-container.show {
            display: block;
          }

          .links {
            flex-direction: column;
          }

          .links li {
            margin: 10px 0;
          }

          .toggle-btn {
            display: flex;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
