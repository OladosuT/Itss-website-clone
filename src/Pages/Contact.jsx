import "../Styles/Contact.css"
import { address } from "../Common/address"
import { Offices } from "../Common/offices"
import { useState } from "react"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion"


const Contact = () => {

	const [ImageFace, setImageFace] = useState(0)


	const NextClient = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowRight className="arrowclient nextclient" />
			</div>
		)
	}

	const PrevClient = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowLeft className="arrowclient prevclient" />
			</div>
		)
	}


	const settings_slider = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextClient />,
		prevArrow: <PrevClient />,
		beforeChange: (current, next) => setImageFace(next),
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
			<div className="contact_hero">
				<div className="container">
					<h1>Contact Us</h1>
					<h3>
						Information Technologies Solutions & Services (ITSS) develops and
						develops and delivers banking technology solutions andservices to
						banks and financial institutions all around the world.
					</h3>
				</div>
			</div>

			{/* <div className="form"> */}
				<div className="form">
					<div className="header">
						<h1>Get in Touch</h1>
					</div>
					<div className="box-form">
						<form className="form_control">
							<div>
								<input type="text" placeholder="Your Name" />
							</div>
							<div>
								<input type="text" placeholder="Your Email" />
							</div>
							<div>
								<textarea rows="10" placeholder="Message" />
							</div>
							<button className="btn_form">Send Message</button>
						</form>
						<div className="address">
							{address.map((item) => (
								<div className="card_contact">
									<img src={`./images/Contact_Us/${item.img}`} alt="" />
									<div className="card_text">
										<h3>{item.head}</h3>
										<p>{item.body}</p>
									</div>
								</div>
							))}

							<div className="social">
								<p>Follow Us</p>
								<div className="social_icon">
									<img src="./images/Contact_Us/Insta_Blue_Icon.png" alt="" />
									<img
										src="./images/Contact_Us/LinkedIn_Blue_Icon.png"
										alt=""
									/>
									<img src="./images/Contact_Us/Twitter_Blue_Icon.png" alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			{/* </div> */}

			<div className="location">
				<div className="header">
					<h1>ITSS HQ Location</h1>
				</div>
				<div className="map">
					<img
						src="./images/Contact_Us/Google_Map.png
				"
						alt=""
					/>
				</div>
			</div>

		

			<div className="our_offices">
				<div className="offices_header">
					<h1>Our Offices</h1>
					<p>
					ITSS develops and delivers banking technology solutions and services to banks and financial institutions all around the world.
					</p>
				</div>

				<div className="offices_slider">
					<Slider {...settings_slider}>
						{Offices.map((item, index) => (
							<div className={index == ImageFace ? "office active_office_slide showoffice" : "office"}>
									<img src={`./images/Contact_Us/${item.image}`} alt={item.title} />
									{index === ImageFace && (
										<div className="office_body">
											<h2>{item.title}</h2>
										</div>
									)}
							</div>
						))}
					</Slider>
				</div>	
				
			
			</div>

			
			

			
		</motion.div>
	)
}
export default Contact
