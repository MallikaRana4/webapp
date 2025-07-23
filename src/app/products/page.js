'use client';
import { useState, useEffect } from "react";

export default function Products() {
    const [products, setProducts] = useState([]);
    const [Title, setTitle] = useState('');
    const [Price, setPrice] = useState('');
    const [editingProductId, setEditingProductId] = useState(null);
    const [validationError, setValidationError] = useState({});
    const [successMessage, setSuccessMessage] = useState('');


    // const [searchTerm, setSearchTerm] = useState('');
    // const [searchQuery, setSearchQuery] = useState('');

    const addProduct = async () => {
        const response = await fetch('http://localhost:8000/api/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ Title, Price }),
        });
        console.log(response.status);
        const data = await response.json();
        if (response.ok) {
            setProducts([...products, data]);
            setTitle('');
            setPrice('');
            setValidationError({});
            setSuccessMessage('Product added successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } else {
            setValidationError(data.errors);
        }
    };

    const updateProduct = async (id) => {
        const response = await fetch(`http://localhost:8000/api/products/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({ Title, Price }),
        });
        const data = await response.json();
        if (response.ok) {
            setProducts(products.map((product) => product.id === id ? data : product));
            setEditingProductId(null);
            setTitle('');
            setPrice('');
            setSuccessMessage('Product updated successfully!');
            setTimeout(() => setSuccessMessage(''), 3000);
        } else {
            setValidationError(data.errors);
        }

    }

    const editProduct = async (id) => {
        setEditingProductId(id)
        const product = products.find((product) => product.id == id);
        setTitle(product.Title);
        setPrice(product.Price);
    }

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



    // const filteredProducts = products.filter((product) =>
    //     //product.Title.toLowerCase().includes(searchTerm.toLowerCase())
    // );

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Products</h1>

            {/* <div className="mb-6">
                <input
                    type="text"
                    className="w-128 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    placeholder="Search by title..."
                    value={searchTerm}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                    className=" max-w-md  bg-sky-500 hover:bg-sky-600 text-white mx-4 px-4 py-2 rounded-md transition"
                    onClick={(e) => { setSearchTerm(searchQuery); setSearchTerm(e.target.value); }}
                >
                    Search
                </button>
            </div> */}

            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
                <input
                    className="flex-1 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    type="text"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                />
                {validationError.Title && <p className="text-red-500">{validationError.Title}</p>}
                <input
                    className="flex-1 border-2 border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-black-400"
                    type="number"
                    value={Price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Price"
                />
                {validationError.Price && <p className="text-red-500">{validationError.Price}</p>}
                {editingProductId ? (
                    <button
                        className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        onClick={() => updateProduct(editingProductId)}>
                        Update Button
                    </button>
                ) : (
                    <button
                        className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md"
                        onClick={() => addProduct()}
                    >
                        Add Product
                    </button>
                )}
            </div>

            {successMessage && (
                <div className="mb-4 p-3 text-green-700 bg-green-100 border border-green-300 rounded">
                    {successMessage}
                </div>
            )}

            <ul className="space-y-4">
                {products.map((product) => (
                    <li
                        key={product.id}
                        className="flex  items-center p-4 bg-gray-100 rounded-md shadow-sm"
                    >
                        <span className="text-lg font-medium">
                            {product.Title} - ${product.Price}
                        </span>
                        <button
                            className="bg-yellow-500 hover:bg-yellow-600 text-white mx-4 px-4 py-2 rounded-md"
                            onClick={() => editProduct(product.id)}
                        >
                            Edit
                        </button>
                        <button
                            className="bg-red-500 hover:bg-red-600 text-white mx-4 px-4 py-2 rounded-md transition"
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