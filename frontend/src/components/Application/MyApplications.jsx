import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../main";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ResumeModal from "./ResumeModal";

const MyApplications = () => {
  const { user } = useContext(Context);
  const [applications, setApplications] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [resumeImageUrl, setResumeImageUrl] = useState("");

  const { isAuthorized } = useContext(Context);
  const navigateTo = useNavigate();

  useEffect(() => {
    try {
      if (user && user.role === "Employer") {
        axios
          .get("http://localhost:4000/api/v1/application/employer/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      } else {
        axios
          .get("http://localhost:4000/api/v1/application/jobseeker/getall", {
            withCredentials: true,
          })
          .then((res) => {
            setApplications(res.data.applications);
          });
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }, [isAuthorized]);

  if (!isAuthorized) {
    navigateTo("/");
  }

  const deleteApplication = (id) => {
    try {
      axios
        .delete(`http://localhost:4000/api/v1/application/delete/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setApplications((prevApplication) =>
            prevApplication.filter((application) => application._id !== id)
          );
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  const openModal = (imageUrl) => {
    setResumeImageUrl(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <section className="my_applications page">
      <div className="container">
        <center>
          <h1>My Applications</h1>
        </center>
        {applications.length <= 0 ? (
          <center>
            <h4>No Applications Found</h4>
          </center>
        ) : (
          applications.map((element) => (
            <ApplicationCard
              key={element._id}
              element={element}
              deleteApplication={deleteApplication}
              openModal={openModal}
              userRole={user.role}
            />
          ))
        )}
      </div>

      {modalOpen && <ResumeModal imageUrl={resumeImageUrl} onClose={closeModal} />}
      <style jsx>{`
        .my_applications {
          padding: 40px 20px;
          background-color: #fff;
          font-family: 'Arial', sans-serif;
          min-height: 100vh;
        }

        .container {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        h1 {
          font-size: 30px;
          font-weight: 600;
          margin-bottom: 30px;
          color: #333;
        }

        h4 {
          font-size: 18px;
          color: #777;
        }

        .application_card {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          padding: 20px;
          margin: 15px 0;
          background-color: #fafafa;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
          transition: transform 0.2s ease-in-out;
        }

        .application_card:hover {
          transform: translateY(-5px);
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
        }

        .details {
          flex: 1;
          text-align: left;
        }

        .details p {
          margin: 5px 0;
          font-size: 14px;
          color: #555;
        }

        .details p strong {
          font-weight: bold;
          color: #333;
        }

        .resume-section {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .resume-image {
          width: 150px;
          height: auto;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }

        .resume-image:hover {
          transform: scale(1.05);
        }

        .btn-area {
          margin-top: 15px;
        }

        .delete-btn {
          background-color: #e74c3c;
          color: white;
          padding: 10px 20px;
          font-size: 16px;
          border: none;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .delete-btn:hover {
          background-color: #c0392b;
        }

        @media (max-width: 768px) {
          .container {
            padding: 15px;
          }

          .application_card {
            flex-direction: column;
            align-items: flex-start;
          }

          .resume-section {
            margin-top: 15px;
          }
        }
      `}</style>
    </section>
  );
};

const ApplicationCard = ({ element, deleteApplication, openModal, userRole }) => {
  return (
    <div className="application_card">
      <div className="details">
        <p><strong>Name:</strong> {element.name}</p>
        <p><strong>Email:</strong> {element.email}</p>
        <p><strong>Phone:</strong> {element.phone}</p>
        <p><strong>Address:</strong> {element.address}</p>
        <p><strong>Cover Letter:</strong> {element.coverLetter}</p>
      </div>
      <div className="resume-section">
        <img
          src={element.resume.url}
          alt="resume"
          className="resume-image"
          onClick={() => openModal(element.resume.url)}
        />
      </div>
      {userRole === "Job Seeker" && (
        <div className="btn-area">
          <button className="delete-btn" onClick={() => deleteApplication(element._id)}>
            Delete Application
          </button>
        </div>
      )}
    </div>
  );
};

export default MyApplications;
