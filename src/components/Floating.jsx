import { useEffect, useState, useRef } from "react";
import { MdContacts, MdOutlineEmail, MdCall } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";
import { motion } from "framer-motion";
import Logo from "../assets/Logo.webp";
import { ArrowUpRight, CalendarDays, ChevronsDownUp, Instagram, Linkedin } from "lucide-react";
import { Link } from 'react-router-dom';
import { RiWhatsappFill } from "react-icons/ri";
import { submitAppointment } from "../store/slices/authSlice";
import { useToast } from "../context/toastContext";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Floating() {

  const categoryTypes = [
    { name: "Inquiry" },
    { name: "Career" },
  ];

  const inqueryCat = [
    { name: "Web/App Development", },
    { name: "UI/UX" },
    { name: "Video/Graphics", },
    { name: "Logo Design", },
    { name: "Marketing", },
    { name: "Social Media Manager", },
    { name: "Advertisement", },
  ];

  const careerCat = [
    { name: "Web/App Development", },
    { name: "UI/UX" },
    { name: "Graphics", },
    { name: "Backend Dev", },
    { name: "Marketing", },
    { name: "Ad Manager", },
  ];

  const socialMedia = [
    { name: "Instagram", icon: <Instagram className="text-white w-5 h-5" />, link: "https://www.instagram.com/di.nestx" },
    // { name: "WhatsApp", icon: <RiWhatsappLine className="text-white w-5 h-5" />, link: "https://wa.me/+918409031739" },
    { name: "Email", icon: <MdOutlineEmail className="text-white w-5 h-5" />, link: "mailto:dinestx@gmail.com" },
    { name: "Linkedin", icon: <Linkedin className="text-white w-5 h-5" />, link: "tel:+918409031739" },
  ];


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

  const dispatch=useDispatch()

const {loading,error}=useSelector((state)=>state.auth)

  const {showToast} = useToast();
  useEffect(() => {
    const next7 = getNext7Days();
    setDays(next7);
    // setSelectedCategory(next7[0].name); // Default selected
  }, []);


  const handleClick = () => setIsVisible(true);

  const handleRedirect = () => {
    window.open("https://wa.me/918409031739?text=Hello%2C%20I%20would%20like%20to%20know%20the%20development%20cost%20for%20your%20services.", "_blank");
  };



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





const handleBooking = async () => {
  if (!selectedCategoryType || !selectedCategory || !selectedDate || !selectedTime) {
    showToast("Please select category, date and time before booking.", "error");
    return;
  }

  try {
 

  const response=await dispatch(
    submitAppointment({
      categoryType: selectedCategoryType,
      category: selectedCategory,
      date: selectedDate,
      time: selectedTime,
    })
  ).unwrap();
 
    if (response.status===201) {
       showToast(response.message, "success");
    setIsVisible(true)
      
    }

   
  } catch (err) {

     showToast(err.message, "error");
  } 
};

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
  <button
    onMouseEnter={() => setIsHovered1(true)}
    onMouseLeave={() => setIsHovered1(false)}
    onClick={handleClick}
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
</div>


      {/* Modal (unchanged) */}
      {isVisible && (
        <div className="fixed inset-0 z-20 bg-black bg-opacity-85 flex justify-center items-center select-none p-4">
          <div className="p-6 w-full max-w-4xl border border-white/10 bg-white/5 backdrop-blur-sm rounded-2xl shadow-lg relative max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="flex justify-between items-center pb-1 lg:pb-5 md:pb-4 border-white/10">
              <div className="flex items-center gap-3">
                <img src={Logo} className="w-8 md:w-12 lg:hidden" alt="Logo" />
                <p className="font-outfit lg:text-2xl text-[18px] text-white font-medium">
                  Book Your Appointment
                </p>
              </div>
              <button onClick={closeModal} className="text-white hover:text-gray-300">
                ✕
              </button>
            </div>

            {/* Main Content */}
            <div className="flex flex-col lg:flex-row gap-8 mt-6">
              {/* Left Section - Form */}
              <div className="flex-1 space-y-8">
                {/* Category Section */}
                <div className="space-y-4">
                  <h3 className="text-white font-outfit text-xl">Choose Category</h3>

                  {/* Category Types */}
                  <div className="overflow-x-auto pb-2 scrollbar-hide">
                    <div className="flex gap-3 w-max">
                      {categoryTypes.map((type, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1 }}
                          className={`px-4 py-2 rounded-full cursor-pointer transition-colors ${selectedCategoryType === type.name
                            ? "bg-blue-600 text-white"
                            : "bg-white/10 text-white/75 hover:bg-white/20"
                            }`}
                          onClick={() => setSelectedCategoryType(type.name)}
                        >
                          <span className="font-outfit text-sm">{type.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Service Selection */}
                  {selectedCategoryType && (
                    <div className="space-y-4">
                      <h4 className="text-white/80 font-outfit text-lg">
                        {selectedCategoryType === "Inquiry" ? "Service" : "Career"}
                      </h4>
                      <div className="overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide">
                        <div
                          className="flex gap-3 w-max max-w-[600px]"
                          onWheel={(e) => {
                            const container = e.currentTarget;
                            const scrollAmount = e.deltaY * 2;
                            container.scrollLeft += scrollAmount;
                          }}
                          style={{
                            overflowX: 'hidden',
                            overflowY: 'hidden',
                            scrollBehavior: 'smooth',
                            cursor: 'grab',
                          }}
                          onMouseDown={(e) => {
                            e.currentTarget.style.cursor = 'grabbing';
                          }}
                          onMouseUp={(e) => {
                            e.currentTarget.style.cursor = 'grab';
                          }}
                        >
                          {(selectedCategoryType === "Inquiry" ? inqueryCat : careerCat).map(
                            (cat, index) => (
                              <motion.div
                                key={index}
                                whileHover={{ scale: 1 }}
                                className={`px-4 py-2 rounded-full cursor-pointer transition-colors flex-shrink-0 ${selectedCategory === cat.name
                                  ? "bg-blue-600 text-white"
                                  : "bg-white/10 text-white/65 hover:bg-white/20"
                                  }`}
                                onClick={() => setSelectedCategory(cat.name)}
                              >
                                <span className="font-outfit text-sm whitespace-nowrap">
                                  {cat.name}
                                </span>
                              </motion.div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* Calendar Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-outfit text-xl">Choose Date</h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <CalendarDays className="w-5 h-5" />
                      <span className="font-outfit text-sm">
                        {selectedDate?.toLocaleDateString() || "Select date"}
                      </span>
                    </div>
                  </div>

                  <div className="overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide">
                    <div className="flex gap-3 w-max lg:max-w-[600px]" onWheel={(e) => {
                      const container = e.currentTarget;
                      const scrollAmount = e.deltaY * 2;
                      container.scrollLeft += scrollAmount;
                    }}
                      style={{
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        scrollBehavior: 'smooth',
                        cursor: 'grab',
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.cursor = 'grabbing';
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.cursor = 'grab';
                      }}>
                      {days.map((day, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1 }}
                          className={`p-3 rounded-xl cursor-pointer transition-colors flex flex-col items-center min-w-[70px] ${selectedDate?.getDate() === day.dateNumber
                            ? "bg-blue-600 text-white"
                            : "bg-white/10 hover:bg-white/20"
                            }`}
                          onClick={() => setSelectedDate(day.fullDateObject)}
                        >
                          <span className="font-outfit text-sm text-white/60">
                            {day.name}
                          </span>
                          <span className="font-outfit text-white font-medium text-lg">
                            {day.dateNumber}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>


                {/* Calendar Section */}
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-white font-outfit text-xl">Choose Time</h3>
                    <div className="flex items-center gap-2 text-white/60">
                      <CalendarDays className="w-5 h-5" />
                      <span className="font-outfit text-sm">
                        {selectedTime || "Select time"}
                      </span>
                    </div>
                  </div>


                  <div className="overflow-x-auto overflow-y-hidden pb-2 scrollbar-hide">
                    <div
                      className="flex gap-3 w-max lg:max-w-[600px]"
                      onWheel={(e) => {
                        const container = e.currentTarget;
                        const scrollAmount = e.deltaY * 2;
                        container.scrollLeft += scrollAmount;
                      }}
                      style={{
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                        scrollBehavior: 'smooth',
                        cursor: 'grab',
                      }}
                      onMouseDown={(e) => {
                        e.currentTarget.style.cursor = 'grabbing';
                      }}
                      onMouseUp={(e) => {
                        e.currentTarget.style.cursor = 'grab';
                      }}
                    >
                      {Array.from({ length: 15 }, (_, i) => {
                        const hours = 10 + Math.floor(i * 0.5);
                        const minutes = (i % 2) * 30;
                        const period = hours >= 12 ? 'PM' : 'AM';
                        const displayHours = hours > 12 ? hours - 12 : hours;
                        const timeString = `${displayHours}:${minutes.toString().padStart(2, '0')} ${period}`;

                        return (
                          <motion.div
                            key={i}
                            whileHover={{ scale: 1 }}
                            className={`p-3 rounded-xl cursor-pointer transition-colors flex flex-col items-center min-w-[70px] ${selectedTime === timeString
                              ? "bg-blue-600 text-white"
                              : "bg-white/10 hover:bg-white/20"
                              }`}
                            onClick={() => setSelectedTime(timeString)}
                          >
                            <span className="font-outfit text-sm italic text-white/60">
                              {minutes === 0 ? `${minutes}′ ${period}` : `${minutes}′ ${period}`}
                            </span>
                            <span className="font-outfit text-white font-medium text-lg">
                              {displayHours}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </div>


                {/* Seltected Date and Time for Appointment */}
                <div className="flex flex-row pl-[18px] border-x-[1px] border-y-[1px] rounded-xl border-white/10 justify-between items-center">
                  <div className="flex items-center gap-2 text-white/60">
                    <CalendarDays className="w-5 h-5" />
                    <span className="font-outfit text-sm">
                      <span className={selectedDate ? "font-semibold text-white" : "text-white/60"}>
                        {selectedDate?.toLocaleDateString() || "Select date"}
                      </span>{" "}
                      <span className={selectedTime ? "font-normal text-white" : "text-white/60"}>
                        {selectedTime}
                      </span>
                    </span>
                  </div>

                  {/* Book Button */}
                 <motion.button
  whileHover={{ scale: 1 }}
  disabled={loading}
  onClick={handleBooking}
  className={`bg-blue-600 text-white font-outfit font-medium text-sm px-[18px] py-[14px] rounded-xl ${
    loading ? "opacity-50 cursor-not-allowed" : ""
  }`}
>
  {loading ? "Booking..." : "Book Now"}
</motion.button>

                </div>


              </div>

              {/* Right Section - Logo & Social (Desktop) */}
              <div className="hidden lg:flex flex-col items-center w-[300px] bg-black bg-opacity-5 sticky top-0">
                <img src={Logo} className="w-32 mb-6 sticky top-4" alt="Logo" />
                <div className="space-y-4 w-full">
                  {socialMedia.map((item, index) => (
                    <motion.a
                      key={index}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-blue-600">
                        {item.icon}
                      </div>
                      <span className="font-outfit text-white">{item.name}</span>
                    </motion.a>
                  ))}

                </div>

   <div className="flex flex-col m-4 items-center gap-3">
  {/* WhatsApp Button 1 */}
  <a
    href="https://wa.me/918409031739"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm text-white shadow-sm h-10 w-40 transition-transform hover:scale-105"
  >
    <RiWhatsappFill className="w-5 h-5" />
    <span>WhatsApp</span>
  </a>

  {/* WhatsApp Button 2 */}
  <a
    href="https://wa.me/917370845528"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm  text-white shadow-sm h-10 w-40 transition-transform hover:scale-105"
  >
    <RiWhatsappFill className="w-5 h-5" />
    <span>WhatsApp 2</span>
  </a>
</div>
              </div>
            </div>

            {/* Mobile Social Section */}
            <div className="lg:hidden mt-8 pt-6 border-white/10">
              <div className="flex flex-col items-center space-y-4">
                <div
                  onMouseEnter={() => setIsHovered2(true)}
                  onMouseLeave={() => setIsHovered2(false)}
                  onClick={handleRedirect}
                  className="relative overflow-hidden rounded-lg bg-blue-700 px-4 py-2 text-sm font-semibold text-white shadow-sm h-10 w-32"
                >
                  <div className="relative h-full w-full">
                    {/* First Text (Default) */}
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center font-outfit font-normal"
                      initial={{ y: 0, opacity: 1 }}
                      animate={{
                        y: isHovered2 ? -20 : 0,
                        opacity: isHovered2 ? 0 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      Lets Chat
                      <ArrowUpRight className="w-4 ml-1"></ArrowUpRight>
                    </motion.span>
                    {/* Second Text (Hover) */}
                    <motion.span
                      className="absolute inset-0 flex items-center justify-center font-outfit font-normal"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: isHovered2 ? 0 : 20,
                        opacity: isHovered2 ? 1 : 0,
                      }}
                      transition={{ duration2: 0.3 }}
                    >
                      Lets Chat
                      <ArrowUpRight className="rotate-45 w-4 ml-1"></ArrowUpRight>
                    </motion.span>
                  </div>
                </div>
                <div>
                  <p className="text-white font-outfit text-[14px]">It's Free</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      )}
    </>
  );
}

export default Floating;
