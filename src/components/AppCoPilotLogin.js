import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function AppCoPilotLogin() {
   const [formData, setFormData] = useState({
        email: 'jeevan261122@gmail.com',
        password: '71762231023',
        rememberMe: true
});      
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login form submitted:', formData);
  
    // Mock login - would connect to backend in a real app
    alert('Login successful (demo only)');
  
    // Redirect to dashboard
    navigate('/dashboard');
  };
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* Left Panel - Login Form */}
      <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center">
        <div className="mb-6 md:mb-12">
          <div className="flex items-center justify-center md:justify-start">
            <img 
              src="/image.png" 
              alt="AppCoPilot Logo" 
              className="h-8 md:h-10"
            />
            <span className="ml-2 font-bold text-lg md:text-xl">APPCOPILOT</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 max-w-md mx-auto md:mx-0">
          <div>
            <label className="block uppercase text-xs md:text-sm font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 md:py-3 rounded-full border border-gray-200"
              placeholder="example@gmail.com"
              required
            />
          </div>

          <div>
            <label className="block uppercase text-xs md:text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 md:py-3 rounded-full border border-gray-200"
                placeholder="••••••••••••"
                required
              />
              <button 
                type="button" 
                onClick={togglePasswordVisibility}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {showPassword ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="rememberMe"
                type="checkbox"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="h-4 w-4 text-orange-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 text-xs md:text-sm text-gray-700">
                Remember me
              </label>
            </div>
            <div>
              <a href="#" className="text-orange-500 text-xs md:text-sm hover:underline">
                Reset Password?
              </a>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 md:py-3 px-4 rounded-full font-medium"
          >
            Log In
          </button>
        </form>

        <div className="mt-4 md:mt-6 text-center md:text-left">
          <p className="text-sm text-gray-700">
            Don't have account yet?{" "}
            <Link to="/signup" className="text-orange-500 hover:underline">
              New Account
            </Link>
          </p>
        </div>
      </div>

      {/* Right Panel - Hero Section (hidden on mobile) */}
      <div className="hidden md:block md:w-1/2 bg-gradient-to-r from-blue-200 to-orange-200 p-8 flex flex-col justify-center">
        <div className="max-w-lg mx-auto">
          <h2 className="uppercase text-lg font-medium mb-4">
            WELCOME TO APPCOPILOT
          </h2>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Compare<br />Your Property
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Discover homes that match your lifestyle.
          </p>

          <div className="mt-8">
            <img 
              src="/home.jpeg.crdownload" 
              alt="Modern Home" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCoPilotLogin;