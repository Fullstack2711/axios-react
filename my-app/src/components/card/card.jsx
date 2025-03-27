import axios from "axios";
import { useState } from "react";

function Card() {
    const [addproduct, setAddproducts] = useState({
        title: "",
        price: "",
        description: "",
        image: "",
    });

    const handleChange = (e) => {
        setAddproducts({ ...addproduct, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:4000/products/add", addproduct);
            setAddproducts({ title: "", price: "", description: "", image: "" });
            alert("Product added successfully!");
        } catch (error) {
            console.log(error);
            alert("Failed to add product.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name="title"
                    value={addproduct.title}
                    placeholder="Enter product name"
                    onChange={handleChange}
                    className="block w-full p-2 border rounded"
                    required
                />
                <input
                    type="number"
                    name="price"
                    value={addproduct.price}
                    placeholder="Enter product price"
                    onChange={handleChange}
                    className="block w-full p-2 border rounded"
                    required
                />
                <input
                    type="text"
                    name="description"
                    value={addproduct.description}
                    placeholder="About product?"
                    onChange={handleChange}
                    className="block w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="image"
                    value={addproduct.image}
                    placeholder="Image URL"
                    onChange={handleChange}
                    className="block w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
}

export default Card;
