import type { FC } from "react"


// img 
import chef from '../../../assets/people/chef-shadow.png'
import fastFood from '../../../assets/info/fast-food.png'
import ourDrink from '../../../assets/info/our-drink.png'

// icon
import { BiSolidQuoteRight } from "react-icons/bi";


// swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

// swiper css
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



const SectionClientSays: FC = () => {
    return (
        <div className="w-full h-[140vh] flex-col-start-center">
            {/* content  one */}
            <div className="flex-1 w-full flex-col-start-center pt-16 gap-3">
                <h3 className="text-lg font-bold uppercase">
                    <span className="text-matcha">client</span> says
                </h3>
                <p className="text-xs text-slate-500 w-[40%] text-center mb-10">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque consequuntur nesciunt est eum voluptates  libero.
                </p>
                {/* chef info */}
                <div className="w-[70%] relative">
                    <SwiperComponent />
                </div>
            </div>
            <div className="flex-1 w-full h-full mt-12 flex-row-center-center gap-4">
                <div className="flex-1 flex flex-row justify-end items-center">
                    <CardInfo img="fast-food" tittle="fast food recipes" desc="fresh, nourishing and always delicious. Check out our favorite recipes for a fruity revival" button="view recipes" />
                </div>
                <div className="flex-1 flex flex-row justify-start items-center">
                    <CardInfo img="drink" tittle="our drink" desc="To create the perfect juice nature does all the work." button="see our range" />
                </div>
            </div>
        </div>
    )
}

type ChefInfoProps = {
    children: React.ReactNode
}

// chef 
const ChefInfo: FC<ChefInfoProps> = ({ children }) => {
    return (
        <div className="flex-row-start-start h-[50%] px-5 w-full">
            {/* thumb */}
            {children}
            {/* info */}
            <div className="flex-1/12 flex-col-start-start pl-5">
                <p className="text-sm text-slate-500 w-[80%] leading-5.5 mb-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit consectetur delectus, tenetur autem aspernatur perferendis! Ratione facere quibusdam debitis distinctio veniam neque aspernatur dolores?</p>
                {/* info chef */}
                <div className="flex-row-start-center gap-3">
                    <div className="relative">
                        <div className="w-[3rem] h-[3rem] bg-gray-400 rounded-full overflow-hidden flex-row-center-center pt-5 border-2 border-white group">
                            <div className="w-[4rem] h-[4rem] bg-gray-400 rounded-full overflow-hidden cursor-pointer group-hover:scale-105 transition-all duration-300 ease-in-out">
                                <img src={chef} alt="chef men" className="img-cover" />
                            </div>
                            {/* colon */}
                            <div className="absolute bottom-0 right-0 flex-row-center-center p-1 rounded-full bg-matcha -gap-0 z-2">
                                <BiSolidQuoteRight className="text-to-small text-white" />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col-start-start gap-1">
                        <p className="text-xs text-slate-600 font-bold">Jone Day</p>
                        <p className="text-to-small text-matcha ">Ceo & Co</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// swiper
const SwiperComponent: FC = () => {
    return (
        <>
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom absolute top-1/3 -left-6 z-10 transform -translate-y-1/2 bg-transparent border border-slate-400 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                <FaArrowLeftLong className="text-xs" />
            </div>
            <div className="swiper-button-next-custom absolute top-1/3 -right-6 z-10 transform -translate-y-1/2 bg-transparent border border-slate-400 rounded-full w-8 h-8 flex items-center justify-center cursor-pointer">
                <FaArrowRightLong className="text-xs" />
            </div>

            {/* Swiper */}
            <Swiper
                modules={[Navigation, Pagination]}
                effect="coverflow"
                speed={1000}
                navigation={{
                    nextEl: '.swiper-button-next-custom',
                    prevEl: '.swiper-button-prev-custom',
                }}
                pagination={{
                    el: '.swiper-pagination-custom',
                    clickable: true,
                    renderBullet: (_: number, className: string): string => {
                        return `<span class="${className} !bg-matcha w-3 h-3 rounded-full mx-1 inline-block"></span>`;
                    },
                }}
                spaceBetween={30}
                initialSlide={1}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <ChefInfo>
                        <div className="flex-1 h-full flex-row-center-center justify-end relative gap-4 pr-12">
                            <div className="w-[6rem] h-[13rem] top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute -left-7 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                            <div className="w-[6rem] h-[13rem]  top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute top-9 -left-32 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                        </div>
                    </ChefInfo>
                </SwiperSlide>
                <SwiperSlide>
                    <ChefInfo>
                        <div className="flex-1 h-full flex-row-center-center justify-end relative gap-4 pr-12">
                            <div className="w-[6rem] h-[13rem] top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute -left-7 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                            <div className="w-[6rem] h-[13rem]  top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute top-9 -left-32 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                        </div>
                    </ChefInfo>
                </SwiperSlide>
                <SwiperSlide>
                    <ChefInfo>
                        <div className="flex-1 h-full flex-row-center-center justify-end relative gap-4 pr-12">
                            <div className="w-[6rem] h-[13rem] top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute -left-7 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                            <div className="w-[6rem] h-[13rem]  top-0 left-0 rounded-full bg-gray-300 rotate-20 overflow-hidden relative group">
                                <div className="w-[250%] h-[100%] bg-transparent -rotate-20 absolute top-9 -left-32 group-hover:scale-110 cursor-pointer duration-300 ease-in-out">
                                    <img src={chef} alt="chef men" className="img-cover" />
                                </div>
                            </div>
                        </div>
                    </ChefInfo>
                </SwiperSlide>
            </Swiper>

            {/* Custom Pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-14"></div>
        </>
    )
}

type CardInfoProps = {
    img: string,
    tittle: string,
    desc: string,
    button: string
}


// card info 
const CardInfo: FC<CardInfoProps> = ({ img, tittle, desc, button }) => {
    return (
        <div className="w-[70%] h-[40vh] overflow-hidden rounded-md relative group cursor-pointer">
            {/* bg */}
            {
                img === 'fast-food' && (
                    <img src={fastFood} alt="chef" className="img-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
                )
            }
            {
                img === 'drink' && (
                    <img src={ourDrink} alt="chef" className="img-cover -scale-x-100 group-hover:-scale-x-105 group-hover:scale-y-105 transition-all duration-300 ease-in-out" />
                )
            }
            {/* text */}
            <div className="absolute top-0 left-0 w-full h-full flex flex-row justify-end items-center">
                <div className="flex-1"></div>
                <div className="flex-1 flex-col-start-start gap-4">
                    <h2 className="text-3xl font-bold text-white capitalize">{tittle}</h2>
                    <p className="text-to-small text-slate-50 w-[80%]">
                        {desc}
                    </p>
                    <button className="capitalize text-to-small text-white border-2 border-white py-1.5 px-4 hover:bg-orange-400 transition-all duration-300 ease-in-out rounded-full cursor-pointer">
                        {button}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default SectionClientSays
