import React from 'react';
import { MoonIcon, ArrowLeft } from 'lucide-react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const CheckoutPage: React.FC = () => {
    const navigate = useNavigate();

  return (
    <div className="w-full max-w-5xl bg-white rounded-lg overflow-hidden mx-auto">
      {/* Header */}
      <div className="px-8 py-6 flex justify-between items-center border-b border-gray-200">
        <div
  className="w-24 cursor-pointer"
  onClick={() => navigate("/")}
>
  <MoonIcon className="h-6 w-6 hover:scale-110 transition-transform" />
</div>

        <div className="flex gap-8 justify-end flex-1">
          <Link
  to="/aboutus"
  className="text-gray-500 text-sm hover:font-medium hover:text-gray-900 transition-all"
>
  About Us
</Link>

          <a href="#" className="text-gray-500 text-sm hover:font-medium hover:text-gray-900 transition-all">Wishlist</a>
          <a href="#" className="text-gray-900 text-sm border-b border-black pb-0.5 hover:font-medium transition-all">Cart</a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row max-w-4xl mx-auto">
        {/* Left Column - Shipping Address */}
        <div className="p-8 w-full md:w-3/5">
          {/* Back Navigation */}
          <div
  onClick={() => navigate("/")}
  className="flex items-center gap-2 mb-8 cursor-pointer"
>
  <ArrowLeft className="h-4 w-4" />
  <span className="font-medium text-[15px]">Shipping Address</span>
</div>


          {/* Address Form */}
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-6">
              <div className="w-5 h-5 border-2 border-red-500 rounded-full flex items-center justify-center mr-3">
                <div className="w-2.5 h-2.5 bg-red-500 rounded-full"></div>
              </div>
              <span className="font-medium text-[15px]">Add New Address</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">First Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">Last Name</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-[13px] mb-2 text-gray-600">Street Address</label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">Apt Number</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">State</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
              <div>
                <label className="block text-[13px] mb-2 text-gray-600">Zip</label>
                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg p-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
                />
              </div>
            </div>

            <div className="flex gap-3">
              <button className="border border-gray-300 rounded-lg py-2.5 px-6 text-sm hover:bg-gray-50 transition-colors">
                cancel
              </button>
              <button className="bg-black text-white rounded-lg py-2.5 px-6 flex-1 text-sm hover:bg-gray-900 transition-colors">
                Save This Address
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Order Summary */}
        <div className="bg-gray-50 p-8 w-full md:w-2/5">
          <div className="mb-8 text-sm text-gray-600">
            <p>
              By placing your order, you agree to our company{" "}
              <a href="#" className="underline text-gray-900 hover:font-medium transition-all">Privacy policy</a> and{" "}
              <a href="#" className="underline text-gray-900 hover:font-medium transition-all">Conditions of use</a>.
            </p>
          </div>

          <div className="mb-8">
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
              <div className="flex justify-between pb-4 text-sm border-b border-gray-200">
                <span>Tax Collected:</span>
                <span>1,400</span>
              </div>
              
              <div className="flex justify-between pt-4 font-medium text-[15px]">
                <span>Order Total:</span>
                <span>8,199</span>
              </div>
            </div>
          </div>

          <button className="bg-black text-white rounded-lg py-3.5 w-full text-sm font-medium hover:bg-gray-900 transition-colors">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;