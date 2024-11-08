import React from "react";
import {
  MdOutlineDesignServices,
  MdOutlineWebhook,
  MdAccountBalance,
  MdOutlineAnimation,
} from "react-icons/md";
import { TbAppsFilled } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { GiArtificialIntelligence } from "react-icons/gi";
import { IoGameController } from "react-icons/io5";

const PopularCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Graphics & Design",
      subTitle: "305 Open Positions",
      icon: <MdOutlineDesignServices />,
    },
    {
      id: 2,
      title: "Mobile App Development",
      subTitle: "500 Open Positions",
      icon: <TbAppsFilled />,
    },
    {
      id: 3,
      title: "Frontend Web Development",
      subTitle: "200 Open Positions",
      icon: <MdOutlineWebhook />,
    },
    {
      id: 4,
      title: "MERN STACK Development",
      subTitle: "1000+ Open Positions",
      icon: <FaReact />,
    },
    {
      id: 5,
      title: "Account & Finance",
      subTitle: "150 Open Positions",
      icon: <MdAccountBalance />,
    },
    {
      id: 6,
      title: "Artificial Intelligence",
      subTitle: "867 Open Positions",
      icon: <GiArtificialIntelligence />,
    },
    {
      id: 7,
      title: "Video Animation",
      subTitle: "50 Open Positions",
      icon: <MdOutlineAnimation />,
    },
    {
      id: 8,
      title: "Game Development",
      subTitle: "80 Open Positions",
      icon: <IoGameController />,
    },
  ];

  return (
    <section className="popular-categories">
      <div className="container">
        <h3 className="section-title">POPULAR CATEGORIES</h3>
        <div className="categories-banner">
          {categories.map((category) => (
            <div className="card" key={category.id}>
              <div className="icon">{category.icon}</div>
              <div className="category-text">
                <p className="category-title">{category.title}</p>
                <p className="category-subtitle">{category.subTitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .popular-categories {
          padding: 60px 20px;
          background-color: #f8f9fa;
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

        .categories-banner {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 30px;
        }

        .card {
          background-color: #fff;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .card:hover {
          transform: translateY(-10px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .icon {
          font-size: 40px;
          color: #007bff;
          margin-bottom: 20px;
        }

        .category-text {
          text-align: center;
        }

        .category-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 8px;
        }

        .category-subtitle {
          font-size: 14px;
          color: #777;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }

          .card {
            padding: 25px;
          }
        }

        @media (max-width: 480px) {
          .section-title {
            font-size: 24px;
          }

          .card {
            padding: 20px;
          }

          .categories-banner {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default PopularCategories;
