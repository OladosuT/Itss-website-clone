import "../Styles/Partners.css"
import { PartnersData } from "../Common/partnersData"
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

const Partners = () => {
	return (
		<motion.div
			initial={{width: 0}}
			animate={{width: "100%" }}
			exit={{x: window.innerWidth, transition: {duration: 0.1}}}
			className="container"
		>
			<div className="partners_hero">
				<div className="container">
					<h1>Partners</h1>
					<p>
						Information Technologies Solutions & Services (ITSS) develops and
						develops and delivers banking technology solutions andservices to
						banks and financial institutions all around the world.
					</p>
				</div>
			</div>

			<div className="partners_card">
				<div className="card_container">
					{PartnersData.map((item, index) => (
						<motion.div whileHover={{scale: 1.05}} className="card">
							<div className="header">
								<img src={`./images/Partners/Option_1/${item.img}`} alt="" />
							</div>
							<div className="body">
								<p>{item.body}</p>
							</div>
							<div className="foot">
								<FaArrowRight className="icon" />
								<h2>{item.link}</h2>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
export default Partners
