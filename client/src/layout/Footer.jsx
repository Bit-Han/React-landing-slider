import {
    SlSocialFacebook,
    SlSocialInstagram,
    SlSocialLinkedin,
    SlSocialTwitter
} from "react-icons/sl";
 


const Footer = () => {
    return (
			<footer className="bg-blue-900 text-white py-8">
				<div className="container mx-auto flex flex-wrap text-center">
					{/* // section 1 */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 ">
						<h3 className="text-lg front-semibold mb-2">About Us</h3>
						<ul>
							<li>Our company</li>
							<li>Foundations</li>
							<li>Careers</li>
						</ul>
					</div>
					{/* Section 2 */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 ">
						<h3 className="text-lg front-semibold mb-2">Accounts</h3>
						<ul>
							<li>
								Cooperate
							</li>
							<li>Regular</li>
							<li>Special Account</li>
						</ul>
					</div>
					{/* Section 3 */}
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 ">
						<h3 className="text-lg front-semibold mb-2">Products</h3>
						<ul>
							<li>
								<a>Foreign Investing</a>
							</li>
							<li>Nigerian Investing</li>
							<li>Managed Investing</li>
							<li></li>
						</ul>
					</div>
					<div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4 ">
						<select className="text-sm text-gray-600 border rounded-md">
							<option>English</option>
							<option>Español</option>
							<option>français</option>
						</select>
					</div>
				</div>

				{/* Social contents */}
				<div className="container mx-auto mt-8 text-center">
					<p className="mb-4">Connect with us on social media </p>
					<div className="flex justify-center space-x-4">
						<div className="mr-2">
							<SlSocialFacebook className="w-6 h-6" />
						</div>
						<div className="mr-4">
							<SlSocialInstagram className="w-6 h-6" />
						</div>
						<div className="mr-4">
							<SlSocialLinkedin className="w-6 h-6" />
						</div>
						<div className="mr-4">
							<SlSocialTwitter className="w-6 h-6" />
						</div>
					</div>

					<p className="mt-4 text-white">
						© Copyright 2024 Lorem Inc. All rights reserved.
					</p>
				</div>
			</footer>
		);
};

export default Footer;