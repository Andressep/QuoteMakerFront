import React, { useState } from 'react';

function ProductForm() {
  const [product, setProduct] = useState({
    code: '',
    description: '',
    quantity: '',
    category: '',
    price: '',
    weight: '',
    length: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    // Aquí podrías llamar a una API para guardar el producto
    // o manejar el estado de forma correspondiente.
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded-lg shadow-md">
      <div>
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Code</label>
        <input type="text" name="code" id="code" value={product.code} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
        <input type="text" name="description" id="description" value={product.description} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input type="number" name="quantity" id="quantity" value={product.quantity} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
        <input type="text" name="category" id="category" value={product.category} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">Price</label>
        <input type="number" name="price" id="price" value={product.price} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="weight" className="block text-sm font-medium text-gray-700">Weight</label>
        <input type="number" name="weight" id="weight" value={product.weight} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <div>
        <label htmlFor="length" className="block text-sm font-medium text-gray-700">Length</label>
        <input type="number" name="length" id="length" value={product.length} onChange={handleChange} className="mt-1 block w-full border-gray-300 shadow-sm rounded-md" />
      </div>
      <button type="submit" className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
        Create Product
      </button>
    </form>
  );
}

export default ProductForm;
