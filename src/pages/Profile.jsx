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
import CloseIcon from '@mui/icons-material/Close';
import CurrentOrders from '../components/CurrentOrders';

const Profile = () => {
    const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
    const [isEditProfileOpen, setIsEditProfileOpen] = React.useState(false);
    const [paymentMethods, setPaymentMethods] = React.useState([
        { id: 1, name: 'Payment Method 1' },
        { id: 2, name: 'Payment Method 2' },
        { id: 3, name: 'Payment Method 3' }
    ]);
    const [isAddPaymentModalOpen, setIsAddPaymentModalOpen] = React.useState(false);
    const [newPaymentMethod, setNewPaymentMethod] = React.useState('');
    const [profileData, setProfileData] = React.useState({
        name: 'Sarah Jasmine',
        contactNo: '07032219923',
        address: '104/piliyandala.boralasgomuwa',
        dateOfBirth: '2024/08/09',
        password: '************************'
    });

    const handleDeletePaymentMethod = (id) => {
        setPaymentMethods(prevMethods => prevMethods.filter(method => method.id !== id));
    };

    const handleAddPaymentMethod = () => {
        if (newPaymentMethod.trim()) {
            const newId = Math.max(...paymentMethods.map(m => m.id), 0) + 1;
            setPaymentMethods(prevMethods => [...prevMethods, { id: newId, name: newPaymentMethod.trim() }]);
            setNewPaymentMethod('');
            setIsAddPaymentModalOpen(false);
        }
    };

    const handleProfileUpdate = () => {
        // Handle profile update logic here
        setIsEditProfileOpen(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProfileData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen bg-gray-50 w-full flex flex-col">
            <Header />
            <div className="flex-1 px-4 py-8 mt-[108px]">
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
                                        <h1 className="text-xl font-medium text-gray-800">{profileData.name}</h1>
                                        <p className="text-sm text-gray-500 mb-2">#CG1234</p>
                                        <button 
                                            className="flex items-center justify-center bg-[#5CAF90] hover:bg-[#3d2569] text-white rounded-full w-[94px] h-[35.46px] text-sm"
                                            onClick={() => setIsEditProfileOpen(true)}
                                        >
                                            <EditIcon className="h-3 w-3" />
                                            <span className="ml-1">Edit</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information and Address */}
                            <div className="space-y-4">
                                <div className="flex items-center">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#D1D1D1] flex items-center justify-center mr-2">
                                        <PhoneIcon className="text-gray-500" style={{ fontSize: '20px' }} />
                                    </div>
                                    <span className="w-24 text-gray-600">Contact No</span>
                                    <span className="text-gray-800">{profileData.contactNo}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#D1D1D1] flex items-center justify-center mr-2">
                                        <EmailIcon className="text-gray-500" style={{ fontSize: '20px' }} />
                                    </div>
                                    <span className="w-24 text-gray-600">Email</span>
                                    <span className="text-gray-800">sarah@gmail.com</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#D1D1D1] flex items-center justify-center mr-2">
                                        <CakeIcon className="text-gray-500" style={{ fontSize: '20px' }} />
                                    </div>
                                    <span className="w-24 text-gray-600">Birthday</span>
                                    <span className="text-gray-800">{profileData.dateOfBirth}</span>
                                </div>
                                <div className="flex items-center">
                                    <div className="w-[40px] h-[40px] rounded-full bg-[#D1D1D1] flex items-center justify-center mr-2">
                                        <LocationOnIcon className="text-gray-500" style={{ fontSize: '20px' }} />
                                    </div>
                                    <span className="w-28 mr-4 text-gray-600">Address</span>
                                    <span className="text-gray-800 pr-4">{profileData.address}</span>
                                </div>
                                <div className="pt-4">
                                    <button className="flex items-center group">
                                        <AddCircleIcon className="text-[#5CAF90] group-hover:text-[#3d2569]" style={{ fontSize: '38px' }} />
                                        <span className="ml-1 text-black group-hover:text-[#3d2569]">Add Address</span>
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Payment Methods Section */}
                        <div className="bg-white rounded-lg shadow-md p-6 max-w-sm">
                            <div className="flex items-center justify-between mb-6">
                                <h2 className="text-lg font-medium text-gray-800">Payment methods</h2>
                                <button 
                                    className="text-[#5CAF90] hover:text-[#3d2569]"
                                    onClick={() => setIsAddPaymentModalOpen(true)}
                                >
                                    <AddCircleIcon style={{ fontSize: '38px' }} />
                                </button>
                            </div>

                            {/* Payment Method List */}
                            <div className="space-y-4">
                                {paymentMethods.map((method) => (
                                    <div key={method.id} className="flex items-center justify-between">
                                        <span>{method.name}</span>
                                        <button
                                            onClick={() => handleDeletePaymentMethod(method.id)}
                                            className="text-black hover:text-[#3d2569]"
                                        >
                                            <DeleteIcon />
                                        </button>
                                    </div>
                                ))}
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

            {/* Edit Profile Modal */}
            {isEditProfileOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-2xl font-medium">Edit Profile data</h2>
                            <button 
                                onClick={() => setIsEditProfileOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={profileData.name}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Contact No</label>
                                <input
                                    type="text"
                                    name="contactNo"
                                    value={profileData.contactNo}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={profileData.address}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Date of birth</label>
                                <input
                                    type="text"
                                    name="dateOfBirth"
                                    value={profileData.dateOfBirth}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2">Change Password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={profileData.password}
                                    onChange={handleInputChange}
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#4B2E83]"
                                />
                            </div>
                            <div className="flex justify-center space-x-4 mt-6">
                                <button
                                    onClick={() => setIsEditProfileOpen(false)}
                                    className="w-[168px] h-[43.14px] border-2 border-gray-300 rounded-full text-gray-700 hover:bg-gray-50"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleProfileUpdate}
                                    className="w-[168px] h-[43.14px] bg-[#5CAF90] text-white rounded-full hover:bg-[#408a6d]"
                                >
                                    Update
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add Payment Method Modal */}
            {isAddPaymentModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]">
                    <div className="bg-white rounded-lg p-6 w-full max-w-md">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium text-gray-800">Add Payment Method</h3>
                            <button 
                                onClick={() => setIsAddPaymentModalOpen(false)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                <CloseIcon />
                            </button>
                        </div>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-1">
                                    Payment Method Name
                                </label>
                                <input
                                    type="text"
                                    id="paymentMethod"
                                    value={newPaymentMethod}
                                    onChange={(e) => setNewPaymentMethod(e.target.value)}
                                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B2E83] focus:border-transparent"
                                    placeholder="Enter payment method name"
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    onClick={() => setIsAddPaymentModalOpen(false)}
                                    className="px-4 py-2 text-gray-700 hover:text-gray-900"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleAddPaymentMethod}
                                    className="px-4 py-2 bg-[#5CAF90] text-white rounded-md hover:bg-[#3d2569]"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profile; 