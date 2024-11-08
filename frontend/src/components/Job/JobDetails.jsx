import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Context } from "../../main";

const JobDetails = () => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const navigateTo = useNavigate();

  const { isAuthorized, user } = useContext(Context);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/v1/job/${id}`, {
        withCredentials: true,
      })
      .then((res) => {
        setJob(res.data.job);
      })
      .catch((error) => {
        navigateTo("/notfound");
      });
  }, [id]);

  if (!isAuthorized) {
    navigateTo("/login");
  }

  return (
    <section className="jobDetail page">
      <div className="container">
        <h3>Job Details</h3>
        <div className="banner">
          <div className="detail-item">
            <strong>Title:</strong> <span>{job.title}</span>
          </div>
          <div className="detail-item">
            <strong>Category:</strong> <span>{job.category}</span>
          </div>
          <div className="detail-item">
            <strong>Country:</strong> <span>{job.country}</span>
          </div>
          <div className="detail-item">
            <strong>City:</strong> <span>{job.city}</span>
          </div>
          <div className="detail-item">
            <strong>Location:</strong> <span>{job.location}</span>
          </div>
          <div className="detail-item">
            <strong>Description:</strong> <span>{job.description}</span>
          </div>
          <div className="detail-item">
            <strong>Job Posted On:</strong> <span>{job.jobPostedOn}</span>
          </div>
          <div className="detail-item">
            <strong>Salary:</strong>{" "}
            {job.fixedSalary ? (
              <span>{job.fixedSalary}</span>
            ) : (
              <span>
                {job.salaryFrom} - {job.salaryTo}
              </span>
            )}
          </div>

          {user && user.role !== "Employer" && (
            <Link to={`/application/${job._id}`} className="apply-btn">
              Apply Now
            </Link>
          )}
        </div>
      </div>

      <style jsx>{`
        .jobDetail {
          padding: 40px 0;
          background-color: #f5f5f5;
        }

        .container {
          max-width: 800px;
          margin: 0 auto;
          padding: 30px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        h3 {
          font-size: 28px;
          text-align: center;
          margin-bottom: 30px;
          color: #333;
        }

        .banner {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }

        .detail-item {
          font-size: 16px;
          margin-bottom: 12px;
        }

        .detail-item strong {
          color: #333;
        }

        .detail-item span {
          color: #666;
        }

        .apply-btn {
          display: inline-block;
          margin-top: 20px;
          font-size: 16px;
          color: #fff;
          background-color: #007bff;
          text-decoration: none;
          padding: 10px 20px;
          border-radius: 4px;
          text-align: center;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .apply-btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 600px) {
          .container {
            padding: 15px;
          }

          h3 {
            font-size: 24px;
          }

          .detail-item {
            font-size: 14px;
          }

          .apply-btn {
            font-size: 14px;
            padding: 8px 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default JobDetails;
