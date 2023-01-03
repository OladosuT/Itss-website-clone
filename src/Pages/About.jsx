import "../Styles/About.css";
import { Clients } from "../Common/clients";
import { useState } from "react"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion";

const About = () => {

  const Next = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowRight className="arrow_2 next_2" />
			</div>
		)
	}

	const Prev = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowLeft className="arrow_2 prev_2" />
			</div>
		)
	}

	const [front, setFront] = useState(0)

  const settings_about = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <Next />,
		prevArrow: <Prev />,
		beforeChange: (current, next) => setFront(next),
		responsive: [
		  {
			breakpoint: 1024,
			settings: {
			  slidesToShow: 3,
			  slidesToScroll: 1,
			  infinite: true,
			  dots: false
			}
		  },
		  {
			breakpoint: 600,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1,
			  initialSlide: 2,
			  centerMode: false,

			}
		  },
		  {
			breakpoint: 480,
			settings: {
			  slidesToShow: 1,
			  slidesToScroll: 1
			}
		  }
		]
	  };


  return (
    <motion.div
      initial={{width: 0}}
      animate={{width: "100%" }}
      exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
      <div className="about_hero">
        <div className="container">
          <h1>About Us</h1>
          <p>
            Information Technologies Solution & Services (ITSS) develops and
            delvers banking technology solutions and services to banks and
            financial institutions all around the world.
          </p>
        </div>
      </div>

      <div className="our_story">
        <div className="title">
          <h1>Our Story</h1>
        </div>
        <div className="info">
          <div className="info_img">
            <img src="../../images/About_Us/ITSS_Office_Image.png" alt="" />
          </div>
          <div className="txt">
            <p>
              Information Technology Solutions and Services (ITSS), found i
              2001, is a global banking software integrator, headquartered in
              Geneva, Switzerland with 20 strategic offices spread across
              Europe, the Middle East , the Americas, Africa, and Asia. Our
              global expertise and a deep understanding of the uique cultures of
              different banks and regions make us glocalized, helping us tailor
              customized solutions that cater to the specific needs of the
              banking and financial sector.
            </p>
            <p>
              As a prefered Temenos partner, we've supported hundreds of digital
              transformation journeys as a system integrator for a wide array of
              Temenos- products, including T24 Transact. Financial Crime
              Mitigation (FCM), Islamic banking, TAP. Multifonds, Inclusive
              banking Infinity implementation, etc.
            </p>
            <p>
              In terms of services, ITSS offers a wide range of services such as
              implementation, version upgrade services, go-live and
              post-go-live, application services, custome software development,
              testing services, product development, business, and technology
              consulting services.
            </p>
            <p>
              We also offer Offshore Development Center (ODC) to our clients and
              prospects to help them not only in T24 and Temenos Suite, but also
              in other developments and technologies suct as .NET, COBOL, Java,
              JavaScript and.
            </p>
          </div>
        </div>
      </div>

      <div className="worldwide">
        <div className="worldwide_header">
          <h1>Global Expertise and Local Reach</h1>
          <p>
            <span>Multiple Worldwide Locations </span>
            with local support all over the world, we are fluent in banking
            technology.
          </p>
        </div>
        <div className="worlwide_body">
          <div className="body_grid">
            <div className="body_img">
              <img
                src="../../images/About_Us/ITSS_Office_Location.png"
                alt=""
              />
            </div>
            <div className="body_text">
              <p>
                <span>Our footprint is global</span> and yet we understand the
                specific local needs of banks very well. <span>ITSS</span> has
                strategic offices in{" "}
                <span>
                  Morocco, Tunisia, South Africa, India, Mexico, Sigapore,
                  Luxembourg, Panama, Dominican Republic, France, Egypt,
                  Cambodia, Switzerland, UAE, Saudi Arabia, Ethiopia, Kenya,
                  Nigeria, USA, Costa Rica
                </span>{" "}
                and <span>Canada</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="our_clients_2">
        <div className="clients_header_2">
          <h1>Our Clients</h1>
          <h3>Some of our clients all over the world</h3>
          
        </div>


        <div className="client_slider_2">
          <Slider {...settings_about}>
            {Clients.map((item, index) => (
              <div className={index == front ? "client_2 active_slide_2 showface_2" : "client_2"}>
                  <img src={`./images/Home/${item.image}`} alt={item.title} />
                  {index === front && (
                    <div className="client_body_2">
                      <h2>{item.title}</h2>
                    </div>
                  )}
              </div>
            ))}
          </Slider>
        </div>	
        <div className="client_footer_2">
            <FaArrowRight className="client_footer_arrow" />
            <h3>See all references</h3>
        </div>
      </div>

      <div className="who_we_are">
        <h1>Who We Are</h1>
        <p>
          More than 250 banks and financial institutions worldwide have chosen ITSS as a quality partner in their expansion. In Switzerland alone, more than 20 major banking institutions have benefited from the added value brought by ITSS.
        </p>
        <div className="who_card_container">
          <motion.div whileHover={{rotate: 2}} className="border">
          <div className="who_card">
            <img src="../../images/About_Us/Added_Value_Icon.png" alt="" />
            <h3>Win-Win Relationship</h3>
            <p>Establish a long-term and mutually beneficial relationship based on tour excellent services.</p>
          </div>
          </motion.div>
          <motion.div whileHover={{rotate: 2}} className="border">
          <div className="who_card">
            <img src="../../images/About_Us/Integrity_Icon.png" alt="" />
            <h3>Integrity</h3>
            <p>Encourage honest and open dialogue inspiring confidence through responsible and ethical behavior.</p>
          </div>
          </motion.div>
          <motion.div whileHover={{rotate: 2}} className="border">
          <div className="who_card">
            <img src="../../images/About_Us/Added_Value_Icon.png" alt="" />
            <h3>Added Value</h3>
            <p>Improve customers’ financial performance through lower cost, competent services and products.</p>
          </div>
          </motion.div>
        </div>
      </div>

      <div className="timeline">
      <img src="../../images/About_Us/Timeline.png" alt="" />
      </div>

      <div className="our_facts">
        <div className="fact_content">
            <h1>Key Facts</h1>
            <h3>
              ITSS is a Global certified partner for Upgrade and Inclusive
              Banking Suite. Our 1st Temenos infinity Implementation was with
              Avoka. We Completed the firdt Partner Led TAFC to TAFJ Migration,
              and we are the first Partner to obtain the new Temenos Upgrade
              Certification.
            </h3>
            <div className="fact_counter">
              <div className="fact_count">
                <h2>550 +</h2>
                <p>Expert Consultants</p>
              </div>
              <div className="fact_count">
                <h2>600 +</h2>
                <p>Temenos Certification</p>
              </div>
              <div className="fact_count">
                <h2>150 +</h2>
                <p>TLC License</p>
              </div>
              <div className="fact_count">
                <h2>250 +</h2>
                <p>Clients</p>
              </div>
              <div className="fact_count">
                <h2>1000 +</h2>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className="counter_footer">
              <p>For more information, send us an email at <span>mail@itssglobal.com</span> and let us know how we can assist!</p>
            </div>
          </div>
      </div>
      
    </motion.div>
  );
};
export default About;
