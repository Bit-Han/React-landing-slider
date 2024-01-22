import { Menu, Transition } from "@headlessui/react";
import { Fragment} from "react";

import { HiMenu } from "react-icons/hi";
import { HiBeaker } from "react-icons/hi2";

const Navbar = () => {

	return (
		<nav className="text-gray-600 p-2 sm:p-0 text-base xl:text-lg font-medium bg-white py-4 lg:py-[1.1rem] xl:py-8 border-b shadow-sm fixed w-full z-50">
			<section className=" container flex items-center justify-between py-2 xl:py-0">
				<div className="flex items-center space-x-12">
					<a to="/" className="flex items-center space-x-3">
						<HiBeaker className="w-9 h-9 md:w-12 md:h-12 text-blue-600" />
						<div>
							<p className="inline text-xl md:text-2xl uppercase font-bold leading-[0.5rem]">
								Polstic<span className="font-[300]">Bull</span>
							</p>
							<div className="flex items-center space-x-0.5 leading-[0.5rem]">
								<span className="text-[0.62rem] font-bold text-blue-600 uppercase leading-[0.5rem]">
									Invest more envison more
								</span>
								<hr className="w-5 border-sky-600" />
							</div>
						</div>
					</a>
					<div className="space-x-4 xl:space-x-8 hidden md:block">
						<a
							to="#personal"
							className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-blue-600"
						>
							Personal
						</a>
						<a
							to="#products"
							className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-blue-600"
						>
							Products
						</a>
						<a
							to="#how-it-work"
							className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-blue-600"
						>
							How it work
						</a>
						<a
							to="#about-us"
							className="transition-all duration-300 font-medium py-2 xl:py-3 hover:text-blue-600"
						>
							About us
						</a>
					</div>{" "}
				</div>
				<div className="items-center space-x-3 hidden md:block">
					<a
						to="/login"
						className="transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 hover:text-blue-600"
					>
						Login
					</a>

					<a
						to="/register"
						className="transition-all duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 bg-blue-600 text-white rounded-md focus:outline-none hover:bg-blue-700 focus:ring focus:border-blue-500 focus:ring-blue-500/50"
					>
						Sign Up
					</a>
				</div>

				<div className="md:hidden relative">
					<Menu as="div" className="relative inline-block text-left">
						<Menu.Button className="inline-flex w-full justify-center rounded-md bg-blue-600 p-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
							<HiMenu className="h-7 w-7" />
						</Menu.Button>

						<Transition
							as={Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items className="absolute right-0 mt-2 p-3 w-96 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
								<div className="">
									<Menu.Item>
										<a
											to="/#personal"
											className="block transition-all duration-300 font-medium py-2 hover:text-blue-600"
										>
											Personal
										</a>
									</Menu.Item>

									<Menu.Item>
										<a
											to="/#business"
											className="block transition-all duration-300 font-medium py-2 hover:text-blue-600"
										>
											Products
										</a>
									</Menu.Item>

									<Menu.Item>
										<a
											to="/#how-it-work"
											className="block transition-all duration-300 font-medium py-2 hover:text-blue-600"
										>
											How it work
										</a>
									</Menu.Item>

									<Menu.Item>
										<a
											to="/#about-us"
											className="block transition-all duration-300 font-medium py-2 hover:text-blue-600"
										>
											About us
										</a>
									</Menu.Item>

									<Menu.Item>
										<a
											to="/#personal"
											className="block transition-all duration-300 font-medium py-2 hover:text-blue-600"
										>
											Personal
										</a>
									</Menu.Item>

									<div className="flex items-center space-x-3">
										<Menu.Item>
											<a
												to="/login"
												className="w-1/2 text-center transition-all duration-300 px-3 font-medium py-1.5 text-blue-900 border border-blue-900 rounded-md focus:outline-none hover:text-white hover:bg-blue-700 focus:ring focus:border-blue-500 focus:ring-blue-500/50"
											>
												Login
											</a>
										</Menu.Item>

										<Menu.Item>
											<a
												to="/register"
												className="transition-all block text-center w-1/2 duration-300 px-3 lg:px-4 xl:px-8 font-medium py-2 xl:py-3 border border-blue-600 bg-blue-600 text-white rounded-md focus:outline-none hover:bg-blue-700 focus:ring focus:border-blue-500 focus:ring-blue-500/50"
											>
												Sign Up
											</a>
										</Menu.Item>
									</div>
								</div>
							</Menu.Items>
						</Transition>
					</Menu>
				</div>
			</section>
		</nav>
	);
};

export default Navbar;
