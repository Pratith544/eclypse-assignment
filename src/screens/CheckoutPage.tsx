import React from "react";
import { MoonIcon, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-screen h-screen bg-white mx-auto flex flex-col relative shadow-lg border border-[#E5E7EB] overflow-hidden">
      {/* Header */}
      <div className="px-12 py-6 flex justify-start items-center ">
        <div
          className="w-10 h-10 bg-[url(/frame-8.png)] bg-cover bg-center cursor-pointer hover:scale-110 transition-transform"
          onClick={() => navigate("/")}
        ></div>
        <div className="flex gap-12 justify-end flex-1">
          <Link
            to="/aboutus"
            className="text-gray-500 text-sm hover:font-medium hover:text-gray-900 transition-all"
          >
            About Us
          </Link>
          <a
            href="#"
            className="text-gray-500 text-sm hover:font-medium hover:text-gray-900  transition-all"
          >
            Waitlist
          </a>
          <a
            href="#"
            className="text-gray-900 text-sm border-b border-black pb-0.5 hover:font-medium transition-all"
          >
            Cart
          </a>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-row justify-center items-start flex-1 w-full h-full gap-[40px]">
        {/* Left Column - Shipping Address */}
        <div className="bg-white border border-white rounded-[10px] p-[32px] w-[600px] min-h-[600px] flex flex-col justify-start">
          {/* Back Navigation */}
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-1 mb-4 cursor-pointer pl-2"
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium text-[20px] bg-[#fbfafb] bg-opacity-20 px-2 rounded-sm leading-tight">
              Shipping Address
            </span>
          </div>
          {/* Address Form */}
          <div className="border border-gray-200 rounded-lg p-8 h-[500px] flex flex-col">
            <div className="flex items-center mb-6 mt-2">
              <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              </div>
              <span className="font-medium text-[18px]">Add New Address</span>
            </div>
            <div className="flex flex-col gap-6 flex-1">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] mb-2 text-gray-600">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-[13px] mb-2 text-gray-600">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">
                  Street Address
                </label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <label className="block text-[13px] mb-2 text-gray-600">
                    Apt Number
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-[13px] mb-2 text-gray-600">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-[13px] mb-2 text-gray-600">
                    Zip
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4 mt-8">
              <button className="border border-gray-300 rounded-lg py-2.5 px-6 text-sm hover:bg-red-500 transition-colors duration-300 w-[120px]">
                cancel
              </button>
              <button className="bg-black text-white rounded-lg py-2.5 px-6 flex-1 text-sm hover:bg-red-500 transition-colors duration-300">
                Save This Address
              </button>
            </div>
          </div>
        </div>
        {/* Right Column - Order Summary */}
        <div className="flex flex-col gap-0 w-[450px] min-h-[600px] mt-[70px]">
          {/* Shipping Address Card (Right) */}

          {/* Order Summary Card (Right) */}
          <div className="bg-gray-100 p-[32px] w-[450px] min-h-[505px] rounded-[10px] shadow-md flex flex-col justify-between">
            <div>
              <div className="mb-8 text-sm text-gray-600">
                <p>
                  By placing your order, you agree to our company{" "}
                  <a
                    href="#"
                    className=" text-black font-semibold hover:font-medium transition-all"
                  >
                    Privacy policy
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className=" text-black font-semibold hover:font-medium transition-all"
                  >
                    Conditions of use
                  </a>
                  .
                </p>
              </div>
              <div className="mb-8">
                <div className="border-t border-gray-300 mb-6"></div>
                <h3 className="font-medium text-[15px] mb-6">Order Summary</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Items - Silhouette No. 1 - Vermillion</span>
                    <span>7,999</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping and handling:</span>
                    <span>200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Before tax:</span>
                    <span>6,599</span>
                  </div>
                  <div className="flex justify-between pb-8 text-sm border-b border-gray-200">
                    <span>Tax Collected:</span>
                    <span>1,400</span>
                  </div>
                  <div className="flex justify-between pt-4 font-medium text-[15px]">
                    <span>Order Total:</span>
                    <span>8,199</span>
                  </div>
                </div>
              </div>
            </div>
            <button className="bg-black hover:bg-red-500 transition-colors duration-300 text-white rounded-lg py-3.5 w-full text-sm font-medium mt-4">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;