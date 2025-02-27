import "../styles/verticalLine.css"; // Import your CSS file

const GridWithLines = () => {
  const numOfLines = 11;

  // Generate column lines
  const lines = Array.from({ length: numOfLines }, (_, index) => index);

  return (
    <div className="grid-container">
      {lines.map((line, index) => (
        <div
          key={index}
          className="grid-line"
          style={{
            left: `${(index + 1) * 100 - 1}px`, // Adjust for the 1px line width
          }}
        />
      ))}
    </div>
  );
};

export default GridWithLines;
