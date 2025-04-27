import { useState } from "react";
// import checkIcon from "../assets/icons/Check Icon.png";
import PropTypes from "prop-types";
import { FaCheck } from "react-icons/fa";
import { useMediaQuery } from "../hooks/useMediaQuery";
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

  const isMobile = useMediaQuery("(max-width: 768px)");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("handleInputChange", e.target);
    console.log("Input Field Name:", name, ",", "Input Field Value:", value);
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

  // Custom input component with label integrated into border
  // const FormInput = ({
  //   label,
  //   name,
  //   placeholder,
  //   value,
  //   onChange,
  //   type = "text",
  // }) => {
  //   return (
  //     <div className="relative">
  //       <div className="absolute -top-[14px] left-[10px] px-1 bg-white z-10">
  //         <span className="text-[#0B714C] text-base">{label}</span>
  //       </div>
  //       <input
  //         id={name}
  //         name={name}
  //         type={type}
  //         placeholder={placeholder}
  //         value={value || ""}
  //         onChange={onChange}
  //         // className="border border-[#0B714C] rounded-md h-10 pt-1"
  //         className="shadow appearance-none rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-[#0B714C] divide-solid border-[1px]"
  //         required
  //       />
  //     </div>
  //   );
  // };

  // Custom Text Area component with label integrated into border
  // const FormTextarea = ({ label, name, placeholder, value, onChange }) => {
  //   return (
  //     <div className="relative">
  //       <div className="absolute -top-[14px] left-[10px] px-1 bg-white z-10">
  //         <span className="text-[#0B714C] text-base">{label}</span>
  //       </div>
  //       <textarea
  //         id={name}
  //         name={name}
  //         placeholder={placeholder}
  //         value={value || ""}
  //         onChange={onChange}
  //         className="border border-[#0B714C] rounded-md min-h-[200px] w-full pt-2 px-3 resize-none"
  //       />
  //     </div>
  //   );
  // };

  const FormLabel = ({ label }) => {
    return (
      <div className="absolute -top-[14px] left-[10px] px-1 bg-white z-10">
        <span className="text-[#0B714C] text-base">{label}</span>
      </div>
    );
  };

  return (
    <div className="max-w-5xl mx-auto px-14 pb-12 pt-5 rounded-lg shadow-2xl my-40">
      {/* Progress Indicator Container */}
      <div className="relative mb-10">
        {/* Two Circles and Connecting Line Container */}
        <div className="flex justify-between items-center">
          {/* Circle 1 Container with Label */}
          <div className="flex flex-col items-center">
            <span className="mb-2 text-[#0B714C] font-medium">
              Personal Info
            </span>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold bg-[#0B714C]`}
            >
              {currentStep > 1 ? <FaCheck className="w-6 h-6" /> : "1"}
            </div>
          </div>

          {/* Circle 2 Container with Label */}
          <div className="flex flex-col items-center">
            <span
              className={`mb-2 font-medium ${
                currentStep === 2 ? "text-[#0B714C]" : "text-transparent"
              }`}
            >
              Technical Info
            </span>
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center font-bold ${
                currentStep >= 2
                  ? "bg-[#0B714C] text-white"
                  : "border-2 border-[#0B714C] text-[#0B714C] bg-white"
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-4 mb-12">
            <div className="mb-4 relative">
              {/* <label htmlFor="name" className="block text-[#0B714C] mb-1">
                Name:
              </label> */}
              <FormLabel label="Name" />
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

            {/* <FormInput
              id="name"
              label="Name"
              name="name"
              placeholder="Your name"
              value={formData.name}
              onChange={handleInputChange}
            /> */}

            <div className="mb-4 relative">
              {/* <label htmlFor="company" className="block text-[#0B714C] mb-1">
                Company:
              </label> */}
              <FormLabel label="Company" />
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

            {/* <FormInput
              label="Company"
              name="company"
              placeholder="Your company name"
              value={formData.company}
              onChange={handleInputChange}
            /> */}
          </div>

          {/* Container of Email and Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-4 mb-12">
            <div>
              <div className="mb-4 relative">
                {/* <label htmlFor="email" className="block text-[#0B714C] mb-1">
                  Email:
                </label> */}
                <FormLabel label="Email" />
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
            <div className="mb-4 relative">
              {/* <label htmlFor="phone" className="block text-[#0B714C] mb-1">
                Phone:
              </label> */}
              <FormLabel label="Phone" />
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

            {/*  <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="Your email"
              value={formData.email}
              onChange={handleInputChange}
            />

            <FormInput
              label="Phone"
              name="phone"
              type="number"
              placeholder="Your phone number"
              value={formData.phone}
              onChange={handleInputChange}
            /> */}
          </div>

          <div className="mb-10 relative">
            {/* <label htmlFor="website" className="block text-[#0B714C] mb-1">
              Website:
            </label> */}
            <FormLabel label="Website" />
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

          {/* Website */}
          {/* <div className="mb-14">
            <FormInput
              label="Website"
              name="website"
              type="url"
              placeholder="Your website url"
              value={formData.website}
              onChange={handleInputChange}
            />
          </div> */}

          <div className="mb-4 mt-16 md:mt-0">
            <h3 className="text-[#0B714C] font-medium mb-4">Street Address</h3>
            <div className="mb-22 relative">
              {/* <label htmlFor="country" className="block text-[#0B714C] mb-1">
                Country
              </label> */}
              <FormLabel label="Country" />
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
            {/* <div className="mb-12">
              <FormInput
                label="Country"
                name="country"
                placeholder="Select Country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </div> */}
          </div>

          {/* Container of Address and Address 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 xl:gap-4 mb-12">
            <div className="mb-4 relative">
              {/* <label htmlFor="address" className="block text-[#0B714C] mb-1">
                Address:
              </label> */}
              <FormLabel label="Address" />
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
            {/* <FormInput
              label="Address"
              name="address"
              placeholder="Your street address, P.O. box"
              value={formData.address}
              onChange={handleInputChange}
            /> */}

            <div className="mb-4 relative">
              {/* <label htmlFor="address2" className="block text-[#0B714C] mb-1">
                Address 2 (Optional):
              </label> */}
              <FormLabel label="Address 2 (Optional)" />
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

            {/* <FormInput
              label="Address 2 (Optional)"
              name="address2"
              placeholder="Suite, unit, building, floor"
              value={formData.address2}
              onChange={handleInputChange}
            /> */}
          </div>

          {/* Container of City, State and Zip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 xl:gap-4 mb-12">
            <div className="mb-4 relative">
              {/* <label htmlFor="city" className="block text-[#0B714C] mb-1">
                City:
              </label> */}
              <FormLabel label="City" />
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
            <div className="mb-4 relative">
              {/* <label htmlFor="state" className="block text-[#0B714C] mb-1">
                State:
              </label> */}
              <FormLabel label="State" />
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
            <div className="mb-4 relative">
              {/* <label htmlFor="zip" className="block text-[#0B714C] mb-1">
                Zip:
              </label> */}
              <FormLabel label="ZIP" />
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

            {/* <FormInput
              label="City"
              name="city"
              placeholder="Select city"
              value={formData.city}
              onChange={handleInputChange}
            />

            <FormInput
              label="State"
              name="state"
              placeholder="Select state"
              value={formData.state}
              onChange={handleInputChange}
            />

            <FormInput
              label="ZIP"
              name="zip"
              placeholder="Enter ZIP code"
              value={formData.zip}
              onChange={handleInputChange}
            /> */}
          </div>

          {isMobile ? (
            // Mobile view - full width button centered
            // <div className="pt-2 pb-4" onClick={nextStep}>
            //   <button
            //     type="submit"
            //     className="w-full bg-[#0B714C] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#095a3d] transition-colors duration-300"
            //   >
            //     Next
            //   </button>
            // </div>
            <div>
              <div className="mt-12" onClick={nextStep}>
                <div className="w-full sm:w-auto sm:absolute xl:left-10/12 xl:transform xl:translate-x-1/4">
                  <AnimatedButton
                    label="Next"
                    labelColor="White"
                    bgColor="#0B714C"
                    fullWidthOnMobile={true}
                  ></AnimatedButton>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-12" onClick={nextStep}>
                <div className="absolute xl:left-10/12 xl:transform xl:translate-x-1/4">
                  <AnimatedButton
                    label="Next"
                    labelColor="White"
                    bgColor="#0B714C"
                  ></AnimatedButton>
                </div>
              </div>
            </div>
          )}
        </form>
      )}

      {/* Step 2: Technical Specifications */}
      {currentStep === 2 && (
        <form
          onSubmit={handleSubmit}
          className="bg-gray-50 p-0 md:p-6 rounded-lg"
        >
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
          <div className="mb-4 relative">
            {/* <label
              htmlFor="comment"
              className="block text-[#0B714C] mb-1 font-bold"
            >
              Comment
            </label> */}
            <FormLabel label="Comment" />
            <textarea
              id="comment"
              name="comment"
              value={formData.comment}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full h-40 py-2 px-3  leading-tight focus:outline-none focus:shadow-outline" /* text-[#0B714C] */
            />
          </div>
          {/* <div className="pt-4">
            <FormTextarea
              label="Comment"
              name="comment"
              placeholder="Add your comment"
              value={formData.comment}
              onChange={handleInputChange}
            />
          </div> */}
          {/* <div className="flex justify-between relative mt-12">
            <AnimatedNavLink
              label="Personal info"
              labelColor="#0B714C"
              onClick={prevStep}
            ></AnimatedNavLink>
            <div>
              <div>
                <div
                  className="absolute left-8/12 translate-x-2/3"
                  onClick={handleSubmit}
                >
                  <AnimatedButton
                    label="Submit Request"
                    labelColor="white"
                    bgColor="#0B714C"
                  ></AnimatedButton>
                </div>
              </div>
            </div>
          </div> */}

          <div className="flex flex-col md:flex-row justify-between relative mt-12 px-4 md:px-0">
            {/* First Button - AnimatedNavLink */}
            <div className="w-full md:w-auto mb-4 md:mb-0 px-8 md:px-0">
              <AnimatedNavLink
                label="Personal info"
                labelColor="#0B714C"
                onClick={prevStep}
                fullWidthOnMobile={true}
              />
            </div>

            {/* Second Button - AnimatedButton */}
            <div
              className="w-full md:w-auto md:absolute md:left-8/12 md:translate-x-2/3"
              onClick={handleSubmit}
            >
              <AnimatedButton
                label="Submit Request"
                labelColor="white"
                bgColor="#0B714C"
                fullWidthOnMobile={true}
              />
            </div>
          </div>

          {/* <div className={`flex ${isMobile ? 'flex-col' : 'flex-row justify-between'} w-full gap-6 mt-12`}>
  <div className={`${isMobile ? 'self-center mb-4' : ''}`}>
    <AnimatedNavLink
      label="Personal info"
      labelColor="#0B714C"
      onClick={prevStep}
    />
  </div>
  
  <div className={`${isMobile ? 'self-center' : ''}`}>
    <AnimatedButton
      label="Submit Request"
      labelColor="white"
      bgColor="#0B714C"
      onClick={handleSubmit}
    />
  </div>
</div> */}
        </form>
      )}

      {/* [CHANGED] Added Step 3: Success/Confirmation */}
      {currentStep === 3 && (
        <div className="bg-gray-50 p-0 md:p-6 rounded-lg text-center">
          <h2 className="text-2xl font-bold text-[#0B714C] mb-4">
            Request Submitted
          </h2>
          <p className="mb-8">
            Thank you for your submission! We will contact you shortly regarding
            your order.
          </p>
          {/* <button
            type="button"
            onClick={resetForm}
            className="px-6 py-3 bg-[#0B714C] text-white rounded-lg" 
          >
            Add another order request
          </button> */}
          <div className="flex justify-center items-center">
            <AnimatedNavLink
              label={"Add another order request"}
              labelColor="white"
              bgColor="#0B714C"
              onClick={resetForm}
            />
          </div>
        </div>
      )}
    </div>
  );
};

MultiStepForm.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string, // type is optional, defaulting to "text"
};

export default MultiStepForm;
