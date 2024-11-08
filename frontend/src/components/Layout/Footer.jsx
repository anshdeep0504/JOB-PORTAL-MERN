import React, { useContext } from 'react';
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  const { isAuthorized } = useContext(Context);

  return (
    <footer className={isAuthorized ? "footer-show" : "footer-hide"}>
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; All Rights Reserved by Anshdeep Singh.</p>
        </div>
        <div className="footer-links">
          <Link
            to={'https://github.com/anshdeep0504'}
            target='_blank'
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub />
          </Link>
          <Link
            to={'https://www.linkedin.com/in/anshdeep-singh-a01649231/'}
            target='_blank'
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>

      <style jsx>{`
        footer {
          background-color: #222;
          color: #fff;
          padding: 20px 0;
          text-align: center;
          transition: all 0.3s ease-in-out;
        }

        .footer-show {
          opacity: 1;
          visibility: visible;
        }

        .footer-hide {
          opacity: 0;
          visibility: hidden;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .footer-text p {
          font-size: 14px;
          margin-bottom: 15px;
          color: #bbb;
        }

        .footer-links {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-link {
          font-size: 24px;
          color: #bbb;
          transition: color 0.3s ease, transform 0.3s ease;
        }

        .social-link:hover {
          color: #007bff;
          transform: translateY(-5px);
        }

        .social-link:active {
          transform: translateY(1px);
        }

        @media (max-width: 768px) {
          .footer-links {
            gap: 10px;
          }

          .footer-text p {
            font-size: 12px;
          }
        }
      `}</style>
    </footer>
  );
}

export default Footer;
