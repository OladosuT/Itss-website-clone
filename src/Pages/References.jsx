import "../Styles/References.css";
import { Logo } from "../Common/banksLogo";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

const References = () => {
  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%" }}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <div className="reference_hero">
        <div className="container">
          <h1>Reference</h1>
          <p>
            More than 220 banks and financial institutions worldwide have chosen
            ITSS as a quality partner in their expansion. in Switzerland more
            than 20 major banking institutions benefits from the added value
            brought by ITSS.
          </p>
        </div>
      </div>

      <div className="highlight">
        <h1>
          More than 220 banks and financial institutions worldwide have chosen
          ITSS
        </h1>
        <h3>
          More than 220 banks and financial institutions worldwide have chosen
          ITSS as a quality partner in their expansion. in Switzerland more than
          20 major banking institutions benefits from the added value brought by
          ITSS.
        </h3>
      </div>

      <div className="banks">
          <div className="banks_categories">
            <li className="active">ALL</li>
            <li>AFRICA</li>
            <li>AMERICAS</li>
            <li>ASIA</li>
            <li>EUROPE</li>
            <li>MIDDLE EAST</li>
          </div>

        <div className="logo">
          {Logo.map((item) => (
            <motion.div whileHover={{scale: 1.05}} className="logo_card">
              <img src={`./images/References/${item.img}`} alt="" />
            </motion.div>
          ))}
        </div>
      </div>

      <div className="facts">
        <div className="fact_content">
            <h1>Key Facts</h1>
            <h3>
              ITSS is a Global certified partner for Upgrade and Inclusive
              Banking Suite. Our 1st Temenos infinity Implementation was with
              Avoka. We Completed the firdt Partner Led TAFC to TAFJ Migration,
              and we are the first Partner to obtain the new Temenos Upgrade
              Certification.
            </h3>
            <div className="counter">
              <div className="count">
                <h2>370 +</h2>
                <p>Temenos Consultants</p>
              </div>
              <div className="count">
                <h2>600 +</h2>
                <p>Temenos Certification</p>
              </div>
              <div className="count">
                <h2>150 +</h2>
                <p>TLC License</p>
              </div>
            </div>
            <div className="link">
              <FaArrowRight className="arrow_right" />
              <h2>Get In Touch</h2>
            </div>
          </div>
      </div>
    </motion.div>
  );
};
export default References;
