import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'; 
import { googleLogin, registerEvent } from '../store/slices/authSlice'; 

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); 
  
  const { loading, user } = useSelector((state) => state.auth);

  // Local state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: user ? user.email : '',
    whatsappNumber: '', // Fixed capitalization to match standard camelCase if needed
    brandName: '',
    position: '',
    professionalEmail: '', 
    officeLocation: '',    
  });

  // State for Login Modal (Auth restriction)
  const [showLoginModal, setShowLoginModal] = useState(false);
  
  // NEW: State for API Response Modal (Success/Error)
  const [responseModal, setResponseModal] = useState({
    isOpen: false,
    type: 'success', // 'success' or 'error'
    message: ''
  });

  // 1. CHECK LOGIN STATUS
  useEffect(() => {
    if (user) {
      setShowLoginModal(false); 
    } else {
      setShowLoginModal(true);
    }
  }, [user]); 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  // Helper to close response modal
  const closeResponseModal = () => {
    setResponseModal(prev => ({ ...prev, isOpen: false }));
    // Optional: If success, maybe navigate away or clear form?
    if (responseModal.type === 'success') {
       // navigate('/founders-meetup'); // Uncomment if you want to redirect after closing success modal
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
        setShowLoginModal(true);
        return; 
    }

    try {
        
        
        const result = await dispatch(registerEvent(formData)).unwrap();
        console.log("Result from registerEvent dispatch:", result);
      
        if (result.status === 200) {
        
            setResponseModal({
                isOpen: true,
                type: 'success',
                message: result?.message || 'Registration successful'// Message from backend
            });

            // Clear form
            setFormData({
                name: "",
                email: "",
                whatsappNumber: "",
                brandName: "",
                position: "", 
                professionalEmail: "",
                officeLocation: "",
            });
        }
    } catch (err) {
      
        setResponseModal({
            isOpen: true,
            type: 'error',
            message: err?.message || "Something went wrong. Please try again." // Message from backend error
        });
    }
  };

  // Handle Google Login
  const handleGoogleLogin = async () => {
    try {
      dispatch(googleLogin());
    } catch (error) {
      console.error("Google login failed:", error);
    }
  };

  return (
    <div className="min-h-screen pt-32 flex items-center justify-center p-4 bg-gradient-to-br from-[#02042b] via-[#290849] to-[#960b35] font-roboto text-white relative">
      
      {/* --- MAIN FORM CONTAINER --- */}
      <div className={`w-full max-w-lg bg-white bg-opacity-10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-8 sm:p-10 relative overflow-hidden transition-all duration-300 ${showLoginModal || responseModal.isOpen ? 'blur-sm brightness-50 pointer-events-none' : ''}`}>
        
        {/* Decorative Glows */}
        <div className="absolute top-[-50px] left-[-50px] w-32 h-32 bg-purple-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>
        <div className="absolute bottom-[-50px] right-[-50px] w-32 h-32 bg-red-500 rounded-full blur-3xl opacity-20 pointer-events-none"></div>

        {/* HEADER */}
        <header className="text-center mb-8">
            <h2 className="font-montserrat font-bold text-xs sm:text-sm tracking-[0.2em] text-white/80 uppercase mb-2">
                Idea2Impact Connect
            </h2>
            <h1 className="font-montserrat font-black text-4xl sm:text-5xl uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300 drop-shadow-sm mb-2">
                Gurugram<br/>Founders<br/>Meetup
            </h1>
            <p className="mt-4 text-sm text-white/70 font-light">
                Join 80+ Founders & 20+ Investors
            </p>
        </header>

        {/* --- REGISTRATION FORM --- */}
        <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
                <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Full Name <span className="text-red-400">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                />
            </div>

            {/* Email */}
            <div>
                <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Personal Email <span className="text-red-400">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={user ? user.email : formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                />
            </div>

            {/* WhatsApp Number */}
            <div>
                <label htmlFor="whatsappNumber" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    WhatsApp Number <span className="text-red-400">*</span>
                </label>
                <input
                    type="tel"
                    id="whatsappNumber"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    required
                    placeholder="+91 98765 43210"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                />
            </div>

            {/* Two Column: Brand & Position */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                    <label htmlFor="brandName" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                        Brand Name <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="brandName"
                        name="brandName"
                        value={formData.brandName}
                        onChange={handleChange}
                        required
                        placeholder="My Startup"
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                    />
                </div>
                <div>
                    <label htmlFor="position" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                        Position <span className="text-red-400">*</span>
                    </label>
                    <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        required
                        placeholder="Founder / CEO"
                        className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                    />
                </div>
            </div>

            {/* Professional Email */}
            <div>
                <label htmlFor="professionalEmail" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Professional Email <span className="text-white/40 normal-case ml-1 font-normal tracking-normal">(Optional)</span>
                </label>
                <input
                    type="email"
                    id="professionalEmail"
                    name="professionalEmail"
                    value={formData.professionalEmail}
                    onChange={handleChange}
                    placeholder="work@company.com"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                />
            </div>

            {/* Office Location */}
            <div>
                <label htmlFor="officeLocation" className="block text-xs font-bold uppercase tracking-wider text-white/70 mb-1">
                    Office Location <span className="text-white/40 normal-case ml-1 font-normal tracking-normal">(Optional)</span>
                </label>
                <input
                    type="text"
                    id="officeLocation"
                    name="officeLocation"
                    value={formData.officeLocation}
                    onChange={handleChange}
                    placeholder="Gurugram, Cyber City"
                    className="w-full px-4 py-3 bg-black/30 border border-white/20 rounded-lg focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors placeholder-white/30 text-sm"
                />
            </div>

            {/* SUBMIT BUTTON */}
            <button
                type="submit"
                disabled={loading}
                className="w-full mt-6 py-4 bg-gradient-to-r from-[#d90f2d] to-[#960b35] hover:from-[#ff1436] hover:to-[#b00d3e] text-white font-montserrat font-bold uppercase tracking-wider rounded-lg shadow-lg hover:shadow-red-500/30 transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {loading ? "Registering..." : "Register Now"}
            </button>
        </form>
        
        <p className="text-center text-xs text-white/30 mt-6">
            Banking Partner: IDFC First Bank • Venue Partner: goSTOPS
        </p>
      </div>

      {/* --- LOGIN POPUP MODAL --- */}
      {showLoginModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <div className="absolute inset-0 bg-[#02042b]/80 backdrop-blur-sm"></div>
            <div className="relative w-full max-w-sm bg-[#1a0b2e] border border-white/20 rounded-xl p-8 shadow-2xl transform scale-100 text-center animate-fadeIn">
                <div className="mx-auto w-14 h-14 bg-gradient-to-br from-[#d90f2d] to-[#960b35] rounded-full flex items-center justify-center mb-5 shadow-lg shadow-red-500/20">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    </svg>
                </div>
                <h3 className="text-xl font-montserrat font-bold text-white mb-2">Access Restricted</h3>
                <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Please log in to your account to register.
                </p>
                <button onClick={handleGoogleLogin} className="w-full py-3.5 bg-white text-[#960b35] hover:bg-gray-100 font-bold uppercase tracking-wide rounded-lg transition-all shadow-lg text-sm">
                    Login to Continue
                </button>
            </div>
        </div>
      )}

      {/* --- NEW: RESPONSE POPUP MODAL (Success/Error) --- */}
      {responseModal.isOpen && (
       <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    {/* Backdrop */}
    <div 
        className="absolute inset-0 bg-[#000]/60 backdrop-blur-sm"
        onClick={closeResponseModal}
    ></div>
    
    <div className="relative w-full max-w-sm bg-[#1a0b2e] border border-white/20 rounded-xl p-8 shadow-2xl transform scale-100 text-center animate-fadeIn">
        
        {/* Close Button */}
        <button 
            onClick={closeResponseModal}
            className="absolute top-4 right-4 text-white/40 hover:text-white transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </button>

        {/* Conditional Icon */}
        <div className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-5 shadow-lg ${
            responseModal.type === 'success' 
            ? 'bg-green-500/20 shadow-green-500/30' 
            : 'bg-red-500/20 shadow-red-500/30'
        }`}>
            {responseModal.type === 'success' ? (
                // Success Check Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            ) : (
                // Error Exclamation Icon
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
            )}
        </div>

        {/* Conditional Title */}
        <h3 className="text-xl font-montserrat font-bold text-white mb-2">
            {responseModal.type === 'success' ? 'Great News!' : 'Registration Failed'}
        </h3>
        
        {/* Backend Message */}
        <p className="text-white/80 text-sm mb-6 leading-relaxed">
            {responseModal.message}
        </p>

        {/* --- NEW: Download Pass Button (Only shows on success) --- */}
        {responseModal.type === 'success' && (
            <button
                onClick={() => navigate('/ticket')}
                className="w-full py-3.5 mb-3 font-bold uppercase tracking-wide rounded-lg transition-all shadow-lg text-sm bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:shadow-blue-500/30 flex items-center justify-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Event Pass
            </button>
        )}

        {/* Existing Close/Try Again Button */}
        <button
            onClick={closeResponseModal}
            className={`w-full py-3.5 font-bold uppercase tracking-wide rounded-lg transition-all shadow-lg text-sm ${
                responseModal.type === 'success'
                ? 'bg-transparent border border-white/20 text-white hover:bg-white/10' // Ghost style for 'Continue' if success
                : 'bg-gradient-to-r from-red-500 to-red-700 text-white hover:shadow-red-500/30'
            }`}
        >
            {responseModal.type === 'success' ? 'Close' : 'Try Again'}
        </button>
    </div>
</div>
      )}

    </div>
  );
};

export default RegistrationForm;