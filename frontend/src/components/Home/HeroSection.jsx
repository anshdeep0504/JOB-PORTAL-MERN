import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Jobs",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91,220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-title">
          <h1>Find a job that suits your interests and skills</h1>
          <p className="hero-description">
            Discover job opportunities that match your skills and passions. 
            Connect with employers seeking talent like yours for rewarding careers.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="stats-container">
          {details.map((element) => (
            <div className="stats-card" key={element.id}>
              <div className="stats-icon">{element.icon}</div>
              <div className="stats-content">
                <h3>{element.title}</h3>
                <p>{element.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        /* Hero Section Styles */
        .hero-section {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #f5f5f5;
          padding: 40px 20px;
          height: 100vh;
          color: #333;
        }

        .hero-content {
          width: 100%;
          max-width: 1200px;
          text-align: center;
        }

        .hero-title h1 {
          font-size: 36px;
          font-weight: 600;
          color: #333;
          margin-bottom: 20px;
        }

        .hero-description {
          font-size: 16px;
          color: #555;
          margin-bottom: 40px;
        }

        .stats-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
          margin-top: 40px;
        }

        .stats-card {
          background-color: #fff;
          padding: 30px;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .stats-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .stats-icon {
          font-size: 50px;
          color: #007bff;
          margin-bottom: 15px;
        }

        .stats-content h3 {
          font-size: 28px;
          color: #333;
          margin-bottom: 10px;
          font-weight: 600;
        }

        .stats-content p {
          font-size: 16px;
          color: #777;
        }

        @media (max-width: 768px) {
          .hero-title h1 {
            font-size: 28px;
          }

          .hero-description {
            font-size: 14px;
          }

          .stats-container {
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
        }

        @media (max-width: 480px) {
          .hero-title h1 {
            font-size: 24px;
          }

          .hero-description {
            font-size: 14px;
            margin-bottom: 30px;
          }

          .stats-container {
            grid-template-columns: 1fr;
            gap: 15px;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
