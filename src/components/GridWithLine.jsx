const GridWithLines = () => {
  const numOfLines = 12;
  const lines = Array.from({ length: numOfLines }, (_, index) => index)

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {lines.map((line, index) => (
        <div
          key={index}
          className="absolute top-0 bottom-0 w-[1px] bg-gray-200"
          style={{
            left: `${(index + 1) * 116 - 1}px`,
          }}
        />
      ))}
    </div>
  )
}

export default GridWithLines




