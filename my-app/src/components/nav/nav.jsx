import axios from "axios";
import React, { useEffect, useState } from "react";

const ProductCard = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:4000/products/all')
            .then((response) => {
                setProducts(response.data);
                console.log(response.data);
            })
            .catch((error) => {
                console.error("Error fetching products:", error);
            });
    }, []);


    const handleDelete = async (id) => {
        try {
            await axios
                .delete(`http://localhost:4000/products/delete/${id}`)
            setProducts((products.filter((product) => product.id !== id)))
        } catch (error) {
            console.log(error);

        }
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
                <div key={product.id} className="max-w-md mx-auto rounded-md overflow-hidden shadow-md hover:shadow-lg">
                    <div className="relative">
                        <img
                            className="w-full"
                            src={product.image  }
                            alt={product.name }
                        />
                        <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
                           {product.title}
                        </div>
                    </div>
                    <div className="p-4">
                        <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            {product.description}
                        </p>
                        <div className="flex items-center justify-between">
                            <span className="font-bold text-lg">${product.price}</span>
                            <button onClick={() => handleDelete(product.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;












