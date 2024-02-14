import React from 'react';
import { RiSearchLine, RiFilter3Line } from 'react-icons/ri';

function SearchBar() {
  return (
    <div className="grid grid-cols-4 gap-4 items-center py-4">
      <form className="col-span-2">
        <div className="relative">
          <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
          <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl" placeholder="Search" />
        </div>
      </form>
      <form className="col-span-1">
        <div className="relative">
          <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
          <select className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl">
            <option>Any</option>
          </select>
        </div>
      </form>
      <form className="col-span-1">
        <div className="relative">
          <RiFilter3Line className="absolute left-2 top-3 text-gray-500" />
          <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl" placeholder="Filters" />
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
