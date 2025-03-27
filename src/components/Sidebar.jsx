import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const Sidebar = () => {
  return (
    <nav className="w-64 bg-white sidebar">
      {/* Breadcrumb */}
      <div className="flex items-center text-sm py-2">
        <a href="/" className="text-[#1D372E] hover:underline">Home</a>
        <span className="mx-2">/</span>
        <a href="/ramadan" className="text-[#1D372E]">Ramadan</a>
      </div>

      {/* Categories List */}
      <div className="py-2">
        <div className="bg-[#5CAF90] text-white py-2.5 px-4 flex items-center justify-between rounded-r-full">
          <span className="font-medium">All Items</span>
          <DoubleArrowIcon className="h-5 w-5 text-white" />
        </div>

        <ul className="text-gray-700">
          <li>
            <a href="/home-needs" className="block px-4 py-2 hover:text-[#1D372E] transition-colors">
              Home Needs
            </a>
          </li>
          <li>
            <a href="/cosmetics" className="block px-4 py-2 hover:text-[#1D372E] transition-colors">
              Clothing
            </a>
          </li>
          <li>
            <a href="/clothing" className="block px-4 py-2 hover:text-[#1D372E] transition-colors">
              Cosmetics
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar; 