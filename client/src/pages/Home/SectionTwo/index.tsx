import { type FC, type ReactNode } from 'react'

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
import { Parallax } from '../../../hooks/useParallax';

type FeedbackItem = {
    text1: string;
    text2: string;
    icon: ReactNode;
};

const SectionTwo: FC = () => {

    // feedback item
    const feedbackData: FeedbackItem[] = [
        { text1: '100%', text2: 'Satisfaction', icon: <FaRegFaceSmile className='text-2xl text-matcha' /> },
        { text1: 'Save 20%', text2: 'When You', icon: <FaRegHandPointLeft className='text-2xl text-matcha' /> },
        { text1: 'Fast Free', text2: 'Shipment', icon: <FaRegPaperPlane className='text-2xl text-matcha' /> },
        { text1: '14-Day', text2: 'Money Back', icon: <FaBox className='text-2xl text-matcha' /> },
    ];




    // parallax content one 
    const parallaxTriggers = feedbackData.map((_, i) => Parallax.useScrollTrigger(200, i * 200));


    // parallax content two 
    const parallax1 = Parallax.useScrollTrigger(430, 0);
    const parallax2 = Parallax.useScrollTrigger(430, 200);
    const parallax3 = Parallax.useScrollTrigger(500, 400);
    const parallax4 = Parallax.useScrollTrigger(500, 600);

    return (
        <div className="min-h-[100vh] w-full flex flex-col justify-start items-start pt-28 gap-12 pb-20">
            {/* feedback */}
            <div className="w-full flex flex-row justify-center items-center px-32 gap-4">
                {/* card */}
                {
                    feedbackData.map((item, i) => (
                        <CardFeedback key={i} text1={item.text1} text2={item.text2} parallax={parallaxTriggers[i]} >
                            {item.icon}
                        </CardFeedback>
                    ))
                }
            </div>
            {/* category */}
            <div className='w-full h-[90vh] grid grid-cols-3 grid-rows-1 px-12 gap-4'>
                <div className={`col-span-1 row-span-1 bg-matcha overflow-hidden rounded-md relative cursor-pointer group transisi-700 ${parallax4 ? 'parallax-0' : 'parallax-x-left-10'}`}>
                    <img src={veges} alt="vegetable" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                    <CardInCategory text1='Fresh' text2='& Veges' >
                        <LuCarrot className='text-2xl text-matcha' />
                    </CardInCategory>
                </div>
                <div className='col-span-2 row-span-1 grid grid-cols-3 grid-rows-2 gap-4 rounded-md'>
                    {/* breakfast */}
                    <div className={`col-span-2 row-span-1 rounded-md overflow-hidden cursor-pointer group relative transisi-700 ${parallax1 ? 'parallax-0' : 'translate-y-30 opacity-0'}`}>
                        <img src={cereal} alt="cerela" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Breakfast' text2='& Cereal' >
                            <MdOutlineFreeBreakfast className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>

                    {/* bread */}
                    <div className={`col-span-1 row-span-1 rounded-md overflow-hidden cursor-pointer group relative transisi-700 ${parallax2 ? 'parallax-0' : 'translate-y-30 opacity-0'}`}>
                        <img src={bread} alt="bread" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Bread' text2='& Pastries' >
                            <PiBreadBold className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>

                    {/* wine */}
                    <div className={`col-span-1 row-span-2 rounded-md overflow-hidden cursor-pointer group relative transisi-700 ${parallax3 ? 'parallax-0' : 'translate-y-30 opacity-0'}`}>
                        <img src={wine} alt="wine" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
                        <CardInCategory text1='Bear, Wine' text2='& Spirits' >
                            <GiWineBottle className='text-2xl text-matcha' />
                        </CardInCategory>
                    </div>
                    {/* nuts */}
                    <div className={`col-span-2 row-span-2 rounded-md overflow-hidden cursor-pointer group relative transisi-700 ${parallax4 ? 'parallax-0' : 'translate-y-30 opacity-0'}`}>
                        <img src={nuts} alt="nuts" className='img-cover group-hover:scale-105 duration-500 ease-in-out' />
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
    parallax?: boolean
}

// card feedback
const CardFeedback: FC<CardFeedbackProps> = ({ children, text1, text2, parallax }) => {
    return (
        <div className={`flex flex-col justify-start items-start gap-4 transisi-700 ${parallax ? 'parallax-0' : 'parallax-x-right-30'}`}>
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
