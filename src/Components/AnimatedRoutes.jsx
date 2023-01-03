import { Routes, Route, useLocation } from "react-router-dom"

import About from "../Pages/About"
import Contact from "../Pages/Contact"
import Home from "../Pages/Home"
import News from "../Pages/News"
import Partners from "../Pages/Partners"
import References from "../Pages/References"
import Error from "../Pages/Error"

import {AnimatePresence} from 'framer-motion'


const AnimatedRoutes = () => {

    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}> 
            <Route path="/" element={<Home />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/news" element={<News />} />
            <Route path="/references" element={<References />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Error />} />
	    </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes