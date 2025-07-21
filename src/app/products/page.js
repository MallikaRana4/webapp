'use client';
import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [Title, setTitle] = useState([]);
    const [Price, setPrice] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const addProduct = async () => {
        const response = await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ Title, Price }),
        });
        const data = await response.json();
        setProducts([...products, data]);
    };

    const deleteProduct = async (id) => {
        const response = await fetch(`http://localhost:8000/api/products/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            method: 'DELETE',
        });
        const data = await response.json();
        setProducts(products.filter((product) => product.id !== id));
    }

    const fetchProducts = async () => {
        const response = await fetch('http://localhost:8000/api/products');
        const data = await response.json();
        setProducts(data);
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    

    const filteredProducts = products.filter((product) =>
        product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

            <div className="mb-6">
                <input
                    type="text"
                    className="w-128 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className=" max-w-md  bg-sky-500 hover:bg-sky-600 text-white mx-4 px-4 py-2 rounded-md transition"
                    onClick={(e) => {setSearchTerm(searchQuery);setSearchTerm(e.target.value); }}
                >
                    Search
                </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <input
                    className="flex-1 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    type="text"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                <input
                    className="flex-1 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    type="number"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
                <button
                    className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
                    onClick={addProduct}
                >
                    Add Product
                </button>
            </div>

            {/* Product List */}
            <ul className="space-y-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="flex justify-between items-center p-4 bg-gray-100 rounded-md shadow-sm"
                    >
                        <span className="text-lg font-medium">
                            {product.Title} - ${product.Price}
                        </span>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md transition"
                            type="button"
                            onClick={() => deleteProduct(product.id)}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

//Edit Form
//CSS
//SEARCH BAR 