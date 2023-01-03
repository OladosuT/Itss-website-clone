import "../Styles/Home.css"
import { Content } from "../Common/content"
import { Clients } from "../Common/clients"
import { useState } from "react"
import Slider from "react-slick"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"
import { motion } from "framer-motion"
 



const Home = () => {

	const [imageIndex, setImageIndex] = useState(0)
	const [imageFace, setImageFace] = useState(0)

	const NextArrow = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowRight className="arrow next" />
			</div>
		)
	}

	const PrevArrow = ({ onClick }) => {
		return (
			<div onClick={onClick}>
				<FaArrowLeft className="arrow prev" />
			</div>
		)
	}

	

	const settings = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
		beforeChange: (current, next) => setImageIndex(next),
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


	//   const ArrowNext = ({ onClick }) => {
	// 	return (
	// 		<div onClick={onClick}>
	// 			<FaArrowRight className="arrow next" />
	// 		</div>
	// 	)
	// }

	// const ArrowPrev = ({ onClick }) => {
	// 	return (
	// 		<div onClick={onClick}>
	// 			<FaArrowLeft className="arrow prev" />
	// 		</div>
	// 	)
	// }

	const settings_clients = {
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		slidesToScroll: 1,
		initialSlide: 0,
		centerMode: true,
		centerPadding: 0,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
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

	const scrollToBottom = () => {
		window.scrollTo({
		  top: document.documentElement.scrollHeight,
		  behavior: 'smooth',
		});
	  };


	return (
		<motion.div
			initial={{width: 0}}
			animate={{width: "100%" }}
			exit={{x: window.innerWidth, transition: {duration: 0.1}}}
		>
			<div className="home_hero">
				<div className="container">
					<h1>Together we achieve <span>more.</span></h1>
					<h1>Together, everything is <span>possible.</span></h1>
				</div>
				<div className="chevron"  onClick={scrollToBottom} >
				<img src="../../images/Home/Scroll_Chevron.png" alt="" className="icon-style" />
				</div>
			</div>

			<div className="our_services">
				<div className="header">
					<h1>Our Services</h1>
					<p>
						Innovative services, products & solutions for future-ready
						banking.
					</p>
				</div>

				<div className="slider">
					<Slider {...settings}>
						{Content.map((item, index) => (
							<div key={index} className={index == imageIndex ? "slide activeSlide show" : "slide"}>
									<img src={`./images/Home/${item.image}`} alt={item.title} />
									{index === imageIndex && (
										<div className="show_body">
											<h2>{item.title}</h2>
											<h4>{item.body}</h4>
										</div>
									)}
							</div>
						))}
					</Slider>
				</div>	

				<div className="product_footer">
						<FaArrowRight className="footer_arrow" />
						<h3>See all services</h3>
				</div>

				
			</div>

			<div className="product_solution" id="product">
				<div className="product_content">
					<h1>Products & Solutions</h1>
					<p>
						Our Products and solutions are aimed to reduce the problems faced by
						banks and financial institutions.
					</p>
					<p>
						We strive to provide in innivative banking solutions and products
						that make day to-day banking opera ons simple to manage and monitor
					</p>
					<p>
						We understand the specific needs of banks and offer tailor-made
						solutions that solve issues from the lowest up to the heighest level
						of operation
					</p>
				</div>
				<div className="service_link">
						<FaArrowRight className="pr_arrow" />
						<h3>See all Services</h3>
					</div>
			</div>


			<div class="portfolio">
				<div class="item">
					<img src="../../images/Home/Temenos.png" alt="" />
					<div class="action">
						<h3>Temenos Core Related</h3>
						<a href="#"><FaArrowRight className="pr_arrow" /></a>
					</div>
				</div>
				<div class="item">
					<img src="../../images/Home/IT_Security.png" alt="" />
					<div class="action">
						<h3>IT Security</h3>
						<a href="#"><FaArrowRight className="pr_arrow" /></a>
					</div>
				</div>
				<div class="item">
					<img src="../../images/Home/Digital_and_Electronics.png" alt="" />
					<div class="action">
						<h3>Digital $ Electronic Channels</h3>
						<a href="#"><FaArrowRight className="pr_arrow" /></a>
					</div>
				</div>
				<div class="item">
					<img src="../../images/Home/Reporting_and_Monitoring.png" alt="" />
					<div class="action">
						<h3>Reporting, Monitoring & Analytics</h3>
						<a href="#"><FaArrowRight className="pr_arrow" /></a>
					</div>
				</div>
			</div>

			<div className="our_clients">
				<div className="clients_header">
					<h1>Our Clients</h1>
					<h3>Trusted by banks and financial institutions worldwide</h3>
					<p>
						Globally, 220+ banks and financial institutions have choosen ITSS as a trusted partner in their digital transformation journey. 
						Hundreds of banks have benefiteted from the added value that ITSS brings to their business.
					</p>
				</div>

				<div className="client_slider">
					<Slider {...settings_clients}>
						{Clients.map((item, index) => (
							<div key={index} className={index == imageFace ? "client active_slide showface" : "client"}>
									<img src={`./images/Home/${item.image}`} alt={item.title} />
									{index === imageFace && (
										<div className="client_body">
											<h2>{item.title}</h2>
										</div>
									)}
							</div>
						))}
					</Slider>
				</div>	
				<div className="client_footer">
						<FaArrowRight className="client_footer_arrow" />
						<h3>See all services</h3>
				</div>
				
			</div>

			<div className="twenty_year">
				<div className="twenty_text">
					<h1>More than just a Software Provider</h1>
					<p>Agile in a <span>TEMENOS</span> World</p>
				</div>
				<div className="twenty_img">
					<img src="../../images/Home/20_Years.png" alt="" className="twentyYears" />
					<img src="../../images/Home/Play.png" alt=""  className="play" />
				</div>
			</div>

			<div className="testimonials">
				<div className="testimonials_text">
					<h1>Testimonials</h1>
					<p>
						ITSS has worked with the top banks and financial institutions around the world. Our successful relationships with our 
						partners and clients motivate and inspire us to be the best in business.
					</p>
				</div>
				<div className="testimonials_card">
				<div class="testimonial_item">
					<img src="../../images/Home/Testimonial.png" alt="" />
					<div className="card_content">
						<div className="name">
							<h2>Alfredo Castro</h2>
							<img src="../../images/Home/Rating_Star.png" alt=""  />			
						</div>
						<div className="position">
							<h2>Technology Manager of Inteligo Bank</h2>
						</div>
						<div className="body">
							<p>
								We are already seeing the benefits and are very satisfied with our choice of ITSS Global as the integrator of this upgrade. 
								They demonstrated their high level of expertise, accompanying us all the way, complying with each requirement, and finally 
								going live successfully even in the middle of a pandemic.
							</p>
						</div>
					</div>
				</div>
					
					<div className="client_footer testimonial_footer">
						<FaArrowRight className="client_footer_arrow" />
						<h3>See all Testimonials</h3>
				</div>
				</div>
			</div>

			<div className="insight"  id="insight">
				<div className="insight_header">
					<h1>Insight & Popular Trends / Case Studies</h1>
				</div>
				<div className="insight_content">
				<img src="../../images/Home/Insights_Image.png" alt="" />
					<div className="content_text">
						<h2>Marketing is essential for business growth</h2>
						<h3>Mark Wood</h3>
						<h4>29 August 2022</h4>
						<p>The Owners of a corpora on have a limited liabilty and the 
							business hava a seperate legal personality from its owners.
						</p>
						<div className="insight_link">
						<FaArrowRight className="insight_link_arrow" />
						<h3>Read More</h3>
				</div>

					</div>
				</div>
			</div>

			


			
		</motion.div>
	)
}
export default Home
