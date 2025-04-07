import { useState } from "react";
// import checkIcon from "../assets/icons/Check Icon.png";
import { FaCheck } from "react-icons/fa";
import AnimatedButton from "./AnimatedButton";
import AnimatedFileUpload from "./AnimatedFileUpload";
import AnimatedNavLink from "./AnimatedNavLink";

const MultiStepForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    website: "",
    country: "",
    address: "",
    address2: "",
    city: "",
    state: "",
    zip: "",
    technicalSpecFile: null,
    measurementChartFile: null,
    otherDocumentsFile: null,
    comment: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e, fieldName) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [fieldName]: e.target.files?.[0] }));
    }
  };

  const nextStep = () => {
    setCurrentStep(2);
  };

  const prevStep = () => {
    setCurrentStep(1);
  };

  const resetForm = () => {
    setCurrentStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      website: "",
      country: "",
      address: "",
      address2: "",
      city: "",
      state: "",
      zip: "",
      technicalSpecFile: null,
      measurementChartFile: null,
      otherDocumentsFile: null,
      comment: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentStep(3);
  };

  return (
    <div className="max-w-5xl mx-auto p-6 rounded-lg shadow-2xl my-40">

      {/* Progress Indicator Container */}
      <div className="relative mb-10">
        {/* Two Circles and Connecting Line Container */}
        <div className="flex justify-between items-center">
          {/* Circle 1 Container with Label */}
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[#0B714C] font-medium">Personal Info</span>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-[#0B714C]`}
            >
              {currentStep > 1 ? <FaCheck className="w-6 h-6" /> : "1"}
            </div>
          </div>

          {/* Circle 2 Container with Label */}
          <div className="flex flex-col items-center">
            <span className={`mb-2 font-medium ${currentStep === 2 ? "text-[#0B714C]" : "text-transparent"}`}>
              Technical Info
            </span>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 2 ? "bg-[#0B714C] text-white" : "border-2 border-[#0B714C] text-[#0B714C] bg-white"
              }`}
            >
              {currentStep > 2 ? <FaCheck className="w-6 h-6" /> : "2"}
            </div>
          </div>
        </div>

        {/* Connecting Line */}
        <div
          className="absolute h-[4px] bg-[#0B714C]"
          style={{
            zIndex: -1,
            top: "calc(50% + 12px)",
            left: "calc(4% + 24px)",
            right: "calc(4% + 24px)",
          }}
        ></div>
      </div>

      {/* Form */}
      {/* Step 1: Personal Information */}
      {currentStep === 1 && (
        <form
          onSubmit={nextStep}
          className="bg-gray-50 p-6 rounded-lg relative"
        >
          {/* Container of Name and Company */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label htmlFor="name" className="block text-[#0B714C] mb-1">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                value={formData.name}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="company" className="block text-[#0B714C] mb-1">
                Company:
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your company name"
                value={formData.company}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Container of Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-[#0B714C] mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="block text-[#0B714C] mb-1">
                Phone:
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-10">
            <label htmlFor="website" className="block text-[#0B714C] mb-1">
              Website:
            </label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="Your website url"
              value={formData.website}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-green-600 font-medium mb-2">Street Address</h3>
            <div className="mb-4">
              <label htmlFor="country" className="block text-[#0B714C] mb-1">
                Country
              </label>
              <input
                type="text"
                id="country"
                name="country"
                placeholder="Select Country"
                value={formData.country}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Container of Address and Address 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="mb-4">
              <label htmlFor="address" className="block text-[#0B714C] mb-1">
                Address:
              </label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Your street address, P.O. box"
                value={formData.address}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="address2" className="block text-[#0B714C] mb-1">
                Address 2 (Optional):
              </label>
              <input
                type="text"
                id="address2"
                name="address2"
                placeholder="Suite, unit, building, floor"
                value={formData.address2}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          {/* Container of City, State and Zip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="mb-4">
              <label htmlFor="city" className="block text-[#0B714C] mb-1">
                City:
              </label>
              <input
                type="text"
                id="city"
                name="city"
                placeholder="Select city"
                value={formData.city}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="state" className="block text-[#0B714C] mb-1">
                State:
              </label>
              <input
                type="text"
                id="state"
                name="state"
                placeholder="Select state"
                value={formData.state}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="zip" className="block text-[#0B714C] mb-1">
                Zip:
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                placeholder="Enter ZIP code"
                value={formData.zip}
                onChange={handleInputChange}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mb-12">
            <div>
              <div className="absolute left-10/12 transform -translate-x-1/6">
                <AnimatedButton
                  label="Next"
                  labelColor="White"
                  bgColor="#0B714C"
                ></AnimatedButton>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* Step 2: Technical Specifications */}
      {currentStep === 2 && (
        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg">
          <div className="mb-4">
            <label
              htmlFor="technicalSpecFile"
              className="block text-[#0B714C] mb-1 font-bold"
            >
              Technical Spec Package
            </label>
            <AnimatedFileUpload
              label="Upload file"
              labelColor="white"
              bgColor="#0B714C"
              onFileChange={handleFileChange}
              name="technicalSpecFile"
              accept=".pdf,.doc,.docx,.xlsx" // Optional: specify accepted file types
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="measurementChartFile"
              className="block text-[#0B714C] mb-1 font-bold"
            >
              Measurement Chart
            </label>
            <AnimatedFileUpload
              label="Upload file"
              labelColor="white"
              bgColor="#0B714C"
              onFileChange={handleFileChange}
              name="technicalSpecFile"
              accept=".pdf,.doc,.docx,.xlsx" // Optional: specify accepted file types
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="otherDocumentsFile"
              className="block text-[#0B714C] mb-1 font-bold"
            >
              Other Documents
            </label>
            <AnimatedFileUpload
              label="Upload file"
              labelColor="white"
              bgColor="#0B714C"
              onFileChange={handleFileChange}
              name="technicalSpecFile"
              accept=".pdf,.doc,.docx,.xlsx" // Optional: specify accepted file types
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="comment"
              className="block text-[#0B714C] mb-1 font-bold"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleFileChange}
              className="shadow appearance-none border rounded w-full h-40 py-2 px-3 text-[#0B714C] leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="flex justify-between relative">
            {/* <button
              type="button"
              onClick={prevStep}
              className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Previous
            </button> */}
            <AnimatedNavLink
              label="Personal info"
              labelColor="#0B714C"
              onClick={prevStep}
            ></AnimatedNavLink>
            <div>
              <div>
                <div className="absolute left-8/12 translate-x-1/6">
                  <AnimatedButton
                    label="Submit Request"
                    labelColor="white"
                    bgColor="#0B714C"
                  ></AnimatedButton>
                </div>
              </div>
            </div>
          </div>
        </form>
      )}

      {/* [CHANGED] Added Step 3: Success/Confirmation */}
      {currentStep === 3 && (
        <div className="bg-gray-50 p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-[#0B714C] mb-4">
            Request Submitted
          </h2>
          <p className="mb-8">
            Thank you for your submission! We will contact you shortly regarding
            your order.
          </p>
          <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 bg-[#0B714C] text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Add another order request
          </button>
        </div>
      )}
    </div>
  );
};

export default MultiStepForm;
