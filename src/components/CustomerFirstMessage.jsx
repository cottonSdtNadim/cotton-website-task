// import chairmanSirImage from "../assets/images/chairman-sir.png";
// import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";

// const CustomerFirstMessage = () => {
//   return (
//     <div className="flex items-center">
//       <img src={leftGreenLeaf} alt="Left Green Leaf" />
//       {/* Container of Text and Image */}
//       <div className="flex">
//         {/* Text Container */}
//         <div>
//           <h2 className="text-4xl font-bold italic">
//             “Make a customer, build a relationship, not a sale.”
//           </h2>
//           <p className="text-lg mt-9">
//             At Cotton Group, we believe in partnership. Every single customer
//             and employee, who we believe to be our partners, have empowered us
//             to produce a better quality of products and solutions. We like to
//             work closely with our partners to meet their expectations and share
//             the best outcome of our service. We have proudly served the
//             following partners since our inception:
//           </p>
//         </div>

//         <img src={chairmanSirImage} alt="Chairman Sir" className="rounded-xl"/>
//         <p className="text-black text-lg font-semibold">
//           Shaheen Mahmud <br />
//         </p>
//       </div>
//     </div>
//   );
// };

// export default CustomerFirstMessage;

import chairmanSirImage from "../assets/images/chairman-sir.png";
import leftGreenLeaf from "../assets/images/left-green-leaf-vector_2.png";

const CustomerFirstMessage = () => {
  return (
    <div className="flex items-center">
      <img
        src={leftGreenLeaf}
        alt="Left Green Leaf"
        className="mr-6 w-[180px] h-[439px]"
      />
      {/* Container of Text and Image */}
      <div className="flex">
        {/* Text Container */}
        <div className="w-[639px] mt-14">
          <h2 className="text-4xl font-bold italic">
            &quot;Make a customer, build a relationship, not a sale.&quot;
          </h2>
          <p className="text-lg mt-9">
            At Cotton Group, we believe in partnership. Every single customer
            and employee, who we believe to be our partners, have empowered us
            to produce a better quality of products and solutions. We like to
            work closely with our partners to meet their expectations and share
            the best outcome of our service. We have proudly served the
            following partners since our inception:
          </p>
        </div>

        {/* Image Container with Overlay Text */}
        <div className="relative">
          <img
            src={chairmanSirImage}
            alt="Chairman Sir"
            className="ml-[54px]"
          />
          <div className="absolute bottom-0 left-0 right-0 text-white bg-opacity-50 text-center px-2 py-6">
            <p className="text-lg font-semibold">Shaheen Mahmud</p>
            <p className="text-sm">Founder and Chairman</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerFirstMessage; 
