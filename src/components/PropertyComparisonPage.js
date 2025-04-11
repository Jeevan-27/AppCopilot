import { useState } from 'react';
import { Link } from 'react-router-dom';

// Custom SVG Icons
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

const IconChevronDown = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

const IconUser = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

const IconLocation = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default function PropertyComparisonPage() {
  const [selectedProperties, setSelectedProperties] = useState([]);
  
  const properties = [
    {
      id: 1,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 2,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 3,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 4,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 5,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 6,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 7,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    },
    {
      id: 8,
      name: "Property Name",
      image: "/api/placeholder/400/250",
      amenities: ["View", "Balcony", "Garage", "Dishwasher", "Fitness Center"],
      price: 1075,
      deposit: 1115,
      available: "12.12.2024",
      rent: 1234,
      status: "Suggested Rent"
    }
  ];

  const handleSelectProperty = (id) => {
    if (selectedProperties.includes(id)) {
      setSelectedProperties(selectedProperties.filter(propId => propId !== id));
    } else {
      setSelectedProperties([...selectedProperties, id]);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md py-8 px-4 flex flex-col">
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
          <div className="px-2">
            <Link to="/dashboard" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg">
              <IconHome />
              <span className="ml-4 font-medium">Dashboard</span>
            </Link>
            
            <Link to="#" className="flex items-center px-4 py-3 text-orange-500 bg-orange-50 rounded-lg mt-2">
              <IconSearch />
              <span className="ml-4 font-medium">Search Property</span>
            </Link>
            
            <Link to="#" className="flex items-center px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg mt-2">
              <IconHeart />
              <span className="ml-4 font-medium">Favourite</span>
            </Link>
          </div>
          
          <div className="mt-8 px-2">
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
        <div className="mt-auto border-t pt-4">
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center mr-2">
              <IconUser size={16} />
            </div>
            <div>
              <div className="text-xs text-gray-500">Welcome back 👋</div>
              <div className="font-medium">Jeevan</div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Compare Property</h1>
            <button className="bg-black text-white px-4 py-2 rounded-md">Pull Data</button>
          </div>

          <div className="grid grid-cols-1 gap-4 mb-6">
            <div className="flex flex-wrap gap-2">
              <div className="relative flex-1 min-w-64">
                <input
                  type="text"
                  placeholder="Search Location"
                  className="w-full border border-gray-200 rounded-md py-2 px-4 pr-10"
                />
                <div className="absolute right-3 top-2.5 text-gray-400">
                  <IconLocation />
                </div>
              </div>
              
              <FilterDropdown label="Amenities" />
              <FilterDropdown label="Square Feet" />
              <FilterDropdown label="Leasing End Date Range" />
              <FilterDropdown label="Listing Type" />
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Save Search</button>
            </div>
          </div>

          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">Madison Seattle Rental Listings</h2>
                <p className="text-gray-500">800sqft with View</p>
              </div>
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  id="selectAll" 
                  className="mr-2"
                  onChange={() => {
                    if (selectedProperties.length === properties.length) {
                      setSelectedProperties([]);
                    } else {
                      setSelectedProperties(properties.map(p => p.id));
                    }
                  }}
                  checked={selectedProperties.length === properties.length}
                />
                <label htmlFor="selectAll" className="text-sm font-medium">Select All</label>
              </div>
            </div>
          </div>

          {/* Property Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {properties.slice(0, 8).map((property) => (
              <PropertyCard 
                key={property.id}
                property={property}
                isSelected={selectedProperties.includes(property.id)}
                onSelect={() => handleSelectProperty(property.id)}
              />
            ))}
          </div>

          <div className="mt-6 flex justify-center">
            <button className="bg-white border border-gray-300 px-6 py-2 rounded-md font-medium">
              Load More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

const FilterDropdown = ({ label }) => {
  return (
    <div className="relative inline-block">
      <button className="border border-gray-200 rounded-md py-2 px-4 flex items-center min-w-40">
        <span className="flex-1 text-left">{label}</span>
        <IconChevronDown />
      </button>
    </div>
  );
};

const PropertyCard = ({ property, isSelected, onSelect }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <div className="relative">
        <img src={property.image} alt={property.name} className="w-full h-48 object-cover" />
        <div className="absolute top-2 right-2">
          <input 
            type="checkbox" 
            className="w-5 h-5 accent-orange-500"
            checked={isSelected}
            onChange={onSelect}
          />
        </div>
        <div className="absolute top-0 right-0 bg-orange-500 text-white px-3 py-1 rounded-bl-lg">
          Featured
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1">{property.name}</h3>
        <p className="text-sm text-gray-500">
          Amenities: {property.amenities.join(', ')}
        </p>
        
        <div className="flex justify-between items-center mt-4">
          <div>
            <div className="font-bold">${property.price}</div>
            <div className="text-xs text-gray-500">Price/Sqft</div>
          </div>
          <div>
            <div className="font-bold">${property.deposit}</div>
            <div className="text-xs text-gray-500">Sec Deposit</div>
          </div>
          <div>
            <div className="font-bold">{property.available}</div>
            <div className="text-xs text-gray-500">Available</div>
          </div>
        </div>
        
        <div className="mt-3">
          <div className="text-orange-500 font-bold">${property.rent}/mo</div>
          <div className="text-xs text-gray-500">{property.status}</div>
        </div>
        
        <div className="mt-4">
          <button className="w-full border border-gray-300 rounded-md py-2 text-center text-sm font-medium">
            View Rental Comparisons
          </button>
        </div>
      </div>
    </div>
  );
};