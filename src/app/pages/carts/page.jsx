'use client'
import { Products } from "@/data/products";
import Link from "next/link";
import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

const CartPage = () => {

    const [noOfProducts, setNoOfProducts] = useState(0);
    const [productPrice, setProductPrice] = useState()
    let totalPrice = 0;
     Products.forEach((item) => {
        totalPrice += +item.Price;
    })


    return (
        <div className="w-full h-full px-[60px]">

            <div className="title flex flex-col gap-3 p-4">
                <h1 className="text-3xl font-medium">Shopping Cart</h1>
                <p className="text-[#999]">you have {Products.length} items in shopping cart</p>
            </div>

            <div className="shoppingCart w-full h-[500px] mt-4 border overflow-scroll overflow-x-hidden">
                <div className="products w-full h-full flex flex-col items-center gap-2">
                    {Products.map((item) => (
                        <div className="w-full h-[300px] flex items-center justify-around gap-4 border-b" key={item.id}>
                            <div className="imgBox w-[280px] h-full">
                                <img src={item.Img} alt={item.Title} className="w-full object-cover" />
                            </div>

                            <div className="productTitle">
                                <h2 className="text-xl font-medium">{item.Cat}</h2>
                            </div>

                            <div className="noOfProducts flex items-center gap-4">
                                <span className="text-xl cursor-pointer" onClick={() => setNoOfProducts(noOfProducts - 1)}>-</span>
                                <h2 className="px-4 py-1 border">{noOfProducts}</h2>
                                <span className="text-xl cursor-pointer" onClick={() => setNoOfProducts(noOfProducts + 1)}>+</span>
                            </div>

                            <div className="productsPrice">
                                <h2 className="text-lg font-medium">{item.Price}$</h2>
                            </div>

                            <div className="cursor-pointer">
                                <AiFillDelete className="text-2xl text-red-500" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="totalPrice w-full flex flex-col gap-3 items-end justify-end p-4">
                <div className="flex items-center gap-3">
                    <h2 className="text-xl">Card Total :</h2>
                    <span className="text-xl">{totalPrice}$</span>
                </div>
                <div className="border p-3 cursor-pointer">
                    <Link href={'/pages/products'}>back To Shopping</Link>
                </div>
            </div>
        </div>
    )
}

export default CartPage;