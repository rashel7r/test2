import { useState } from 'react'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import InvoiceDownloadButton from './Invoice'

export default function BillingForm() {
  const [formData, setFormData] = useState({
    projectName: '',
    location: '',
    estimateTime: '',
    endDate: '',
    email: '',
    address: '',
    phoneNo1: '',
    phoneNo2: '',
    materials: [],
    currentMaterial: {
      name: '',
      quantity: '',
      unit: 'KG',
      price: '1000'
    }
  })

  const [errors, setErrors] = useState({
    endDate: '',
    email: '',
    phoneNo1: '',
    phoneNo2: ''
  })

  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formErrors, setFormErrors] = useState({})

  const [editingMaterial, setEditingMaterial] = useState(null)
  const [showEditModal, setShowEditModal] = useState(false)

  const validateEndDate = (date) => {
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    
    if (selectedDate < today) {
      return 'End date cannot be in the past'
    }
    return ''
  }

  const validateEmail = (email) => {
    if (email && !email.includes('@')) {
      return 'The "@" symbol is missing in the email provided'
    }
    return ''
  }

  const validatePhone = (phone, fieldName) => {
    if (phone && !/^\d{10}$/.test(phone.replace(/\D/g, ''))) {
      return 'Phone number must be 10 digits'
    }
    return ''
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))

    // Validate fields on change
    switch (name) {
      case 'endDate':
        setErrors(prev => ({ ...prev, endDate: validateEndDate(value) }))
        break
      case 'email':
        setErrors(prev => ({ ...prev, email: validateEmail(value) }))
        break
      case 'phoneNo1':
        setErrors(prev => ({ ...prev, phoneNo1: validatePhone(value, 'phoneNo1') }))
        break
      case 'phoneNo2':
        setErrors(prev => ({ ...prev, phoneNo2: validatePhone(value, 'phoneNo2') }))
        break
    }
  }

  const handleMaterialChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      currentMaterial: {
        ...prev.currentMaterial,
        [name]: value
      }
    }))
  }

  const addMaterial = () => {
    const { name, quantity, unit } = formData.currentMaterial
    
    // Validate required fields
    if (!name || !quantity) {
      return
    }

    const newMaterial = {
      id: String(formData.materials.length + 1).padStart(2, '0'),
      name,
      quantity,
      unit,
      price: '1000'  // Fixed price at 1000 LKR
    }

    setFormData(prev => ({
      ...prev,
      materials: [...prev.materials, newMaterial],
      currentMaterial: {
        name: '',
        quantity: '',
        unit: 'KG',
        price: '1000'  // Reset with default price
      }
    }))
  }

  const handleDeleteMaterial = (id) => {
    setFormData(prev => ({
      ...prev,
      materials: prev.materials.filter(material => material.id !== id)
    }))
  }

  const handleEditClick = (material) => {
    setEditingMaterial({ ...material })
    setShowEditModal(true)
  }

  const handleSaveEdit = () => {
    if (!editingMaterial) return

    setFormData(prev => ({
      ...prev,
      materials: prev.materials.map(material => 
        material.id === editingMaterial.id ? editingMaterial : material
      )
    }))
    setShowEditModal(false)
    setEditingMaterial(null)
  }

  const handleEditFormChange = (e) => {
    const { name, value } = e.target
    setEditingMaterial(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const validateForm = () => {
    const errors = {}
    
    // Validate Project Details
    if (!formData.projectName) errors.projectName = 'Project name is required'
    if (!formData.location) errors.location = 'Location is required'
    if (!formData.estimateTime) errors.estimateTime = 'Estimate time is required'
    if (!formData.endDate) errors.endDate = 'End date is required'
    
    // Validate Contact Details
    if (!formData.email) errors.email = 'Email is required'
    if (!formData.address) errors.address = 'Address is required'
    if (!formData.phoneNo1) errors.phoneNo1 = 'Phone number 1 is required'
    
    // Validate Materials
    if (formData.materials.length === 0) errors.materials = 'At least one material is required'

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = () => {
    if (validateForm()) {
      setShowSuccessMessage(true)
      setTimeout(() => {
        setShowSuccessMessage(false)
      }, 3000) // Hide message after 3 seconds
    }
  }

  return (
    <div className="min-h-screen py-8 mx-auto sm:px-6">
      {/* Page Title */}
      <div className="text-center px-auto mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Construction Billing</h1>
      </div>

      {/* Edit Modal */}
      {showEditModal && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-[9999]">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Edit Material</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Material
                </label>
                <select
                  name="name"
                  value={editingMaterial.name}
                  onChange={handleEditFormChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                >
                  <option value="Brick">Brick</option>
                  <option value="Cement">Cement</option>
                  <option value="Sand">Sand</option>
                  <option value="Steel">Steel</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    name="quantity"
                    value={editingMaterial.quantity}
                    onChange={handleEditFormChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <select
                    name="unit"
                    value={editingMaterial.unit}
                    onChange={handleEditFormChange}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  >
                    <option value="KG">KG</option>
                    <option value="Units">Units</option>
                    <option value="Tons">Tons</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-6 flex gap-3">
              <button
                onClick={handleSaveEdit}
                className="flex-1 bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
              >
                Save Changes
              </button>
              <button
                onClick={() => {
                  setShowEditModal(false)
                  setEditingMaterial(null)
                }}
                className="flex-1 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Message Popup */}
      {showSuccessMessage && (
        <div className="fixed left-0 right-0 top-0 flex justify-center z-[9999]">
          <div className="mt-4 bg-white border border-gray-100 rounded-lg shadow-xl p-4 animate-slide-down flex items-center min-w-[300px]">
            <svg className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-800 font-medium">Bill Submitted Successfully</span>
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto flex gap-16">
        {/* Main Content (Left Side) */}
        <div className="flex-1 pl-32">
          {/* Project Details Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100 max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Project Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectName" className="block text-sm font-medium text-gray-700 mb-1">
                  Project Name
                </label>
                <input
                  type="text"
                  id="projectName"
                  name="projectName"
                  value={formData.projectName}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${formErrors.projectName ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                />
                {formErrors.projectName && (
                  <p className="mt-1 text-sm text-red-600">{formErrors.projectName}</p>
                )}
              </div>
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="estimateTime" className="block text-sm font-medium text-gray-700 mb-1">
                  Estimate Time
                </label>
                <input
                  type="text"
                  id="estimateTime"
                  name="estimateTime"
                  value={formData.estimateTime}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
                  End Date
                </label>
                <input
                  type="date"
                  id="endDate"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.endDate ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                />
                {errors.endDate && (
                  <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
                )}
              </div>
            </div>
          </div>

          {/* Contact Details Section */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-6 border border-gray-100 max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Contact Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                />
              </div>
              <div>
                <label htmlFor="phoneNo1" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone No 1
                </label>
                <input
                  type="tel"
                  id="phoneNo1"
                  name="phoneNo1"
                  value={formData.phoneNo1}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.phoneNo1 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                />
                {errors.phoneNo1 && (
                  <p className="mt-1 text-sm text-red-600">{errors.phoneNo1}</p>
                )}
              </div>
              <div>
                <label htmlFor="phoneNo2" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone No 2
                </label>
                <input
                  type="tel"
                  id="phoneNo2"
                  name="phoneNo2"
                  value={formData.phoneNo2}
                  onChange={handleInputChange}
                  className={`w-full px-3 py-2 border ${errors.phoneNo2 ? 'border-red-500' : 'border-gray-300'} rounded-md shadow-sm focus:ring-primary focus:border-primary`}
                />
                {errors.phoneNo2 && (
                  <p className="mt-1 text-sm text-red-600">{errors.phoneNo2}</p>
                )}
              </div>
            </div>
          </div>

          {/* Materials and Costs Section */}
          <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100 max-w-3xl">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Materials and Costs</h2>
            <div className="grid grid-cols-12 gap-4 items-end mb-8">
              <div className="col-span-4 relative">
                <label htmlFor="materialName" className="block text-sm font-medium text-gray-700 mb-1">
                  Choose materials
                </label>
                <select
                  id="materialName"
                  name="name"
                  value={formData.currentMaterial.name}
                  onChange={handleMaterialChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white appearance-none"
                >
                  <option value="">Select material</option>
                  <option value="Brick">Brick</option>
                  <option value="Cement">Cement</option>
                  <option value="Sand">Sand</option>
                  <option value="Steel">Steel</option>
                </select>
              </div>
              <div className="col-span-4">
                <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
                  Quantity
                </label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={formData.currentMaterial.quantity}
                    onChange={handleMaterialChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
                  />
                  <select
                    name="unit"
                    value={formData.currentMaterial.unit}
                    onChange={handleMaterialChange}
                    className="w-24 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary bg-white"
                  >
                    <option value="KG">KG</option>
                    <option value="Units">Units</option>
                    <option value="Tons">Tons</option>
                  </select>
                </div>
              </div>
              <div className="col-span-4">
                <button
                  onClick={addMaterial}
                  className="w-full bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors"
                  disabled={!formData.currentMaterial.name || !formData.currentMaterial.quantity}
                >
                  Add Materials
                </button>
              </div>
            </div>

            {/* Materials Table */}
            <div className="mt-10 overflow-hidden rounded-lg">
              <table className="min-w-full">
                <thead>
                  <tr className="bg-pink-100">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Material No
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Material
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Price Per Unit
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Price
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-pink-50 divide-y divide-pink-200">
                  {formData.materials.map((material) => (
                    <tr key={material.id} className="hover:bg-pink-100 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        #{material.id}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {material.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {material.quantity} {material.unit}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {material.price} LKR
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                        {Number(material.quantity) * Number(material.price)} LKR
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 space-x-2">
                        <button 
                          className="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors"
                          title="Edit item"
                          onClick={() => handleEditClick(material)}
                        >
                          <EditIcon style={{ fontSize: 20, color: '#4B5563' }} />
                        </button>
                        <button 
                          className="text-gray-600 hover:text-gray-800 p-1 rounded-full hover:bg-gray-100 transition-colors"
                          title="Delete item"
                          onClick={() => handleDeleteMaterial(material.id)}
                        >
                          <DeleteIcon style={{ fontSize: 20, color: '#4B5563' }} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Quotation Details Section (Right Side) */}
        <div className="w-96 shrink-0">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-8 border border-gray-100">
            <h2 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2">Quotation Details</h2>
            <div className="space-y-3">
              {formData.materials.map((material) => (
                <div key={material.id} className="flex justify-between items-center text-sm">
                  <span className="text-gray-600">
                    {material.name} {material.quantity}x{material.price}
                  </span>
                  <span className="text-gray-900 font-medium">
                    {Number(material.quantity) * Number(material.price)} LKR
                  </span>
                </div>
              ))}
              <div className="border-t pt-2 mt-4">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-900">Total</span>
                  <span className="font-medium text-gray-900">
                    {formData.materials.reduce((total, material) => 
                      total + (Number(material.quantity) * Number(material.price)), 0)
                    } LKR
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-6 space-y-3">
              <InvoiceDownloadButton formData={formData} />
              <button 
                onClick={handleSubmit}
                className="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-colors"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 