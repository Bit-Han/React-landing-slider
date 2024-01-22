//import ExaPortfolio from "./layout/ExaPortfolio";
import Navbar from "./layout/Navbar";
import Banner from "./layout/Banner";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import CalltoAction from "./layout/CalltoAction";
import TaxPage from "./layout/TaxPage";
import Chartjs from "./layout/Chartjs";
//import DisplayCharts from "./layout/DisplayCharts";

function App() {
	return (
		<div>
			<Navbar />
			<Banner />
			<Chartjs />
			<Hero />
			<CalltoAction />
			<TaxPage />
			<Footer />  
			{/* <DisplayCharts /> */}
		</div>
	);
}

export default App;
