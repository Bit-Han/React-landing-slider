import { useState } from "react";
import Slider from "./Slider";

const InvestmentPage = () => {
	const [sliderValue, setSliderValue] = useState(0);

	return (
		<div className="container mx-auto mt-8">
			<h1 className="text-4xl font-bold mb-4">Investment Portfolio</h1>

			<Slider value={sliderValue} onChange={setSliderValue} />
		</div>
	);
};

export default InvestmentPage;
