import factoryOutside from "../../assets/images/factory-outside.jpg";
import AnimatedButton from "../../components/AnimatedButton";
import AnimatedLink from "../../components/AnimatedLink";
import { content } from "../../content/content";

export default function Footer() {
  const {firstHeader, secondHeader,  contactUsButton, copyRightText , privacyPolicyLink} = content.en.footer;

  return (
    <footer className="relative w-full">
      <div
        className="w-full h-[400px] bg-cover bg-center relative"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(2, 17, 11, 0.85) 0%, rgba(2, 17, 11, 0.85) 100%), url(${factoryOutside})`,
        }}
      >
        {/* Container of the two nested container */}
        <div className="max-w-7xl mx-auto h-full flex flex-col justify-between px-4 md:px-6 lg:px-8">
          {/* Heading and Button Container */}
          <div className="pt-14 flex flex-col md:flex-row items-center justify-center gap-8 pr-28">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left max-w-[686px] mr-36">
               {/*  Ready to talk further? <br />
                Let&apos;s see how we can create value, together. */}
                {firstHeader} <br />
                {secondHeader}
              </h2>
            </div>
            {/*  <div className="border-2 border-red-500">
              <AnimatedButton
                label="Contact Us"
                labelColor="white"
                bgColor="#0B714C"
              />
            </div> */}
            <div className="">
              <div className="absolute top-22">
                <AnimatedButton
                  /* label="Contact Us"
                  labelColor="white"
                  bgColor="#0B714C" */
                  label={contactUsButton.label}
                  labelColor={contactUsButton.labelColor}
                  bgColor={contactUsButton.bgColor}
                />
              </div>
            </div>
            {/*  <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left max-w-[686px] mr-36 border-2 border-green-500">
              Ready to talk further? <br />
              Let&apos;s see how we can create value, together.
            </h2>
            <AnimatedButton
              label="Contact Us"
              labelColor="white"
              bgColor="#0B714C"
            /> */}
          </div>

          {/* Copyright and Privacy Policy Container */}
          <div className="pb-10 flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-28">
            <p className="text-[#F8FBFA] font-medium text-center">
              {/* Copyright © {new Date().getFullYear()} Cotton Group. All rights
              reserved. */}
              {copyRightText}
            </p>
            <AnimatedLink 
            // content="Privacy Policy" 
            content={privacyPolicyLink.label}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

// import factoryOutside from "../../assets/images/factory-outside.jpg";
// import AnimatedButton from "../../components/AnimatedButton";
// import AnimatedLink from "../../components/AnimatedLink";

// const Footer = () => (
//   <footer className="relative w-full">
//     <div
//       className="w-full h-[400px] bg-cover bg-center relative"
//       style={{
//         backgroundImage: `linear-gradient(0deg, rgba(2, 17, 11, 0.85) 0%, rgba(2, 17, 11, 0.85) 100%), url(${factoryOutside})`,
//       }}
//     >
//       <div className="max-w-7xl mx-auto h-full flex flex-col justify-between px-4 md:px-6">
//         {/* Heading and Button Container */}
//         <div className="pt-14 flex px-[120px]"> {/* flex-col md:flex-row items-center justify-center gap-8 */} {/* px-[100px] */}
//           <h2 className="text-2xl md:text-3xl font-bold text-white text-center md:text-left max-w-[686px] mr-36">
//             Ready to talk further? <br />
//             Let&apos;s see how we can create value,
//             together.
//           </h2>
//           <AnimatedButton
//             label="Contact Us"
//             labelColor="white"
//             bgColor="#0B714C"
//           />
//         </div>

//         {/* Copyright and Privacy Policy Container */}
//         <div className="pb-10 flex items-center justify-between px-34"> {/* flex flex-col md:flex-row items-center justify-between gap-4 px-4 md:px-6 lg:px-28 */}
//           <p className="text-[#F8FBFA] font-medium text-center">
//             Copyright © {new Date().getFullYear()} Cotton Group. All rights
//             reserved.
//           </p>
//           <AnimatedLink content="Privacy Policy" />
//         </div>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;
