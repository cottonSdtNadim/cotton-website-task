// import { useState } from "react";
// import AnimatedButton from "./AnimatedButton";
// import AnimatedNavButton from "./AnimatedNavButton";

// const MultiStepContactForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     company: "",
//     subject: "",
//     message: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Here you would typically send the form data to your backend
//     // For now, we'll just move to the confirmation step
//     setCurrentStep(2);
//   };

//   const resetForm = () => {
//     setFormData({
//       name: "",
//       email: "",
//       phone: "",
//       company: "",
//       subject: "",
//       message: "",
//     });
//     setCurrentStep(1);
//   };

//   return (
//     <div 
//     // className="rounded-2xl bg-[#b8d8cf] p-10 relative w-[710px] h-[686px]"
//     className="rounded-2xl bg-[#b8d8cf] p-4 sm:p-6 md:p-8 lg:p-10 relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto"
//     >
//       {currentStep === 1 ? (
//         <div>
//           <h2 className="text-3xl font-medium text-[#0B714C] mb-8">
//             Get in touch
//           </h2>
//           <form onSubmit={handleSubmit} className="space-y-4">
//             <div>
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleInputChange}
//                 placeholder="Your name"
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
//                 required
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleInputChange}
//                 placeholder="Your email"
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
//                 required
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 value={formData.phone}
//                 onChange={handleInputChange}
//                 placeholder="Your phone number"
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
//               />
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <input
//                 type="text"
//                 name="company"
//                 value={formData.company}
//                 onChange={handleInputChange}
//                 placeholder="Your company"
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
//               />

//               <input
//                 type="text"
//                 name="subject"
//                 value={formData.subject}
//                 onChange={handleInputChange}
//                 placeholder="Subject"
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
//                 required
//               />
//             </div>

//             <div>
//               <textarea
//                 name="message"
//                 value={formData.message}
//                 onChange={handleInputChange}
//                 placeholder="Message"
//                 rows={8}
//                 className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C] resize-none"
//                 required
//               />
//             </div>

//             <div className="mb-12">
//               <div>
//                 <div className="absolute left-7/12 transform translate-x-1/6">
//                   <AnimatedButton
//                     label="Submit message"
//                     labelColor="White"
//                     bgColor="#0B714C"
//                   ></AnimatedButton>
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       ) : (
//         <div className="flex flex-col items-center justify-center py-20">
//           <h2 className="text-3xl font-medium text-[#0B714C] mb-4">
//             Request Submitted
//           </h2>
//           <p className="text-center mb-8 max-w-md">
//             Thank you for your submission! We will contact you shortly regarding
//             your query.
//           </p>
//           {/* <button
//             onClick={resetForm}
//             className="bg-[#0B714C] hover:bg-[#095a3d] text-white font-medium px-6 py-2 rounded-lg"
//           >
//             Add another request
//           </button> */}
//           <AnimatedNavButton
//           label="Add another request"
//           labelColor={"White"}
//           bgColor="#0B714C"
//           onClick={resetForm}
//           ></AnimatedNavButton>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MultiStepContactForm;


import { useState, useEffect } from "react";
import AnimatedButton from "./AnimatedButton";
import AnimatedNavButton from "./AnimatedNavButton";

const MultiStepContactForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    subject: "",
    message: "",
  });

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Check on initial load
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Clean up
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    // For now, we'll just move to the confirmation step
    setCurrentStep(2);
  };

  const resetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      subject: "",
      message: "",
    });
    setCurrentStep(1);
  };

  return (
    <div 
      className={`rounded-2xl ${isMobile ? 'bg-[#B2D4C9]' : 'bg-[#b8d8cf]'} p-4 sm:p-6 md:p-8 lg:p-10 relative w-full max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mx-auto`}
    >
      {currentStep === 1 ? (
        <div>
          <h2 className={`${isMobile ? 'text-2xl text-center text-[#0B714C]' : 'text-3xl text-[#0B714C]'} font-medium mb-8`}>
            Get in touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                required
              />
            </div>

            {isMobile ? (
              // Mobile view - stack all inputs
              <>
                <div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                    required
                  />
                </div>
              </>
            ) : (
              // Desktop view with grid layout
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your email"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your company"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Subject"
                    className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C]"
                    required
                  />
                </div>
              </>
            )}

            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Message"
                rows={isMobile ? 5 : 8}
                className="w-full px-4 py-3 rounded-lg bg-white border-none focus:outline-none focus:ring-2 focus:ring-[#0B714C] resize-none"
                required
              />
            </div>

            {isMobile ? (
              // Mobile view - full width button centered
              <div className="pt-2 pb-4">
                <button
                  type="submit"
                  className="w-full bg-[#0B714C] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#095a3d] transition-colors duration-300"
                >
                  Submit message
                </button>
              </div>
            ) : (
              // Desktop view - original animated button positioning
              <div className="mb-12">
                <div>
                  <div className="absolute left-7/12 transform translate-x-1/6">
                    <AnimatedButton
                      label="Submit message"
                      labelColor="White"
                      bgColor="#0B714C"
                    />
                  </div>
                </div>
              </div>
            )}
          </form>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-3xl font-medium text-[#0B714C] mb-4">
            Request Submitted
          </h2>
          <p className="text-center mb-8 max-w-md">
            Thank you for your submission! We will contact you shortly regarding
            your query.
          </p>
          {isMobile ? (
            <button
              onClick={resetForm}
              className="w-full bg-[#0B714C] text-white font-medium py-3 px-6 rounded-lg hover:bg-[#095a3d] transition-colors duration-300"
            >
              Add another request
            </button>
          ) : (
            <AnimatedNavButton
              label="Add another request"
              labelColor="White"
              bgColor="#0B714C"
              onClick={resetForm}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MultiStepContactForm;