import { useState, type FC } from "react"


// img 
import type { ProductRequest } from "../../../model/product-model"
import { formatPrice } from "../../../utils/formatPrice"


// icon
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";


// type 
type SectionFeatureProductProps = {
    data: ProductRequest[] | null
    handleSetCategory: (category: string) => void
}


const SectionFeatureProduct: FC<SectionFeatureProductProps> = ({ data, handleSetCategory }) => {
    // state 
    const [selected, setSelected] = useState<number>(0)
    // list category
    const category: string[] = ['organic', 'fruits', 'seafood', 'wine & beer', 'bakery']


    return (
        <div className="w-full min-h-[100vh] flex-col-start-center pt-2 mb-12">
            <h2 className="text-lg font-bold uppercase mb-5"><span className="text-matcha">featured</span> products</h2>
            {/* button category */}
            <div className="flex-row-center-center gap-4">
                {
                    category.map((item, index) => (
                        <button key={index} className={`text-xs uppercase font-semibold relative animation-underline hover:after:scale-x-100 pb-4.5 px-2 ${selected === index ? 'after:scale-x-100 text-matcha' : 'text-slate-900'}`} onClick={() => { setSelected(index), handleSetCategory(item) }}>{item}</button>
                    ))
                }
            </div>

            {/* container product */}
            <div className="w-full h-[80vh] flex-row-center-center relative before:content-[''] before:absolute before:top-0 before:w-[70%] before:h-[1px] before:bg-slate-400">
                <div className="w-[95%] h-full flex-row-start-center gap-5 overflow-auto custom-scrollbar">
                    {
                        data?.length === 0 ?
                            (
                                <h4 className="text-lg font-bold text-slate-500">No data</h4>
                            ) : (
                                data?.map((item, index) => (
                                    <CardProduct key={index} data={item ?? null} />
                                ))
                            )

                    }
                </div>
            </div>
        </div>
    )
}

type CardProductProps = {
    data?: ProductRequest | null
}

// card product
const CardProduct: FC<CardProductProps> = ({ data }) => {
    // state
    const [cart, setCart] = useState<boolean>(false)


    return (
        <div className="w-[14rem] h-[24rem] bg-white shadow-md rounded-sm flex-col-start-start py-1 overflow-hidden shrink-0">
            {/* img */}
            <div className="flex-1/16 w-full flex-col-center-center p-1 overflow-hidden group cursor-pointer">
                <div className="w-[80%] flex-col-center-center">
                    <img src={`../../../public/products/${data?.img}`} alt="pineapple" className="img-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
                </div>
            </div>
            {/* ket */}
            <div className="flex-1 w-full flex-col-start-start gap-1.5 px-4">
                <p className="text-xs italic text-matcha capitalize">{data?.category}</p>
                <h4 className="font-semibold text-sm text-slate-800 capitalize">{data?.title}</h4>
                <p className="text-xs font-semibold text-orange-400">
                    {formatPrice(data?.price ?? 0)}
                </p>
                <p className="text-to-small font-medium text-slate-600 mb-2">Stock: <span className="font-bold">{data?.stock}</span></p>
                <div className="w-full flex flex-row justify-between items-center">
                    {/* cart */}
                    <button className="flex-row-center-center cursor-pointer group" onClick={() => setCart(!cart)}>
                        {
                            cart ? (
                                <BsFillCartCheckFill className="text-2xl text-slate-800 group-hover:scale-115 transition-all duration-300 ease-in-out" />
                            ) : (

                                <BsCartPlusFill className="text-2xl text-slate-800 group-hover:scale-115 transition-all duration-300 ease-in-out" />
                            )
                        }
                    </button>
                    <div className="flex-row-center-center gap-2">
                        <button className="p-2 bg-slate-200 rounded-full cursor-pointer">
                            <FaRegHeart className="text-sm" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFeatureProduct
