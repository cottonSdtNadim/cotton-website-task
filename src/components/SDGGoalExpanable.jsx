import { useState } from "react";

const SDGGoalsExpandable = () => {
  const [hoveredGoal, setHoveredGoal] = useState(null);

  const goals = [
    {
      number: 3,
      color: "#4CAF50",
      icon: "❤️",
      title: "Good Health And Well-being",
      items: [
        "Healthcare Facilities",
        "Mental Health Support",
        "Preventive Care Programs",
        "Maternal Health Initiatives",
      ],
    },
    {
      number: 5,
      color: "#FF5722",
      icon: "⚥",
      title: "Gender Equality",
      items: [
        "Equal Pay Initiatives",
        "Women Empowerment Programs",
        "Fighting Gender Discrimination",
        "Leadership Opportunities",
      ],
    },
    {
      number: 6,
      color: "#29B6F6",
      icon: "💧",
      title: "Clean Water And Sanitation",
      items: [
        "Sanitation and Worker Safety Measures During COVID-19",
        "Rainwater Harvesting",
        "Clean Drinking Water",
        "24/7 Effluent Treatment Plant (ETP)",
      ],
    },
    {
      number: 8,
      color: "#8E24AA",
      icon: "📈",
      title: "Decent Work And Economic Growth",
      items: [
        "Fair Wages",
        "Safe Working Conditions",
        "Economic Opportunity",
        "Skills Development",
      ],
    },
    {
      number: 9,
      color: "#FF7043",
      icon: "📚",
      title: "Industry, Innovation And Infrastructure",
      items: [
        "Sustainable Factories",
        "Technological Innovation",
        "Inclusive Infrastructure",
        "Research & Development",
      ],
    },
    {
      number: 12,
      color: "#C0A060",
      icon: "♾️",
      title: "Responsible Consumption",
      items: [
        "Waste Reduction",
        "Sustainable Sourcing",
        "Circular Economy",
        "Ethical Production",
      ],
    },
    {
      number: 13,
      color: "#558B2F",
      icon: "🍃",
      title: "Climate Action",
      items: [
        "Carbon Footprint Reduction",
        "Renewable Energy",
        "Climate Resilience",
        "Environmental Education",
      ],
    },
  ];

  return (
    <div className="flex w-full h-screen overflow-hidden px-28">
      {goals.map((goal, index) => (
        <div
          key={goal.number}
          className="relative h-full transition-all duration-300 ease-in-out"
          style={{
            backgroundColor: goal.color,
            flex: hoveredGoal === index ? "5" : "1",
            overflow: "hidden",
          }}
          onMouseEnter={() => setHoveredGoal(index)}
          onMouseLeave={() => setHoveredGoal(null)}
        >
          {/* Left side with icon and number */}
          <div className="flex flex-col items-center justify-center h-full py-8 px-4 absolute">
            <div className="text-white text-4xl mb-6">{goal.icon}</div>
            <div className="text-white text-8xl font-bold">{goal.number}</div>
          </div>

          {/* Right side with content (only visible on hover) */}
          <div
            className={`absolute top-0 left-0 right-0 bottom-0 transition-opacity duration-300 w-[511px] h-[700px] ${
                hoveredGoal === index
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            style={{
              display: "flex",
              padding: "2rem",
              background: "white",
              marginLeft: "115px", // Width of the colored bar
            }}
          >
            <div className="flex flex-col">
              <h2
                className="text-4xl font-bold mb-8"
                style={{ color: goal.color }}
              >
                {goal.title}
              </h2>
              <ul className="space-y-4">
                {goal.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <div className="mr-2 mt-1" style={{ color: goal.color }}>
                      •
                    </div>
                    <div className="text-xl text-gray-800">{item}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SDGGoalsExpandable;
