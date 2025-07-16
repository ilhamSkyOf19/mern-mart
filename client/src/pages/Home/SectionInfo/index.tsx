import type { FC } from "react"


// img 
import shrimp from '../../../assets/info/shrimp.jpg'
import broccoli from '../../../assets/info/broccoli.jpg'
import kolSawi from '../../../assets/info/kol-sawi.png'
import strawbery from '../../../assets/info/strawbery.png'
import seeds from '../../../assets/info/seeds.png'
import brush from '../../../assets/vector/brush.png'
import launchPlate from '../../../assets/info/launch-plate.png'
import { Parallax } from "../../../hooks/useParallax"

const SectionInfo: FC = () => {
    // parallax
    // console.log(window.scrollY)
    const delaysOne: number[] = [500, 600, 700, 900, 1000, 1100]

    const parallaxOne: boolean[] = delaysOne.map(delay => Parallax.useScrollTrigger(1500, delay))



    return (
        <div className='w-full min-h-[95vh] bg-transparent relative'>
            {/* bg white */}
            <div className="w-full h-[90%] bg-white absolute bottom-0 z-1"></div>
            {/* content */}
            <div className="w-full h-full flex flex-row justify-start items-start z-2">
                {/* content left */}
                <ContentLeft parallax={parallaxOne} />
                {/* content right */}
                <ContentRight parallax={parallaxOne} />

            </div>
        </div>
    )
}


type ParallaxProps = {
    parallax: boolean[]
}

// content left 
const ContentLeft: FC<ParallaxProps> = ({ parallax }) => {
    return (
        <div className="flex-1 h-full flex flex-col justify-start items-start z-2">
            <div className={`h-[45vh] w-full overflow-hidden rounded-r-md group transisi-700 ${parallax[0] ? 'parallax-0' : 'parallax-x-left-30'}`}>
                <img src={shrimp} alt="shrimp" className="img-cover object-bottom group-hover:scale-110 transition-all duration-500 ease-in-out cursor-pointer" />
            </div>
            <div className="flex-1 w-full relative">
                <div className={`w-[15rem] h-[20rem] overflow-hidden absolute -top-24 right-16 border-6 border-white rounded-sm transisi-700 ${parallax[1] ? 'parallax-0' : 'parallax-y-30'} group`}>
                    <img src={broccoli} alt="broccoli" className="img-cover group-hover:scale-110 transition-all duration-500 ease-in-out" />
                </div>
            </div>
        </div>
    )
}




// content right
const ContentRight: FC<ParallaxProps> = ({ parallax }) => {
    return (
        <div className="flex-1/12 flex flex-col justify-start items-start pl-20 pt-32 z-2 gap-5 relative">
            <h2 className={`font-bold text-3xl text-slate-800 transisi-700 ${parallax[0] ? 'parallax-0' : 'parallax-y-20'}`}>Fresh Fruit <br></br> & Vegetables</h2>
            <p className={`text-xs text-matcha font-medium transisi-700 ${parallax[1] ? 'parallax-0' : 'parallax-y-20'}`}>Order Now! and Get 50% Off</p>
            <p className={`text-to-small text-slate-500 font-normal w-[60%] leading-4.5 transisi-700 ${parallax[2] ? 'parallax-0' : 'parallax-y-20'}`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus vero reiciendis dolores eligendi perspiciatis inventore, quibusdam commodi fugiat ducimus id laudantium neque laboriosam assumenda temporibus eaque eos fuga quaerat ratione? Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
            <div className="flex flex-col justify-start items-start gap-6">
                {/* card */}
                <CardInfo img="sawi" category="vegetables" text1="Therefore" text2="always" parallax={parallax[3]} />
                <CardInfo img="strawbery" category="fruits" text1="College In" text2="Virginia" parallax={parallax[4]} />
            </div>
            {/* seeds */}
            <div className={`w-[12rem] h-[12rem] absolute -top-5 right-0 transisi-700 ${parallax[1] ? 'parallax-0' : 'parallax-x-right-20'}`}>
                <img src={seeds} alt="seeds" className="img-cover" />
            </div>
            {/* brush */}
            <div className="w-[30rem] h-[30rem] absolute top-[3rem] -right-40 opacity-40">
                <img src={brush} alt="seeds" className="img-cover" />
            </div>
            {/* launch plate */}
            <div className={`w-[23rem] h-[23rem] absolute top-40 -right-52 transisi-700 ${parallax[3] ? 'parallax-0' : 'parallax-x-right-20'}`}>
                <div className="w-[4rem] h-[4rem] bg-transparent rounded-full absolute top-48 left-32 opacity-40 shadow-[0_0_7rem_7rem_rgba(0,0,0,1)] -z-1"></div>
                <img src={launchPlate} alt="seeds" className="img-cover" />
            </div>

        </div>
    )
}

type CardInfoProps = {
    img: string;
    category: string;
    text1: string;
    text2: string;
    parallax: boolean
}

// card 
const CardInfo: FC<CardInfoProps> = ({ img, category, text1, text2, parallax }) => {
    return (
        <div className={`flex flex-row justify-start items-start gap-3 transisi-700 ${parallax ? 'parallax-0' : 'parallax-y-20'}`}>
            <div className="bg-white shadow-xs shadow-matcha  rounded-sm p-1 w-[3rem] h-[3rem]">
                {img === 'sawi' && <img src={kolSawi} alt="kol-sawi" className="img-cover" />}
                {img === 'strawbery' && <img src={strawbery} alt="kol-sawi" className="img-cover" />}
            </div>
            <div className="flex flex-col justify-between items-start gap-0.5">
                <p className="text-to-small text-matcha capitalize">{category}</p>
                <p className="text-to-small text-slate-600 font-bold capitalize">{text1}</p>
                <p className="text-to-small text-slate-600 font-bold capitalize">{text2}</p>
            </div>
        </div>
    )
}

export default SectionInfo
