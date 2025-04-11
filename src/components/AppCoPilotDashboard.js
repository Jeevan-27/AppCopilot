import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Icons component for sidebar
const IconHome = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const IconSearch = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

const IconHeart = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
  </svg>
);

const IconBell = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
  </svg>
);

const IconSettings = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle>
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const IconSupport = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
    <line x1="12" y1="17" x2="12.01" y2="17"></line>
  </svg>
);

const IconKey = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
  </svg>
);

const IconCalendar = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
    <line x1="16" y1="2" x2="16" y2="6"></line>
    <line x1="8" y1="2" x2="8" y2="6"></line>
    <line x1="3" y1="10" x2="21" y2="10"></line>
  </svg>
);

const IconInfo = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="16" x2="12" y2="12"></line>
    <line x1="12" y1="8" x2="12.01" y2="8"></line>
  </svg>
);

function AppCoPilotDashboard() {
  const [activeMonth, setActiveMonth] = useState('March 2024');
  
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg hidden md:flex flex-col">
        {/* Logo */}
        <div className="px-6 py-4 flex items-center">
          <img 
            src="/image.png" 
            alt="AppCoPilot Logo" 
            className="h-10"
          />
          <span className="ml-2 font-bold text-xl">APPCOPILOT</span>
        </div>
        
        {/* Navigation Menu */}
        <nav className="mt-8 flex-1">
          <div className="px-4">
            <Link to="/dashboard" className="flex items-center px-4 py-3 text-orange-500 bg-orange-50 rounded-lg">
              <IconHome />
              <span className="ml-4 font-medium">Dashboard</span>
            </Link>
            
            <Link to="/searchProperty" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
              <IconSearch />
              <span className="ml-4 font-medium">Search Property</span>
            </Link>
            
            <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
              <IconHeart />
              <span className="ml-4 font-medium">Favourite</span>
            </Link>
          </div>
          
          <div className="mt-8 px-4">
            <div className="border-t border-gray-200 pt-4">
              <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
                <IconBell />
                <span className="ml-4 font-medium">Notifications</span>
              </Link>
              
              <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
                <IconSettings />
                <span className="ml-4 font-medium">Settings</span>
              </Link>
              
              <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
                <IconSupport />
                <span className="ml-4 font-medium">Support</span>
              </Link>
              
              <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
                <IconKey />
                <span className="ml-4 font-medium">API Credentials</span>
              </Link>
            </div>
          </div>
        </nav>
        
        {/* User Profile */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center">
            <img src="/api/placeholder/32/32" alt="User" className="rounded-full h-8 w-8 bg-yellow-500" />
            <div className="ml-3">
              <p className="text-sm font-medium">Welcome back <span role="img" aria-label="wave">👋</span></p>
              <p className="text-xs font-bold">Jeevan</p>
            </div>
            <button className="ml-auto">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Sidebar Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-10">
        <button className="bg-orange-500 text-white p-3 rounded-full shadow-lg">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-4 md:p-8">
        <div className="md:ml-4">
          <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {/* Total Properties */}
            <div className="bg-orange-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">Total Properties</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">7,210</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>+11.01%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 3 18 9"></polyline>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Active Listings */}
            <div className="bg-blue-50 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">Active Listings</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">510</div>
                <div className="flex items-center text-red-600 text-sm">
                  <span>-0.03%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 15 12 21 18 15"></polyline>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Lease */}
            <div className="bg-blue-100 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">
                Lease <span className="text-xs text-gray-500">(expiring in 9 Months)</span>
              </div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">90k</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>+8.01%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 3 18 9"></polyline>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Total Showings */}
            <div className="bg-gray-100 rounded-lg p-4">
              <div className="text-sm text-gray-600 mb-2">Total Showings</div>
              <div className="flex items-end justify-between">
                <div className="text-3xl font-bold">90k</div>
                <div className="flex items-center text-green-600 text-sm">
                  <span>+8.01%</span>
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="6 9 12 3 18 9"></polyline>
                    <line x1="12" y1="3" x2="12" y2="21"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Charts Row */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Line Chart */}
            <div className="lg:col-span-2 bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium">Total Visits</h3>
                  <button className="ml-2 text-gray-400">
                    <IconInfo />
                  </button>
                </div>
                <div className="flex items-center bg-gray-100 px-3 py-1 rounded-lg">
                  <span className="text-sm">{activeMonth}</span>
                  <button className="ml-2">
                    <IconCalendar />
                  </button>
                </div>
              </div>
              
              {/* Chart Placeholder */}
              <div className="h-64 relative">
                {/* Y-axis */}
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <div>30M</div>
                  <div>20M</div>
                  <div>10M</div>
                  <div>0</div>
                </div>
                
                {/* Line chart mockup */}
                <div className="ml-8 h-full relative">
                  {/* Orange Line */}
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full h-px bg-gray-200"></div>
                  </div>
                  
                  <div className="absolute inset-0">
                    <svg viewBox="0 0 400 200" className="w-full h-full">
                      {/* Orange Line */}
                      <path d="M0,140 C50,120 100,160 150,100 C200,40 250,120 300,80 C350,40 400,20 400,20" 
                        fill="none" 
                        stroke="#FF9966" 
                        strokeWidth="3" 
                      />
                      
                      {/* Teal Line */}
                      <path d="M0,80 C50,100 100,60 150,100 C200,140 250,40 300,60 C350,80 400,60 400,60" 
                        fill="none" 
                        stroke="#20B2AA" 
                        strokeWidth="3" 
                        strokeDasharray="5,5" 
                      />
                      
                      {/* Orange point with label */}
                      <circle cx="150" cy="95" r="5" fill="#FF9966" />
                      <rect x="130" y="75" width="70" height="20" rx="4" fill="#FF9966" />
                      <text x="138" y="90" fill="white" fontSize="10">3,256,598</text>
                    </svg>
                  </div>
                  
                  {/* X-axis */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500 pt-2">
                    <div>Jan</div>
                    <div>Feb</div>
                    <div>Mar</div>
                    <div>Apr</div>
                    <div>May</div>
                    <div>Jun</div>
                    <div>Jul</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Donut Chart */}
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <h3 className="text-lg font-medium">Traffic By Zip Code</h3>
                  <button className="ml-2 text-gray-400">
                    <IconInfo />
                  </button>
                </div>
              </div>
              
              {/* Donut Chart */}
              <div className="flex justify-center mb-6">
                <div className="w-40 h-40 relative">
                  <svg viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#000" strokeWidth="20" strokeDasharray="39 100" strokeDashoffset="25" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#20B2AA" strokeWidth="20" strokeDasharray="40 100" strokeDashoffset="65" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4169E1" strokeWidth="20" strokeDasharray="8 100" strokeDashoffset="15" />
                    <circle cx="50" cy="50" r="40" fill="transparent" stroke="#FF9966" strokeWidth="20" strokeDasharray="30 100" strokeDashoffset="105" />
                  </svg>
                </div>
              </div>
              
              {/* Legend */}
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-sm">Zip Code</span>
                  <span className="ml-auto text-sm font-medium">39.8%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mr-2"></div>
                  <span className="text-sm">Zip Code</span>
                  <span className="ml-auto text-sm font-medium">22.5%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-orange-400 mr-2"></div>
                  <span className="text-sm">Zip Code</span>
                  <span className="ml-auto text-sm font-medium">30.8%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-gray-400 mr-2"></div>
                  <span className="text-sm">Zip Code</span>
                  <span className="ml-auto text-sm font-medium">8.1%</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Banner */}
          <div className="bg-gradient-to-r from-blue-200 to-orange-200 rounded-lg p-6 mb-6 relative overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="mb-6 md:mb-0 md:w-1/2">
                <h4 className="uppercase text-sm font-medium mb-2">WELCOME TO APPCOPILOT</h4>
                <h2 className="text-4xl font-bold mb-2">Find The<br />Suggested Rent</h2>
                <p className="text-sm mb-4">For your property that match you.</p>
                <button className="bg-black text-white px-4 py-2 rounded-full text-sm">Compare Now</button>
              </div>
              <div className="md:w-1/2 md:ml-6">
                <img 
                  src="/home.jpeg.crdownload" 
                  alt="Property" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
          
          {/* Favorite Card */}
          <div className="bg-white rounded-lg p-6 shadow-sm flex flex-col md:flex-row items-center">
            <div className="bg-orange-100 p-4 rounded-full mb-4 md:mb-0">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF9966" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </div>
            <div className="md:ml-6 text-center md:text-left">
              <h3 className="text-lg font-medium mb-2">Add your favorite place to your wishlist so you won't miss anything!</h3>
              <button className="border border-gray-300 text-gray-700 px-4 py-2 rounded-full text-sm">Add Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppCoPilotDashboard;