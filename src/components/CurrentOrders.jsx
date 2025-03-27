import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';

const CurrentOrders = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const orders = [
        { id: '#01', name: 'Sarah', price: '07032219923', deliveryDate: '2025/01/7' },
        { id: '#02', name: 'Jessica', price: '07032219923', deliveryDate: '2025/01/7' },
        { id: '#03', name: 'Sam', price: '07032219923', deliveryDate: '2025/01/7' },
        { id: '#04', name: 'John', price: '07032219923', deliveryDate: '2025/01/7' },
    ];

    // Filter orders based on search query
    const filteredOrders = orders.filter(order => {
        const query = searchQuery.toLowerCase();
        return (
            order.id.toLowerCase().includes(query) ||
            order.name.toLowerCase().includes(query)
        );
    });

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="bg-white rounded-lg shadow-md p-5">
            <h2 className="text-xl font-medium text-gray-800 mb-5">Current Orders</h2>
            
            {/* Search Bar */}
            <div className="relative mb-5 inline-block">
                <input
                    type="text"
                    placeholder="SEARCH ORDER"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-[285px] h-[45px] pl-4 pr-[50px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83] focus:border-[#4B2E83] text-sm"
                />
                <button className="absolute right-[3px] top-1/2 -translate-y-1/2 h-[39px] w-[39px] bg-[#4B9B7D] rounded-lg flex items-center justify-center text-white hover:bg-[#408a6d] transition-colors">
                    <SearchIcon className="h-5 w-5" />
                </button>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto -mx-5">
                <table className="w-full">
                    <thead>
                        <tr className="text-left bg-gray-50">
                            <th className="px-5 py-3 text-sm font-medium text-gray-600">Tracking No</th>
                            <th className="px-5 py-3 text-sm font-medium text-gray-600">Order Name</th>
                            <th className="px-5 py-3 text-sm font-medium text-gray-600">Price</th>
                            <th className="px-5 py-3 text-sm font-medium text-gray-600">Delivery Date</th>
                            <th className="px-5 py-3 text-sm font-medium text-gray-600 text-left pl-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr key={order.id} className="border-b border-gray-100">
                                    <td className="px-5 py-4 text-sm text-gray-800">{order.id}</td>
                                    <td className="px-5 py-4 text-sm text-gray-800">{order.name}</td>
                                    <td className="px-5 py-4 text-sm text-gray-800">{order.price}</td>
                                    <td className="px-5 py-4 text-sm text-gray-800">{order.deliveryDate}</td>
                                    <td className="px-5 py-4">
                                        <button className="text-gray-400 hover:text-[#4B2E83]">
                                            <VisibilityIcon className="h-5 w-5" />
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="px-5 py-6 text-center text-gray-500">
                                    No orders found matching your search.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CurrentOrders; 