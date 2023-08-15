import { getProducts } from "@/handlers/handlers";

const Product = () => {

    const products = getProducts();
    console.log(products);

    return (
        <div className="w-full px-[60px]">
            <div className="cards w-full flex flex-wrap justify-center gap-4">
                {products.map(product =>
                (
                    <div className="w-[30%] h-[360px] border overflow-hidden shadow-sm flex flex-col items-center" key={product.id}>
                        <div className="group imgBox w-full h-[250px] overflow-hidden border-b">
                            <img src={product.Img} alt={product.Title} className="w-full h-full transtion duration-300 ease-in-out object-contain group-hover:scale-[1.05]" />
                        </div>
                        <div className="desc w-full flex flex-col items-center p-4 ">
                            <div className="w-full flex items-center justify-between">
                                <h1 className="text-lg text-[--primary-black] font-medium">{product.Cat}</h1>
                                <span>{product.Price} $</span>
                            </div>
                            <div>
                                <h1>{product.Title}</h1>
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