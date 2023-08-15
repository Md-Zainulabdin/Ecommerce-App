import { Products } from "@/data/products";

const Product = () => {

    return (
        <div className="w-full px-[60px] py-6">
            <div className="p-8">
                <h1 className="text-3xl font-bold text-[--primary-black]">Products :</h1>
            </div>
            <div className="cards w-full flex flex-wrap justify-center gap-4">
                {Products.map(product =>
                (
                    <div className="w-[30%] border overflow-hidden shadow-sm flex flex-col items-center cursor-pointer" key={product.id}>
                        <div className="group imgBox w-full h-[250px] overflow-hidden border-b">
                            <img src={product.Img} alt={product.Title} className="w-full h-full transtion duration-300 ease-in-out object-contain group-hover:scale-[1.05]" />
                        </div>
                        <div className="desc w-full flex flex-col items-center p-4 ">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="text-lg text-[--primary-black] font-medium">{product.Cat}</h1>
                                <span className="text-lg text-red-600">{product.Price} $</span>
                            </div>
                            <div className="w-full py-2">
                                <h1 className="text-sm text-left">{product.Title}</h1>
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
    )
}

export default Product;