// import PropTypes from "prop-types";

// const CustomerRelationship = ({
//   width = "",
//   header,
//   quotee = "",
//   designation = "",
//   description,
// }) => {
//   return (
//     <div>
//       <div className={`${width} mt-14`}>
//         <h2 className="text-4xl font-bold italic">
//           &quot;
//           {header}
//           &quot;
//         </h2>
//         <div className="mt-9">
//           <h4 className="text-xl font-semibold">{quotee}</h4>
//           <p className="text-sm font-light">{designation}</p>
//         </div>
//         <p className="text-lg mt-9 font-light">{description}</p>
//       </div>
//     </div>
//   );
// };

// CustomerRelationship.propTypes = {
//   width: PropTypes.string.isRequired,
//   header: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   quotee: PropTypes.string,
//   designation: PropTypes.string,
// };

// export default CustomerRelationship;


// import PropTypes from "prop-types";

// const CustomerRelationship = ({
//   width = "",
//   header,
//   quotee = "",
//   designation = "",
//   description,
// }) => {
//   return (
//     <div className="px-4 md:px-0">
//       <div className={`${width} mt-8 md:mt-14`}>
//         <h2 className="text-3xl md:text-4xl font-bold italic">
//           &quot;
//           {header}
//           &quot;
//         </h2>
//         <div className="mt-6 md:mt-9">
//           <h4 className="text-xl font-semibold">{quotee}</h4>
//           <p className="text-sm font-light">{designation}</p>
//         </div>
//         <p className="text-base md:text-lg mt-6 md:mt-9 font-light">{description}</p>
//       </div>
//     </div>
//   );
// };

// CustomerRelationship.propTypes = {
//   width: PropTypes.string.isRequired,
//   header: PropTypes.string.isRequired,
//   description: PropTypes.string.isRequired,
//   quotee: PropTypes.string,
//   designation: PropTypes.string,
// };

// export default CustomerRelationship;


import PropTypes from "prop-types";

const CustomerRelationship = ({
  header,
  quotee = "",
  designation = "",
  description,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="mt-6 md:mt-14">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold italic">
          &quot;{header}&quot;
        </h2>
        <div className="mt-4 md:mt-9">
          <h4 className="text-lg sm:text-xl font-semibold">{quotee}</h4>
          <p className="text-xs sm:text-sm font-light">{designation}</p>
        </div>
        <p className="text-sm sm:text-base md:text-lg mt-4 md:mt-9 font-light">{description}</p>
      </div>
    </div>
  );
};

CustomerRelationship.propTypes = {
  header: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  quotee: PropTypes.string,
  designation: PropTypes.string,
};

export default CustomerRelationship;