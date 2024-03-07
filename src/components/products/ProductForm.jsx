import React, { useState } from 'react';
import axios from 'axios'; 

function ProductForm() {

  const initialValues = {
    name: '',
    category_id: '',
    length: 1,
    price: 1,
    weight: 1,
    code: '',
  }

  const [product, setProduct] = useState(initialValues);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Si el valor proporcionado es vacío, establece el valor predeterminado como 1
    const newValue = name === 'category_id' ? parseInt(value) : value;
    setProduct({
      ...product,
      [name]: newValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    try {
      const response = axios.post('http://localhost:8080/products', product, {
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.status === 201) {
        // Maneja la respuesta exitosa
        console.log('Producto creado correctamente!');
        // Podrías limpiar el formulario o mostrar un mensaje de éxito
      } else {
        // Maneja la respuesta fallida
        console.error('Error al crear el producto:', response.statusText);
        // Podrías mostrar un mensaje de error al usuario
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
      // Podrías mostrar un mensaje de error genérico al usuario
    }
  };

  return (
    <div className="col-span-5">
        <div className="flex flex-col items-center py-5 px-12 bg-gray-100 h-full">
          <div className='w-1/2 mt-5'>
            <div className="mb-4 mt-8">
              <h1 className="text-2xl font-bold">Create New Product</h1>
            </div>
            <div className='flex flex-col'>
              <form onSubmit={handleSubmit} className="w-10/12 justify-start  space-y-4 bg-white p-4 rounded-lg shadow-md pb-16">
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="code" value={product.code} onChange={handleChange} id="code" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="code" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Code</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" value={product.name} onChange={handleChange} id="name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="price" value={product.price} onChange={handleChange} id="price" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                    <label htmlFor="price" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Price $</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="weight" value={product.weight} onChange={handleChange} id="weight" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                    <label htmlFor="weight" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Weight</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="length" value={product.length}  onChange={handleChange} id="length" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                    <label htmlFor="length" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Length</label>                    
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="number" name="category_id" id="category_id" value={product.category_id || ''} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-400 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "/>
                    <label htmlFor="category_id" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Category</label>
                </div>
                <div className='w-full flex justify-end pr-24'>
                <button type="submit" className="bg-white  text-gray-500 py-2 my-5 px-4 rounded-xl font-semibold hover:bg-gray-50 overflow-hidden shadow-md">
                  Create Product
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
    </div>

  );
}

export default ProductForm;
