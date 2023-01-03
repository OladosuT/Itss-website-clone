import { BrowserRouter as Router} from "react-router-dom"
import Footer from "./Components/Footer"
import Navbar from "./Components/Navbar"

import "./index.css"
import AnimatedRoutes from "./Components/AnimatedRoutes"

const App = () => {
	return (
		<Router>
			<Navbar />
			<AnimatedRoutes />
			<Footer />
		</Router>
	)
}
export default App
