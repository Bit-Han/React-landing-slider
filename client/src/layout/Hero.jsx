import Chartjs from "../component/Chartjs";

function Hero() {
  return (
    <section>
      <div className="wow fadeInUp text-center text-indigo-900 space-y-8 mt-28 mb-16">
        <h4 className="text-xl lg:text-2xl font-bold">
          Grow your wealth with a few clicks
        </h4>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          The World At Your <br className="hidden lg:block" /> Fingertips
        </h1>

        <p className="text-sm sm:text-base font-medium">
          Sign up to start investing your money wisely and safely
        </p>
      </div>

      <section className="container wow fadeInUp flex items-center flex-col-reverse xl:flex-row xl:space-y-0 xl:space-x-5">
        <div className="w-full xl:w-1/2">
          <Chartjs />
        </div>

        <div className="w-full xl:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 text-indigo-900">
          <div className="transition-all duration-300 border border-indigo-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/images/global-payment-icon-1.png" alt="icon" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-indigo-900">
              Peace of Mind
            </h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className="transition-all duration-300 border border-blue-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/images/global-payment-icon-2.png" alt="icon" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-blue-900">
              Cheap fees
            </h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className="transition-all duration-300 border border-blue-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/images/global-payment-icon-3.png" alt="icon" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-blue-900">
              100% Transparent
            </h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>

          <div className="transition-all duration-300 border border-blue-200 rounded-3xl p-4 lg:p-8 text-center flex flex-col space-y-8 hover:border-gray-200 hover:border-opacity-50 hover:shadow-2xl">
            <div className="flex items-center justify-center">
              <img src="/images/global-payment-icon-4.png" alt="icon" />
            </div>
            <h3 className="text-xl lg:text-2xl font-bold text-blue-900">
              More investing options
            </h3>
            <p className="max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipiscing elit posuere vel
              venenatis, eu sit massa. Volutpat massa rhoncus odio.
            </p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Hero;
