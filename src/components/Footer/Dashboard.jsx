import React, { useState } from 'react';

const Dashboard = () => {
  // Example state for search functionality
  const [searchTerm, setSearchTerm] = useState('');

  // Example handler for search input change
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white p-4">
        <div className="flex items-center justify-center py-8">
          <div className="bg-purple-600 h-8 w-8 rounded-full"></div>
        </div>
        <ul>
          <li className="py-4 text-gray-600 hover:text-purple-600 cursor-pointer">
            <i className="fas fa-th-large mr-2"></i> Dashboard
          </li>
          <li className="py-4 text-gray-600 hover:text-purple-600 cursor-pointer">
            <i className="fas fa-box-open mr-2"></i> Products
          </li>
          <li className="py-4 text-gray-600 hover:text-purple-600 cursor-pointer">
            <i className="fas fa-chart-line mr-2"></i> Analytics
          </li>
          <li className="py-4 text-gray-600 hover:text-purple-600 cursor-pointer">
            <i className="fas fa-cog mr-2"></i> Settings
          </li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-semibold">Good Evening, Max!</h1>
            <p className="text-gray-500">E-commerce dashboard homepage</p>
          </div>
          <div className="flex items-center space-x-4 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleSearchChange}
              className="bg-white border border-gray-300 rounded-lg py-2 px-4 w-full md:w-auto"
            />
            <div className="w-10 h-10 rounded-full bg-gray-200"></div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Total Sales */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-600">Total Sales</h2>
            <div className="flex items-center justify-center mt-4">
              <div className="text-4xl font-bold text-purple-600">+85%</div>
            </div>
            <p className="text-center text-gray-500 mt-2">
              Increased this month
            </p>
          </div>

          {/* Best Selling Products */}
          <div className="bg-white p-6 rounded-lg shadow col-span-2">
            <h2 className="text-gray-600">Best Selling Products</h2>
            <div className="mt-4">
              <div className="flex justify-between items-center">
                <p className="text-gray-500">Omega luxury watch</p>
                <div className="w-40 bg-gray-200 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: '90%' }}
                  ></div>
                </div>
                <p className="text-gray-500">920/1000</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">Omega fashioned watch</p>
                <div className="w-40 bg-gray-200 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: '85%' }}
                  ></div>
                </div>
                <p className="text-gray-500">857/1000</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-gray-500">Omega classic watch</p>
                <div className="w-40 bg-gray-200 rounded-full">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: '70%' }}
                  ></div>
                </div>
                <p className="text-gray-500">719/1000</p>
              </div>
            </div>
          </div>

          {/* Website Visitors */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-600">Website Visitors</h2>
            <div className="mt-4">
              {/* Placeholder for chart */}
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>

          {/* Product Stock */}
          <div className="bg-white p-6 rounded-lg shadow col-span-2">
            <h2 className="text-gray-600">Product Stock</h2>
            <div className="mt-4">
              <div className="flex justify-between items-center border-b py-2">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                  <div>
                    <p className="text-gray-600">Robert Carter</p>
                    <p className="text-gray-400 text-sm">#5263fhj2d</p>
                  </div>
                </div>
                <p className="text-gray-500">924</p>
                <p className="text-green-600">In Stock</p>
                <p className="text-gray-600">$2600</p>
              </div>
              {/* Repeat similar items here... */}
            </div>
          </div>

          {/* Sales Analytics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-gray-600">Sales Analytics</h2>
            <div className="mt-4">
              {/* Placeholder for chart */}
              <div className="h-32 bg-gray-200 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
