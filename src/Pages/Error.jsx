import "../Styles/Error.css"
import { motion } from "framer-motion"

const Error = () => {
  return (
    <motion.div
        initial={{width: 0}}
        animate={{width: "100%" }}
        exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='error'>
            <img src="../../images/Home/ErrorPage.png" alt="" className="icon-style" />

        </div>
    </motion.div>
  )
}

export default Error