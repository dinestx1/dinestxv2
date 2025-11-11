import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { Logo } from ".";
import { ArrowUpRight} from "lucide-react";
import { Link } from 'react-router-dom';


function Floating() {

 

  const getNext7Days = () => {
    const days = [];
    const options = { weekday: 'short' }; // Mon, Tue...

    for (let i = 0; i < 30; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);

      // Get day of week (0 = Sunday, 6 = Saturday)
      const dayOfWeek = date.getDay();

      // Skip Saturday (6) and Sunday (0)
      if (dayOfWeek === 0 || dayOfWeek === 6) {
        continue;
      }

      days.push({
        name: date.toLocaleDateString('en-US', options), // Mon, Tue, etc.
        fullDate: date.toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
        dateNumber: date.getDate(),
        fullDateObject: date,
      });
    }

    return days;
  };



  const [isVisible, setIsVisible] = useState(false);
  // const [isHovered, setIsHovered] = useState(false);
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedCategoryType, setSelectedCategoryType] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [days, setDays] = useState([]);
  const [selectedTime, setSelectedTime] = useState(null);

 
  useEffect(() => {
    const next7 = getNext7Days();
    setDays(next7);
    // setSelectedCategory(next7[0].name); // Default selected
  }, []);






  const closeModal = () => setIsVisible(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isHovering = false;
    let animationFrameId;

    const scroll = () => {
      if (!isHovering) return;
      const { left, right } = scrollContainer.getBoundingClientRect();
      const mouseX = window.mouseX || 0;

      // Define hover areas: left 25% and right 25% of the container
      const leftThreshold = left + scrollContainer.offsetWidth * 0.25;
      const rightThreshold = right - scrollContainer.offsetWidth * 0.25;

      if (mouseX < leftThreshold) {
        // Scroll left
        scrollContainer.scrollLeft -= 3; // Increased speed for better responsiveness
      } else if (mouseX > rightThreshold) {
        // Scroll right
        scrollContainer.scrollLeft += 3;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseMove = (e) => {
      window.mouseX = e.clientX; // Store mouse X position
    };

    const handleMouseEnter = () => {
      isHovering = true;
      animationFrameId = requestAnimationFrame(scroll);
    };

    const handleMouseLeave = () => {
      isHovering = false;
      cancelAnimationFrame(animationFrameId);
    };

    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
      scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);







  return (
    <>
    <div className="fixed z-10 bottom-8 right-5 lg:bottom-10 lg:right-10 p-1 flex flex-col items-end justify-end">
  {/* Video added above the button */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-[112px] lg:w-32 md:w-32 rounded-lg"
  >
    <source src="fox1.webm" type="video/webm" />
  </video>

  {/* Existing Button */}
  <Link to="/contact-us">
  <button
    onMouseEnter={() => setIsHovered1(true)}
    onMouseLeave={() => setIsHovered1(false)}
    className="relative overflow-hidden rounded-lg bg-blue-700 py-2 text-[12px] font-semibold text-white shadow-sm h-10 w-[112px] lg:w-32 md:w-32"
  >
    <div className="relative h-full w-full">
      {/* First Text (Default) */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center font-outfit font-normal whitespace-nowrap"
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: isHovered1 ? -20 : 0,
          opacity: isHovered1 ? 0 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        Build Your Own
        <ArrowUpRight className="w-[14px] ml-1" />
      </motion.span>

      {/* Second Text (Hover) */}
      <motion.span
        className="absolute inset-0 flex items-center justify-center font-outfit font-normal whitespace-nowrap"
        initial={{ y: 20, opacity: 0 }}
        animate={{
          y: isHovered1 ? 0 : 20,
          opacity: isHovered1 ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        Build Your Own
        <ArrowUpRight className="rotate-45 w-[14px] ml-1" />
      </motion.span>
    </div>
  </button>
  </Link>
</div>


    
    </>
  );
}

export default Floating;
