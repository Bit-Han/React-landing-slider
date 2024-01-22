
// import CustomSlider from "../component/Slider"
// import CustomChart from "../component/Chart"
import { useEffect, useState } from "react"


const DisplayCharts = () => {
    // const [sliderValue, setSliderValue] = useState(0);
    // const [chartData] = useState([]);
    const [data, setData] = useState({})
useEffect(() => {
  //"http://localhost:5000/risk-data";

    fetch("http://localhost:5000/risk-data")
    .then(res => res.json())
    .then (data => setData(data));
}, []);


  return (
		<div className="container mx-auto mt-8">
			<h1>{data.commodities}</h1>
		</div>
	);
}

export default DisplayCharts