// import { useState, useEffect } from "react";
// const ExaPortfolio = () => {
// 	const [portfolio, setPortfolio] = useState(null);
// 	const [whatever, setWhatEver] = useState({});

// 	useEffect(() => {
// 		const fetchData = async () => {
// 			const response = await fetch("http://localhost:5000/risk-data");
// 			const result = await response.json();
// 			setPortfolio(result);
// 		};
// 		fetchData();
// 	}, []);
// 	const handleChange = (event) => {
// 		const currentInvestment = portfolio.find((investment) => {
// 			console.log(investment.risk_score);
// 			return investment.risk_score == event.target.value;
// 		});
// 		console.log(currentInvestment);
// 		setWhatEver(currentInvestment);
// 	};
// 	return (
//         <>
// 		{portfolio && <div className="">
// 			<input
// 				type="range"
// 				name=""
// 				id=""
// 				min={0}
// 				max={10}
// 				onChange={handleChange}
// 			/>
// 			<div>{whatever.nigerian_stocks}</div>
// 		</div>}
//         </>
// 	);
// };

// export default ExaPortfolio;



// eslint-disable-next-line react/prop-types

import Slider from "react-slider";

// eslint-disable-next-line react/prop-types
const CustomSlider = ({ value, onChange}) => {
  return (
		<div className="flex items-center mt-6">
			<label className="text-lg mr-4">Select your investment level: {value}</label>
			<Slider
				type="range"
				min={0}
				max={10}
				step={1}
				value={value}
				onChange={onChange}
				className="w-1/2"
			/>
			{/* <span className="ml-4">{value}</span> */}
		</div>
	);
}

export default CustomSlider;