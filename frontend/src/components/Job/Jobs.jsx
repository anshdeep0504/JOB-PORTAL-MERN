import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../../main";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/job/getall", {
        withCredentials: true,
      })
      .then((res) => {
        setJobs(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!isAuthorized) {
    navigateTo("/");
  }

  return (
    <section className="jobs page">
      <div className="container">
        <div className="title-wrapper">
          <h1 className="page-title">All Jobs</h1>
        </div>
        <div className="banner">
          {jobs.jobs &&
            jobs.jobs.map((element, index) => (
              <div
                className="card"
                key={element._id}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="job-info">
                  <h3>{element.title}</h3>
                  <p className="category">{element.category}</p>
                  <p className="location">{element.country}</p>
                  <Link to={`/job/${element._id}`} className="details-link">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        .jobs {
          padding: 50px 0;
          background-color: #f1f1f1;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 12px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
        }

        .title-wrapper {
          text-align: center;
          margin-bottom: 40px;
        }

        .page-title {
          font-size: 45px;
          font-weight: bold;
          color: #333;
          text-transform: uppercase;
          letter-spacing: 3px;
          position: relative;
          display: inline-block;
          animation: bounceIn 1s ease-out;
          opacity: 1; /* Keep opacity at 1 to prevent fading */
        }

        .page-title:hover {
          color: #007bff;
        }

        .banner {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
          animation: fadeIn 1s ease-out;
        }

        .card {
          background-color: #ffffff;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          gap: 15px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: zoomIn 0.6s forwards;
        }

        .card:hover {
          transform: translateY(-10px) scale(1.03);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .job-info h3 {
          font-size: 22px;
          font-weight: bold;
          color: #333;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .job-info h3:hover {
          color: #007bff;
        }

        .job-info p {
          font-size: 16px;
          color: #777;
          margin: 0;
        }

        .category {
          font-weight: bold;
          color: #555;
        }

        .location {
          color: #888;
        }

        .details-link {
          margin-top: 15px;
          font-size: 16px;
          color: #007bff;
          text-decoration: none;
          padding: 8px 18px;
          border-radius: 25px;
          background-color: #e7f4ff;
          border: 2px solid #007bff;
          transition: background-color 0.3s, color 0.3s;
        }

        .details-link:hover {
          background-color: #007bff;
          color: white;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          .card {
            padding: 20px;
          }

          .details-link {
            font-size: 14px;
            padding: 7px 15px;
          }

          .page-title {
            font-size: 35px;
          }
        }

        /* Keyframes for animation effects */
        @keyframes fadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0.8);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: translateY(-50px);
          }
          60% {
            transform: translateY(15px);
          }
          80% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default Jobs;
