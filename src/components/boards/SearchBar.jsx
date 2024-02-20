import React from 'react';
import { RiSearchLine } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate

function SearchBar() {
  const navigate = useNavigate(); // Inicializa useNavigate

  // Función para manejar el clic en el botón
  const handleNewProductClick = () => {
    navigate('/product'); // Navega a la ruta '/product'
  };

  return (
    <div className="grid grid-cols-4 gap-4 items-center py-4">
      <form className="col-span-2 ">
        <div className="relative ">
          <RiSearchLine className="absolute left-2 top-3 text-gray-500" />
          <input type="text" className="bg-white py-2 pl-8 pr-4 outline-none w-full rounded-xl overflow-hidden shadow-md" placeholder="Search" />
        </div>
      </form>
      <form className="col-span-1">
        <div className="relative">
          <select className="bg-white overflow-hidden shadow-md text-gray-400 py-2.5 pl-2 pr-2 outline-none w-full text-left rounded-xl">
            <option>Categories</option>
          </select>
        </div>
      </form>
      <div className="col-span-1 flex justify-end">
        <button onClick={handleNewProductClick} className="bg-white text-gray-500 py-2 px-4 rounded-xl font-semibold hover:bg-gray-50 overflow-hidden shadow-md">
          New Product
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
