import { useState, type FC } from "react"

// componenta 
import SubJudulSection from "../../../components/SubJudulSection";

// fragments
import ScrollX from "../../../fragments/ScrollX";

// utils
import { Utils } from "../../../utils/utils";

// models
import type { ProductRequest } from "../../../model/product-model"

// img 


// icon
import { BsCartPlusFill } from "react-icons/bs";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import Nodata from "../../../components/Nodata";



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
            <SubJudulSection text1="featured " text2="products" />
            {/* button category */}
            <div className="flex-row-center-center gap-4 mt-7">
                {
                    category.map((item, index) => (
                        <button key={index} className={`text-xs uppercase font-semibold relative animation-underline hover:after:scale-x-100 pb-4.5 px-2 ${selected === index ? 'after:scale-x-100 text-matcha' : 'text-slate-900'}`} onClick={() => { setSelected(index), handleSetCategory(item) }}>{item}</button>
                    ))
                }
            </div>

            {/* container product */}
            <div className="w-full h-[80vh] flex-row-center-center relative before:content-[''] before:absolute before:top-0 before:w-[70%] before:h-[1px] before:bg-slate-400">
                <ScrollX>
                    {
                        data?.length === 0 ?
                            (
                                <Nodata label={'No Data Products'} />
                            ) : (
                                data?.map((item, index) => (
                                    <CardProduct key={index} data={item ?? null} />
                                ))
                            )

                    }
                </ScrollX>
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
        <div className="w-[14rem] h-[22rem] bg-white shadow-md rounded-sm flex-col-start-start py-1 overflow-hidden shrink-0">
            {/* img */}
            <div className="flex-1/16 w-full flex-col-center-center p-1 overflow-hidden group cursor-pointer">
                <div className="w-[80%] flex-col-center-center">
                    <img src={`/products/${data?.img}`} alt="pineapple" className="img-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
                </div>
            </div>
            {/* ket */}
            <div className="flex-1 w-full flex-col-start-start gap-1.5 px-4">
                <p className="text-xs italic text-matcha capitalize">{data?.category}</p>
                <h4 className="font-semibold text-sm text-slate-800 capitalize">{data?.title}</h4>
                <div className="w-full flex flex-row justify-between items-center gap-2 mb-1.5">
                    <p className="text-xs font-semibold text-orange-400">
                        {Utils.formatPrice(data?.price ?? 0)}
                    </p>
                    <p className="text-to-small font-medium text-slate-600 mb-1">Stock: <span className="font-bold">{data?.stock}</span></p>
                </div>

                <div className="w-full flex flex-row justify-between items-center">
                    {/* cart */}
                    <button className="flex-row-center-center cursor-pointer group" onClick={() => setCart(!cart)}>
                        {
                            cart ? (
                                <BsFillCartCheckFill className="text-2xl text-matcha group-hover:scale-115 transition-all duration-300 ease-in-out" />
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
