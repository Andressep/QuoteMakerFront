import React from 'react';
import SearchBar from './SearchBar';
import Pagination from './Pagination';

function Board2() {
  // Datos de ejemplo para llenar la tabla
  const data = [
    { id: 1, name: 'Producto 1', category: 'Electrónica', price: '$100' },
    { id: 2, name: 'Producto 2', category: 'Librería', price: '$200' },
    { id: 3, name: 'Producto 3', category: 'Hogar', price: '$300' },
    { id: 4, name: 'Producto 4', category: 'Jardinería', price: '$400' },
    { id: 5, name: 'Producto 5', category: 'Electrónica', price: '$500' },
    { id: 6, name: 'Producto 6', category: 'Moda', price: '$600' },
    { id: 7, name: 'Producto 7', category: 'Hogar', price: '$700' },
    { id: 8, name: 'Producto 8', category: 'Jardinería', price: '$800' },
    { id: 9, name: 'Producto 9', category: 'Librería', price: '$900' },
    { id: 10, name: 'Producto 10', category: 'Electrónica', price: '$1000' },
  ];
  
  

  return (
    <div className="col-span-5">
        <div className="py-5 px-12 bg-gray-100 h-full">
            <div className="mb-8">
              <h1 className="text-2xl font-bold">Job Board</h1>
            </div>
            <SearchBar/>
            <div className="overflow-hidden shadow-md rounded-lg">
                <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-white border-b">
                        <tr>
                            <th className="px-6 py-3">ID</th>
                            <th className="px-6 py-3">Nombre</th>
                            <th className="px-6 py-3">Categoría</th>
                            <th className="px-6 py-3">Precio</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item) => (
                        <tr className="bg-white border-b hover:bg-gray-50 " key={item.id}>
                            <td className="px-6 py-3" >{item.id}</td>
                            <td className="px-6 py-3" >{item.name}</td>
                            <td className="px-6 py-3" >{item.category}</td>
                            <td className="px-6 py-3" >{item.price}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="flex justify-center mt-10 mb-8">
                <Pagination />
            </div>
        </div>
    </div>
  );
}

export default Board2;
