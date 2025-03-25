import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import EditIcon from '@mui/icons-material/Edit';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import CakeIcon from '@mui/icons-material/Cake';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CurrentOrders from '../components/CurrentOrders';

const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);

    return (
        <div className="min-h-screen bg-gray-50 w-full flex flex-col">
            <Header />
            <div className="flex-1 px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8 max-w-[1400px] mx-auto">
                    {/* Left Column - Profile and Payment Methods */}
                    <div className="lg:w-1/4 space-y-6">
                        {/* Profile Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 mb-6 max-w-sm">
                            <div className="flex items-start mb-6">
                                <div className="flex items-center">
                                    <div className="relative">
                                        <AccountCircleIcon className="text-gray-400" style={{ fontSize: '52px' }} />
                                    </div>
                                    <div className="ml-4">
                                        <h1 className="text-xl font-medium text-gray-800">Sarah Jasmine</h1>
                                        <p className="text-sm text-gray-500 mb-2">#CG1234</p>
                                        <button className="flex items-center justify-center bg-[#4B2E83] hover:bg-[#3d2569] text-white rounded-full w-20 h-7 text-sm px-3">
                                            <EditIcon className="h-3 w-3" />
                                            <span className="ml-1">Edit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information and Address */}
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <PhoneIcon className="text-gray-500 mr-2 h-5 w-5" />
                                    <span className="w-24 text-gray-600">Contact No</span>
                                    <span className="text-gray-800">07032219923</span>
                                </div>
                                <div className="flex items-center">
                                    <EmailIcon className="text-gray-500 mr-2 h-5 w-5" />
                                    <span className="w-24 text-gray-600">Email</span>
                                    <span className="text-gray-800">sarah@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <CakeIcon className="text-gray-500 mr-2 h-5 w-5" />
                                    <span className="w-24 text-gray-600">Birthday</span>
                                    <span className="text-gray-800">2024/08/09</span>
                                </div>
                                <div className="flex items-center">
                                    <LocationOnIcon className="text-gray-500 mr-2 h-5 w-5" />
                                    <span className="w-28 mr-4 text-gray-600">Address</span>
                                    <span className="text-gray-800">104/piliyandala.boralasgomuwa</span>
                                </div>
                                <div className="pt-4">
                                    <button className="flex items-center text-[#4B2E83] hover:text-[#3d2569]">
                                        <AddCircleIcon className="h-6 w-6" />
                                        <span className="ml-1">Add Address</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods Section */}
                        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-medium text-gray-800">Payment methods</h2>
                                <button className="text-[#4B2E83] hover:text-[#3d2569] p-1">
                                    <AddCircleIcon className="h-4 w-4" />
                                </button>
                            </div>

                            {/* Payment Method List */}
                            <div className="space-y-4">
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800">Payment Method 1</span>
                                        <button className="text-[#4B2E83] hover:text-[#3d2569]">
                                            <DeleteIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800">Payment Method 2</span>
                                        <button className="text-[#4B2E83] hover:text-[#3d2569]">
                                            <DeleteIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800">Payment Method 3</span>
                                        <button className="text-[#4B2E83] hover:text-[#3d2569]">
                                            <DeleteIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                                <div className="p-4 border border-gray-200 rounded-lg">
                                    <div className="flex justify-between items-center">
                                        <span className="text-gray-800">Payment Method 4</span>
                                        <button className="text-[#4B2E83] hover:text-[#3d2569]">
                                            <DeleteIcon className="h-5 w-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Current Orders */}
                    <div className="lg:w-3/4">
                        <CurrentOrders />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Profile; 