import { type FC } from 'react'

// icons
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaRegHandPointLeft } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
import { FaBox } from "react-icons/fa";
import { LuCarrot } from "react-icons/lu";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { PiBreadBold } from "react-icons/pi";
import { GiWineBottle } from "react-icons/gi";
import { TbSeeding } from "react-icons/tb";


// img 
import bread from '../../../assets/category/bread.jpg'
import cereal from '../../../assets/category/cereal.jpg'
import nuts from '../../../assets/category/nuts.jpg'
import veges from '../../../assets/category/veges.png'
import wine from '../../../assets/category/wine.jpg'

const SectionTwo: FC = () => {
    return (
        <div className="min-h-[100vh] w-full flex flex-col justify-start items-start pt-28 gap-12 pb-12">
            {/* feedback */}
            <div className="w-full flex flex-row justify-center items-center px-32 gap-4">
                {/* card */}
                <CardFeedback text1='100%' text2='Satisfaction'>
                    <FaRegFaceSmile className='text-3xl text-matcha' />
                </CardFeedback>
                <CardFeedback text1='Save 20%' text2='When You'>
                    <FaRegHandPointLeft className='text-3xl text-matcha' />
                </CardFeedback>
                <CardFeedback text1='Fast Free' text2='Shipment'>
                    <FaRegPaperPlane className='text-3xl text-matcha' />
                </CardFeedback>
                <CardFeedback text1='14-Day' text2='Money Back'>
                    <FaBox className='text-3xl text-matcha' />
                </CardFeedback>
            </div>
            {/* category */}
            <div className='w-full h-[90vh] grid grid-cols-3 grid-rows-1 px-12 gap-4'>
                <div className='col-span-1 row-span-1 bg-matcha overflow-hidden rounded-md relative cursor-pointer group'>
                    <img src={veges} alt="category" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                    <CardInCategory text1='Fresh' text2='& Veges' >
                        <LuCarrot className='text-2xl text-matcha' />
                    </CardInCategory>
                </div>
                <div className='col-span-2 row-span-1 grid grid-cols-3 grid-rows-2 gap-4 rounded-md'>
                    <div className='col-span-2 row-span-1 rounded-md overflow-hidden cursor-pointer group relative'>
                        <img src={cereal} alt="category" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Breakfast' text2='& Cereal' >
                            <MdOutlineFreeBreakfast className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>
                    <div className='col-span-1 row-span-1 rounded-md overflow-hidden cursor-pointer group relative'>
                        <img src={bread} alt="category" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Bread' text2='& Pastries' >
                            <PiBreadBold className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>
                    <div className='col-span-1 row-span-2 rounded-md overflow-hidden cursor-pointer group relative'>
                        <img src={wine} alt="category" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Bear, Wine' text2='& Spirits' >
                            <GiWineBottle className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>
                    <div className='col-span-2 row-span-2 rounded-md overflow-hidden cursor-pointer group relative'>
                        <img src={nuts} alt="category" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Seeds' text2='& Nuts' >
                            <TbSeeding className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>
                </div>
            </div>
        </div>
    )
}

type CardFeedbackProps = {
    children: React.ReactNode;
    text1: string;
    text2: string
}

// card feedback
const CardFeedback: FC<CardFeedbackProps> = ({ children, text1, text2 }) => {
    return (
        <div className='flex flex-col justify-start items-start gap-4'>
            <div className='flex flex-row justify-start items-center gap-2'>
                {children}
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-xs font-semibold'>{text1}</p>
                    <p className='text-xs font-semibold'>{text2}</p>
                </div>
            </div>
            <p className='text-to-small font-normal text-slate-600'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam in itaque fugit unde autem? Beatae, dolor error! A</p>
        </div>

    )
}



// card in category
const CardInCategory: FC<CardFeedbackProps> = ({ children, text1, text2 }) => {
    return (
        <div className='w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center'>

            <div className='flex flex-row justify-center items-center gap-2 bg-white px-4 py-3 rounded-sm'>
                {children}
                <div className='flex flex-col justify-start items-start'>
                    <p className='text-xs font-semibold text-slate-600'>{text1}</p>
                    <p className='text-xs font-semibold text-slate-600'>{text2}</p>
                </div>
            </div>
        </div>
    )
}

export default SectionTwo
