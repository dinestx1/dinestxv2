// components/HoverButton.jsx
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const HoverButton = ({
  label = "Click Me",
  onClick,
  width = "w-36",
  height = "h-10",
  className = "",
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm ${height} ${width} ${className}`}
    >
      <div className="relative h-full w-full">
        {/* Default text */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center font-outfit font-normal whitespace-nowrap"
          initial={{ y: 0, opacity: 1 }}
          animate={{
            y: isHovered ? -20 : 0,
            opacity: isHovered ? 0 : 1,
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
          <ArrowUpRight className="w-4 ml-1" />
        </motion.span>

        {/* Hover text */}
        <motion.span
          className="absolute inset-0 flex items-center justify-center font-outfit font-normal whitespace-nowrap"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {label}
          <ArrowUpRight className="rotate-45 w-4 ml-1" />
        </motion.span>
      </div>
    </button>
  );
};

export default HoverButton;
