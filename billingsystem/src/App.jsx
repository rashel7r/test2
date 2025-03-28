import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom'
import BillingForm from './components/BillingForm'
import ProjectServices from './components/ProjectServices'

function App() {
  return (
    <Router>
      <div>
        {/* Navigation */}
        <nav className="bg-white shadow-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="flex space-x-8">
                  <Link
                    to="/billing"
                    className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-pink-500"
                  >
                    Billing
                  </Link>
                  <Link
                    to="/services"
                    className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-pink-500"
                  >
                    Projects
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Navigate to="/billing" replace />} />
          <Route path="/billing" element={<BillingForm />} />
          <Route path="/services" element={<ProjectServices />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
