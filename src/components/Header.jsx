import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, User2, Settings, LogOut } from 'lucide-react';
import { BsGoogle } from 'react-icons/bs';

import {useDispatch} from "react-redux";
import { useSelector } from 'react-redux';

import { googleLogin,getData, logoutUser } from '../store/slices/authSlice';
import { CgMenuRight } from "react-icons/cg";
import { Logo } from '.';

function Header() {

  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const dispatch=useDispatch()
  const {user,isAuthenticated} = useSelector((state)=>state.auth)

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/services', label: 'Services' },
    { to: '/Career', label: 'Career' },
  ];

  const iconMap = {
    user: User2,
    settings: Settings,
    logout: LogOut,
  };

  const profileItems = [
   
    { label: 'Logout', onClick: handleLogout, icon: 'logout' },
  ];



  function handleLogout() {
dispatch(logoutUser());

  };

  // This is the corrected Google Login handler
  const handleGoogleLogin = async () => {
    try {
      
      dispatch(googleLogin());
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };


  const MobileMenu = () => (
    <AnimatePresence>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/50 c"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-indigo-700/5 backdrop-blur-lg  p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside menu
          >
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-white">Menu</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-white">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col space-y-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-lg font-medium ${isActive ? 'text-indigo-400' : 'text-gray-200'} hover:text-indigo-300 transition-colors`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="border-t border-gray-700 my-8"></div>

            {user ? (
               <div className="flex flex-col space-y-4">
                 <div className="flex items-center gap-3">
                   <img src={user.profile_picture} alt={user.name} className="w-12 h-12 rounded-full" />
                   <div>
                     <p className="font-semibold text-white">{user.name}</p>
                     <p className="text-sm text-gray-400">{user.email}</p>
                   </div>
                 </div>
                 <button
                    onClick={handleLogout}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-red-600/80 rounded-lg hover:bg-red-600 transition-colors"
                  >
                   <LogOut size={16}/>
                   Logout
                 </button>
               </div>
            ) : (
              <button
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-3 font-semibold text-white bg-indigo-600 px-4 py-3 rounded-lg z-40 hover:bg-indigo-700 transition"
              >
                <BsGoogle />
                Continue with Google
              </button>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );


  return (
    <>
      <header className="fixed inset-x-0 top-0 lg:top-6 z-40 mx-auto w-full md:w-[80%] bg-indigo-50/5 py-3 shadow backdrop-blur-lg md:rounded-3xl lg:max-w-screen-lg">
        <div className="px-4">
          <div className="flex items-center justify-between">
            <div className="flex shrink-0">
              <NavLink to="/" className="flex items-center">
    <img
  className="h-10 w-auto object-cover drop-shadow-[0_4px_8px_rgba(67,56,202,0.5)]"
  src={Logo}
  alt="Logo"
/>


               <div className="ml-3">
  <p className="font-museo text-white text-xl font-semibold">Dinestx</p>
  <p className="text-gray-50 font-poppins text-[9px] font-light -mt-1">Your Digital Nest</p>
</div>
               
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex justify-around w-[40%] max-w-4xl mx-auto">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative inline-block font-bold px-2 py-1 text-sm ${isActive ? 'text-indigo-300' : 'text-indigo-50'}`
                  }
                  onMouseEnter={() => setHoveredLink(item.to)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  <span className="relative z-10">{item.label}</span>
                   {hoveredLink === item.to && (
                     <motion.div
                       layoutId="hover-background"
                       className="absolute inset-0 bg-gray-500/20 rounded-md"
                       transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                     />
                   )}
                </NavLink>
              ))}
            </nav>

            {/* Right side: Profile/Login & Mobile Menu Button */}
            <div className="flex items-center justify-end gap-3">
              <div className="relative hidden md:inline-block">
                {user ? (
                  <div>
                    <img
                      src={user.profile_picture}
                      alt={user.name}
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      className="w-10 h-10 rounded-full cursor-pointer"
                    />
                    <AnimatePresence>
                      {isProfileOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute right-0 mt-4 w-48 p-2 bg-indigo-600 rounded-xl shadow-lg"
                        >
                          {profileItems.map((item) => {
                            const Icon = iconMap[item.icon];
                            return (
                              <NavLink
                                key={item.label}
                                to={item.to || '#'}
                                onClick={(e) => {
                                  if (item.onClick) {
                                    e.preventDefault();
                                    item.onClick();
                                  } else {
                                     setIsProfileOpen(false)
                                  }
                                }}
                                className="block px-3 py-2 text-sm font-outfit text-indigo-100 hover:bg-indigo-500 rounded-lg transition-colors"
                              >
                                <div className='flex flex-row items-center gap-2'>
                                  {Icon && <Icon className="w-4 h-4" />}
                                  {item.label}
                                </div>
                              </NavLink>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <button
                    onClick={handleGoogleLogin}
                    className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  >
                    Login
                  </button>
                )}
              </div>

              {/* Mobile Menu Button */}
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(true)} className="p-2 text-white">
                  <CgMenuRight size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
      
      {/* Render the mobile menu */}
      <MobileMenu />
    </>
  );
}

export default Header;