// const GridWithLines = () => {
//   const numOfLines = 12;
//   const lines = Array.from({ length: numOfLines }, (_, index) => index)

//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none">
//       {lines.map((line, index) => (
//         <div
//           key={index}
//           className="absolute top-0 bottom-0 w-[1px] bg-gray-200"
//           style={{
//             left: `${(index + 1) * 116 - 1}px`,
//           }}
//         />
//       ))}
//     </div>
//   )
// }

// export default GridWithLines

// import { useEffect, useState } from "react";

// const GridWithLines = () => {
//   const [numOfLines, setNumOfLines] = useState(12);
//   const [spacing, setSpacing] = useState(116);

//   useEffect(() => {
//     const updateGridSettings = () => {
//       if (window.innerWidth >= 1536) {
//         // 2xl screen
//         setSpacing(140);
//         setNumOfLines(14); // 12 + 2
//       } else {
//         setSpacing(116);
//         setNumOfLines(12);
//       }
//     };

//     updateGridSettings(); // Initialize on mount
//     window.addEventListener("resize", updateGridSettings);

//     return () => window.removeEventListener("resize", updateGridSettings);
//   }, []);

//   const lines = Array.from({ length: numOfLines }, (_, index) => index);

//   return (
//     <div className="fixed inset-0 -z-10 pointer-events-none">
//       {lines.map((_, index) => (
//         <div
//           key={index}
//           className="absolute top-0 bottom-0 w-[1px] bg-gray-200"
//           style={{
//             left: `${(index + 1) * spacing - 1}px`,
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default GridWithLines;

import { useEffect, useState } from "react";

const GridWithLines = () => {
  const [numOfLines, setNumOfLines] = useState(12);
  const [spacing, setSpacing] = useState(116);

  useEffect(() => {
    const updateGridSettings = () => {
      if (window.innerWidth >= 1536) {
        // 2xl screen
        setSpacing(140);
        setNumOfLines(14); // 12 + 2
      } else if (window.innerWidth >= 640) {
        // Larger than mobile but smaller than 2xl
        setSpacing(116);
        setNumOfLines(12);
      } else {
        // Mobile screen
        setSpacing(40); // Adjust spacing for mobile
        setNumOfLines(9); // 9 lines for mobile
      }
    };

    updateGridSettings(); // Initialize on mount
    window.addEventListener("resize", updateGridSettings);

    return () => window.removeEventListener("resize", updateGridSettings);
  }, []);

  const lines = Array.from({ length: numOfLines }, (_, index) => index);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {lines.map((_, index) => (
        <div
          key={index}
          className="absolute top-0 bottom-0 w-[1px] bg-gray-200"
          style={{
            left: `${(index + 1) * spacing - 1}px`,
          }}
        />
      ))}
    </div>
  );
};

export default GridWithLines;
