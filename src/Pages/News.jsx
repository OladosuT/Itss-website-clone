import "../Styles/News.css"
import { NewsArticle } from "../Common/newsArticle"
import { FaArrowRight } from "react-icons/fa"
import { motion } from "framer-motion"

const News = () => {
	return (
		<motion.div
			initial={{width: 0}}
			animate={{width: "100%" }}
			exit={{x: window.innerWidth, transition: {duration: 0.1}}}
		>
			<div className="news_hero">
				<div className="container">
					<h1>News</h1>
					<p>Stay up to date with the latest news from the ITSS Community!</p>
				</div>
			</div>

			<div className="editor">
				<div className="banner">
					<img src="../../images/News/Editor_Pick_Article_Image.png" alt="" />
				</div>
				<div className="editor_text">
					<div className="title">
						<h3>
							ITSS GOES LIVE WITH ZITOUNA BANK'S MIGRATION OF T24 CORE BANKING
							SYSTEMS FROM R13 TAFC TO 2O TAFJ
						</h3>
					</div>
					<div className="date">
						<p>June 30, 2022</p>
					</div>
					<div className="link">
						<FaArrowRight className="icon" />
						<h3>Read More</h3>
					</div>
				</div>
			</div>

			<div className="box_card">
				<div className="box">
					{NewsArticle.map((item, index) => (
						<div className="cardboard">
							<div className="header">
								<img src={`./images/News/${item.img}`} alt="" />
							</div>
							<div className="box_body">
								<h3>{item.article}</h3>
							</div>
							<div className="foot">
								<img
									src="../../images/News/Read_More_Icon.png"
									alt=""
									className="read"
								/>
								<h4 className="foot_h2">{item.link}</h4>
								<img
									src="../../images/News/Social_Share_Icon.png"
									alt=""
									className="share"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	)
}
export default News
