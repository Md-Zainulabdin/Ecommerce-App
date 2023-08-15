'use client'
import { Products } from "@/data/products";
import { useState } from "react";

const ProductPage = () => {

    const [product, setProduct] = useState(Products);

    const filterProduct = (cat) => {
            const updateProduct = Products.filter(item => item.Cat === cat);
            setProduct(updateProduct)
            console.log(product);
    }

    const allProducts = () => {
        setProduct(Products)
    }

    return (
        <div className="w-full h-screen mb-6 flex fixed overflow-hidden">
            <div className="category w-[20%] h-screen overflow-hidden border-r-2">
                <div className="p-6">
                    <h2 className="text-xl font-medium">Category :</h2>
                    <ul className="mt-4 flex flex-col gap-3 text-lg cursor-pointer">
                        <li className="py-2 border-b" onClick={() => allProducts("All")}>All</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Tablet")}>Tablet</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Headphone")}>Headphone</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Camera")}>Camera</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Powerbank")}>Powerbank</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Gaming")}>Gaming</li>
                        <li className="py-2 border-b" onClick={() => filterProduct("Smart Watch")}>Smart Watch</li>
                    </ul>
                </div>
            </div>
            <div className="products w-[80%] h-full p-4 overflow-scroll">
                <div className="title p-4">
                    <h1 className="text-3xl font-semibold">Products</h1>
                </div>
                <div className="w-full products flex flex-wrap justify-center gap-4 py-6">
                    {product.map((item) =>
                    (
                        <div className="w-[30%] border overflow-hidden shadow-sm flex flex-col items-center cursor-pointer" key={item.id}>
                            <div className="group imgBox w-full h-[250px] overflow-hidden border-b">
                                <img src={item.Img} alt={item.Title} className="w-full h-full transtion duration-300 ease-in-out object-contain group-hover:scale-[1.05]" />
                            </div>
                            <div className="desc w-full flex flex-col items-center p-4 ">
                                <div className="w-full flex items-center justify-between">
                                    <h1 className="text-lg text-[--primary-black] font-medium">{item.Cat}</h1>
                                    <span className="text-lg text-red-600">{item.Price} $</span>
                                </div>
                                <div className="w-full py-2">
                                    <h1 className="text-sm text-left">{item.Title}</h1>
                                </div>
                                <div className="w-full mt-2">
                                    <button className="w-full p-2 border text-white bg-orange-400">Add to Cart</button>
                                </div>
                            </div>
                        </div>
                    )
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductPage;