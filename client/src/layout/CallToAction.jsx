const CalltoAction = () => {
	return (
		<section>
			<div
				className="bg-blue-900 mt-28 pt-10 md:pt-28 pb-52 space-y-8 text-center text-white bg-no-repeat bg-cover bg-center"

			>
				<h3 className="wow fadeInUp text-xl md:text-2xl text-green-400 font-bold">
					High speeds. Low fees. No hassle.
				</h3>
				<h1 className="wow fadeInUp text-3xl md:text-4xl xl:text-6xl font-bold">
					All Your Payments In <br className="hidden lg:block" /> One Place
				</h1>
				<p className="wow fadeInUp text-white font-medium text-opacity-80 text-sm md:text-base">
					Get used to low fees and great exchange rates on international money{" "}
					<br /> transfers.Expand your business worldwide
				</p>
			</div>

			<section className="container -mt-[150px] wow fadeInUp">
				<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
					<div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
						<div className="flex items-center justify-center">
							<img src="/images/our-solutions-icon-1.png" alt="" />
						</div>
						<h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
							Payments
						</h3>
						<p className="max-w-lg text-lg text-indigo-900">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>

					<div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
						<div className="flex items-center justify-center">
							<img src="/images/our-solutions-icon-2.png" alt="" />
						</div>
						<h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
							Collections
						</h3>
						<p className="max-w-lg text-lg text-indigo-900">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>

					<div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
						<div className="flex items-center justify-center">
							<img src="/images/our-solutions-icon-3.png" alt="" />
						</div>
						<h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
							Conversions
						</h3>
						<p className="max-w-lg text-lg text-indigo-900">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>

					<div className="w-2/3 mx-auto md:w-full bg-white transition-all duration-300 border border-gray-200 border-opacity-50 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 shadow-xl">
						<div className="flex items-center justify-center">
							<img src="/images/our-solutions-icon-4.png" alt="" />
						</div>
						<h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
							Global Account
						</h3>
						<p className="max-w-lg text-lg text-indigo-900">
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</p>
					</div>
				</div>
			</section>
		</section>
	);
};

export default CalltoAction;
