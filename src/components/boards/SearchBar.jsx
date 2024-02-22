import React, { useState } from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';

function SearchBar({ onSearch }) {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();
  
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value); 
    };
    const handleNewProductClick = () => {
        navigate('/product'); 
    };

    return (
        <div className="grid grid-cols-4 gap-4 items-center py-4">
            <form className="col-span-2"> {/* Remove onSubmit for now */}
                <div className="relative">
                    <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
                    <input
                    type="text"
                    className="bg-white py-2 pl-10 pr-4 outline-none w-full rounded-xl overflow-hidden shadow-md"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    />
                </div>
            </form>
            <div className="col-span-1">
                <select className="bg-white overflow-hidden shadow-md text-gray-500 py-2.5 pl-2 pr-10 outline-none w-full text-left rounded-xl">
                    <option value="">All Categories</option>
                </select>
            </div>
            <div className="col-span-1 flex justify-end">
                <button onClick={handleNewProductClick} className="bg-white text-gray-500 py-2 px-4 rounded-xl font-semibold hover:bg-gray-50 overflow-hidden shadow-md">
                    New Product
                </button>
            </div>
        </div>
    );
}

export default SearchBar;
