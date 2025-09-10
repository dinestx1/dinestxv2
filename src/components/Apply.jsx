import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSelector } from 'react-redux';
import { submitApplication } from '../store/slices/authSlice';
import { useDispatch } from 'react-redux';
// Mock service function for demonstration purposes
const submitApply = async (formData) => {
  console.log("Submitting:", formData);
  // Simulate a network request
  return new Promise(resolve => setTimeout(() => resolve({ success: true }), 1500));
};

// --- Custom Select Component ---
const CustomSelect = ({ name, options, value, onChange, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const selectRef = useRef(null);

    const handleSelect = (optionValue) => {
        onChange({ target: { name, value: optionValue } });
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (selectRef.current && !selectRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const selectedOption = options.find(option => option.value === value);

    return (
        <div className="relative" ref={selectRef}>
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="h-12 w-full flex items-center justify-between border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
            >
                <span className={selectedOption ? 'text-white' : 'text-gray-400'}>
                    {selectedOption ? selectedOption.label : placeholder}
                </span>
                <ChevronDown
                    className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''}`}
                />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute z-10 mt-2 w-full bg-gray-900 border border-gray-700 rounded-lg shadow-lg"
                    >
                        <ul className="py-1 max-h-60 overflow-auto">
                            {options.map((option) => (
                                <li
                                    key={option.value}
                                    onClick={() => handleSelect(option.value)}
                                    className="px-4 py-2 text-white hover:bg-indigo-600 cursor-pointer"
                                >
                                    {option.label}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


function Apply() {

  const [errorMsg, setErrorMsg] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const { loading, applicationStatus, error } = useSelector((state) => state.auth);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    profession: '',
    role: '',
    portfolioLink: '',
    githubLink: ''
  });

  const professionOptions = [
      { value: 'student', label: 'Student' },
      { value: 'developer', label: 'Developer' },
      { value: 'designer', label: 'Designer' },
      { value: 'other', label: 'Other' },
  ];

  const roleOptions = [
      { value: 'web_dev', label: 'Web Developer' },
      { value: 'app_dev', label: 'App Developer' },
      { value: 'ui_ux', label: 'UI/UX Designer' },
      { value: 'graphic_designer', label: 'Graphic Designer' },
      { value: 'social_media', label: 'Social Media Manager' },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const result = await dispatch(submitApplication(formData)).unwrap();

      if (result.status === 201) {
        setIsSubmitted(true);
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          profession: "",
          role: "",
          portfolioLink: "",
          githubLink: "",
        });
      }
    } catch (err) {
      setErrorMsg(err.message || "Failed to submit application");
    }
  };

  const closeModal = () => {
    setIsSubmitted(false);
  };

  return (
    <div className="relative min-h-screen  text-gray-200">
        {/* Background Gradient Blobs */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/30 rounded-full filter blur-3xl opacity-50 animate-blob"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/30 rounded-full filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
        </div>

      <div className="min-h-screen p-6 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-extrabold text-3xl md:text-4xl text-white text-center mb-4 tracking-tight">Join Our Team</h2>
            <p className="text-gray-400 mb-8 text-center max-w-lg mx-auto">
              Ready to make an impact? Fill out the form below to apply. We're excited to see what you can do.
            </p>
            
            <div className="bg-black/30 backdrop-blur-lg border border-gray-800 shadow-2xl  p-6 md:p-8 rounded-2xl">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="text-gray-300">
                  <p className="font-medium text-lg text-white">Personal Details</p>
                  <p className="text-sm text-gray-400 mt-1">Please provide accurate and up-to-date information.</p>
                </div>

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit} noValidate>
                    <div className="grid gap-6 text-sm grid-cols-1 md:grid-cols-2">
                      {/* Full Name */}
                      <div className="md:col-span-2">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-300">Full Name *</label>
                        <input
                          type="text"
                          name="name"
                          id='name'
                          value={formData.name}
                          onChange={handleChange}
                          className="h-12 border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          required
                          placeholder='Your Full Name'
                        />
                      </div>
  
                      {/* Email */}
                      <div className="md:col-span-2">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">Email Address *</label>
                        <input
                          type="email"
                          name="email"
                          id="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="h-12 border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
  
                      {/* Phone Number */}
                      <div className="md:col-span-2">
                        <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-gray-300">Phone Number *</label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          id="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="h-12 border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          pattern="[0-9]{10}"
                          placeholder="+91 9876543210"
                          required
                          minLength={10}
                          maxLength={10}
                        />
                      </div>
  
                      {/* Profession Dropdown */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-300">Profession *</label>
                        <CustomSelect
                            name="profession"
                            value={formData.profession}
                            onChange={handleChange}
                            options={professionOptions}
                            placeholder="Select profession"
                        />
                      </div>
  
                      {/* Role Dropdown */}
                      <div className="md:col-span-1">
                        <label className="block mb-2 text-sm font-medium text-gray-300">Applying for Role *</label>
                        <CustomSelect
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            options={roleOptions}
                            placeholder="Select a role"
                            required
                        />
                      </div>
  
                      {/* Portfolio & GitHub Links */}
                      <div className="md:col-span-1">
                        <label htmlFor="portfolioLink" className="block mb-2 text-sm font-medium text-gray-300">Portfolio Link</label>
                        <input
                          type="url"
                          name="portfolioLink"
                          id="portfolioLink"
                          value={formData.portfolioLink}
                          onChange={handleChange}
                          className="h-12 border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="https://yourportfolio.com"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="githubLink" className="block mb-2 text-sm font-medium text-gray-300">GitHub Link</label>
                        <input
                          type="url"
                          name="githubLink"
                          id="githubLink"
                          value={formData.githubLink}
                          onChange={handleChange}
                          className="h-12 border border-gray-700 bg-gray-900/50 text-white rounded-lg px-4 w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
                          placeholder="https://github.com/username"
                        />
                      </div>
  
                      {/* Error Message */}
                      {errorMsg && <p className="md:col-span-2 text-red-400 text-sm">{errorMsg}</p>}

                      {/* Submit Button */}
                      <div className="md:col-span-2 text-right mt-4">
                        <button
                          type="submit"
                          disabled={loading}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out disabled:bg-indigo-400 disabled:cursor-not-allowed flex items-center justify-center w-full md:w-auto ml-auto"
                        >
                          {loading ? (
                            <>
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Submitting...
                            </>
                          ) : 'Submit Application'}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50">
          <div className="bg-gray-900 border border-indigo-800 p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-4">
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-green-400 w-10 h-10" />
            </div>
            <h2 className="text-2xl font-semibold text-white">Application Submitted!</h2>
            <p className="mt-2 text-gray-400">Thank you for applying. We will review your application and get back to you soon.</p>
            <button
              onClick={closeModal}
              className="mt-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Apply;
