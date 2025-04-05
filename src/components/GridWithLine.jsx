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




import { useEffect, useState } from "react";

const GridWithLines = () => {
  const numOfLines = 12;
  const [linePositions, setLinePositions] = useState([]);

  useEffect(() => {
    const calculateLinePositions = () => {
      const screenWidth = window.innerWidth;
      const spacing = screenWidth / (numOfLines + 1); // +1 to leave equal gap on both ends

      const positions = Array.from({ length: numOfLines }, (_, index) => {
        return (index + 1) * spacing;
      });

      setLinePositions(positions);
    };

    calculateLinePositions();
    window.addEventListener("resize", calculateLinePositions);

    return () => window.removeEventListener("resize", calculateLinePositions);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {linePositions.map((left, index) => (
        <div
          key={index}
          className="absolute top-0 bottom-0 w-[0.5px] bg-gray-200"
          style={{ left: `${left}px` }}
        />
      ))}
    </div>
  );
};

export default GridWithLines;
