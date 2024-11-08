import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <section className="how-it-works">
        <div className="container">
          <h3 className="section-title">How Career Connect Works!</h3>
          <div className="cards-container">
            <div className="card">
              <div className="card-icon">
                <FaUserPlus />
              </div>
              <h4>Create Account</h4>
              <p>
                Quickly sign up on Career Connect and create your profile to get
                started.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <MdFindInPage />
              </div>
              <h4>Find a Job/Post a Job</h4>
              <p>
                Job seekers can find jobs that suit their skills, and employers
                can post job openings.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">
                <IoMdSend />
              </div>
              <h4>Apply For Jobs/Recruit Candidates</h4>
              <p>
                Applicants can apply for jobs, and employers can recruit the
                best-fit candidates.
              </p>
            </div>
          </div>
        </div>

        <style jsx>{`
          .how-it-works {
            padding: 60px 20px;
            background-color: #f7f7f7;
            text-align: center;
          }

          .container {
            max-width: 1200px;
            margin: 0 auto;
          }

          .section-title {
            font-size: 32px;
            font-weight: 700;
            color: #333;
            margin-bottom: 40px;
          }

          .cards-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 30px;
          }

          .card {
            background-color: #fff;
            padding: 30px;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
          }

          .card:hover {
            transform: translateY(-10px);
            box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          }

          .card-icon {
            font-size: 50px;
            color: #007bff;
            margin-bottom: 20px;
          }

          .card h4 {
            font-size: 22px;
            color: #333;
            margin-bottom: 10px;
            font-weight: 600;
          }

          .card p {
            font-size: 14px;
            color: #777;
          }

          @media (max-width: 768px) {
            .section-title {
              font-size: 28px;
            }

            .card {
              padding: 20px;
            }
          }

          @media (max-width: 480px) {
            .section-title {
              font-size: 24px;
            }

            .card {
              padding: 15px;
            }

            .cards-container {
              grid-template-columns: 1fr;
              gap: 20px;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default HowItWorks;
