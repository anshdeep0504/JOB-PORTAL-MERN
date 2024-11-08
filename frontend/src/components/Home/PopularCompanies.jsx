import React from "react";
import { FaMicrosoft, FaApple } from "react-icons/fa";
import { SiTesla } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Millennium City Centre, Gurugram",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "Millennium City Centre, Gurugram",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Millennium City Centre, Gurugram",
      openPositions: 20,
      icon: <FaApple />,
    },
  ];

  return (
    <section className="popular-companies">
      <div className="container">
        <h3 className="section-title">TOP COMPANIES</h3>
        <div className="companies-banner">
          {companies.map((company) => (
            <div className="card" key={company.id}>
              <div className="card-content">
                <div className="icon">{company.icon}</div>
                <div className="text">
                  <h4 className="company-title">{company.title}</h4>
                  <p className="company-location">{company.location}</p>
                </div>
              </div>
              <button className="positions-btn">
                Open Positions: {company.openPositions}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .popular-companies {
          padding: 80px 20px;
          background-color: #f4f6f9;
          text-align: center;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #333;
          margin-bottom: 50px;
          text-transform: uppercase;
        }

        .companies-banner {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
          gap: 30px;
        }

        .card {
          background-color: #fff;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .card-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 20px;
        }

        .icon {
          font-size: 50px;
          color: #007bff;
          margin-bottom: 15px;
        }

        .text {
          text-align: center;
        }

        .company-title {
          font-size: 22px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .company-location {
          font-size: 14px;
          color: #888;
        }

        .positions-btn {
          background-color: #007bff;
          color: white;
          padding: 12px 20px;
          font-size: 16px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          text-transform: uppercase;
        }

        .positions-btn:hover {
          background-color: #0056b3;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 30px;
            margin-bottom: 40px;
          }

          .card {
            padding: 20px;
          }

          .positions-btn {
            font-size: 14px;
            padding: 10px 15px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 24px;
            margin-bottom: 30px;
          }

          .card {
            padding: 15px;
          }

          .companies-banner {
            grid-template-columns: 1fr;
          }

          .positions-btn {
            font-size: 14px;
            padding: 8px 12px;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularCompanies;
