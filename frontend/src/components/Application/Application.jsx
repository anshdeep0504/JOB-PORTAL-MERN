import React, { useContext, useState, useEffect } from "react";
import { Context } from "../../main";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const { isAuthorized, user } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    if (!isAuthorized || (user && user.role === "Employer")) {
      navigateTo("/");
    }
  }, [isAuthorized, user, navigateTo]);

  return (
    <div className="applications-container">
      <div className="applications-content">
        <h1>Applications From Job Seekers</h1>
        <p>No Applications Found</p>
      </div>

      <style jsx>{`
        .applications-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          background-color: #f4f4f4;
        }

        .applications-content {
          text-align: center;
          background-color: white;
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
          color: #333;
        }

        p {
          font-size: 18px;
          color: #777;
        }

        @media (max-width: 768px) {
          .applications-content {
            padding: 20px;
          }

          h1 {
            font-size: 24px;
          }

          p {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Applications;
