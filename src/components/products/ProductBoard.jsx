import React, { useEffect, useState } from 'react';
import SearchBar from '../boards/SearchBar'; // Asegúrate de que la ruta es correcta
import Pagination from '../boards/Pagination'; // Asegúrate de que la ruta es correcta
import axios from 'axios';

function ProductBoard() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      const limit = 10;
      const offset = (currentPage - 1) * limit;
      try {
        const response = await axios.get(`http://localhost:8080/products`, { 
          params: { name: searchTerm, limit: limit, offset: offset }
        });
        setProducts(response.data.products); // Asume que los productos vienen en 'data.products'
        setTotalPages(Math.ceil(response.data.total / limit)); // Asume que el total de productos viene en 'data.total'
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [currentPage, searchTerm]);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  const handleSearch = (newSearchTerm) => {
    setSearchTerm(newSearchTerm);
    setCurrentPage(1); // Regresa a la primera página para una nueva búsqueda
  };

  return (
    <div className="col-span-5">
      <div className="py-5 px-12 bg-gray-100 h-full">
      <div className="mb-4 my-6">
        <h1 className="text-2xl font-bold">Products Board</h1>
        </div>
        <SearchBar onSearch={handleSearch} />
        <div className="overflow-hidden shadow-md rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th className="px-6 py-3">ID</th>
                <th className="px-6 py-3">Code</th>
                <th className="px-6 py-3">Name</th>
                <th className="px-6 py-3">Category</th>
                <th className="px-6 py-3">Price</th>
                <th className="px-6 py-3">Length</th>
                <th className="px-6 py-3">Weight</th>
                <th className="px-6 py-3">Available</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="bg-white border-b hover:bg-gray-50">
                  <td className="px-6 py-3">{product.id}</td>
                  <td className="px-6 py-3">{product.code}</td>
                  <td className="px-6 py-3">{product.name}</td>
                  <td className="px-6 py-3">{product.categoryID}</td> 
                  <td className="px-6 py-3">${product.price.toFixed(2)}</td> 
                  <td className="px-6 py-3">{product.length}</td>
                  <td className="px-6 py-3">{product.weight}</td>
                  <td className="px-6 py-3">{product.isAvailable ? 'No' : 'Yes'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div >
        <div className="flex justify-center mt-10 mb-8 ">
            <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      </div>
    </div>
  );
}

export default ProductBoard;
