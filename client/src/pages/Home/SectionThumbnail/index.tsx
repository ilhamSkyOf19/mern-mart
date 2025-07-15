import { useState, type FC } from 'react'
import { Typewriter } from 'react-simple-typewriter'

// img 
import thumbnailSandwich from '../../../assets/component/thumbnail-sandwich.png'
import vector from '../../../assets/vector/vector-line.png'
import ketcup from '../../../assets/component/ketcup.png'
import meet from '../../../assets/component/meet.png'
import vegetables from '../../../assets/component/vegetables.png'
import { Parallax } from '../../../hooks/useParallax'


const SectionThumbnail: FC = () => {

    // state 
    const [selected, setSelected] = useState<number>(1)

    const handleSelected = (index: number): void => setSelected(index)

    // selected
    const imgSelected: string[] = ['meet', 'bread', 'vegetables']


    // parallax
    const showOneSecond = Parallax.useMountAnimation(700);


    return (
        <div className='h-[100vh] w-full flex flex-row justify-start items-start'>
            {/* left */}
            <div className='flex-1 h-full bg-transparent flex flex-col justify-center items-start relative'>
                <div className='w-full h-full flex flex-col justify-center items-start pl-36 gap-4'>
                    <h4 className={`font-carattere text-2xl font-normal text-matcha transisi-700 ${showOneSecond ? 'parallax-0' : 'parallax-x-left-20'}`}>Delivery In 24h</h4>
                    <div className='flex flex-col justify-start items-start mb-4'>
                        <h2 className={`font-bold text-5xl capitalize text-slate-800 transisi-700 ${showOneSecond ? 'parallax-0' : 'parallax-x-right-20'}`}>
                            {
                                selected === 0 && 'fresh meet' ||
                                selected === 1 && 'fresh bread' ||
                                selected === 2 && 'fresh veges'
                            }
                        </h2>
                        <h2 className={`font-bold text-5xl capitalize text-slate-800 transisi-700 ${showOneSecond ? 'parallax-0' : 'parallax-x-left-20'}`}>
                            <Typewriter
                                words={['Everyday', 'Everytime', 'Anytime']}
                                loop={0}
                                cursor
                                cursorStyle='|'
                                typeSpeed={120}
                                deleteSpeed={70}
                                delaySpeed={1200}
                            />
                        </h2>
                    </div>
                    <p className={`text-xs mb-4 transisi-700 ${showOneSecond ? 'parallax-0' : 'parallax-x-right-20'}`}>Order today and receive your package <br></br> tomorrow by fresh mart</p>
                    <button className={`px-4.5 py-2 text-to-small uppercase font-semibold bg-matcha rounded-full text-white cursor-pointer hover:shadow-[0_0_3rem_0.1rem_rgba(116,161,46,1)] hover:transition-shadow hover:duration-200 ease-in-out transisi-700 ${showOneSecond ? 'parallax-0' : 'parallax-x-left-20'}`}>purchase now</button>
                </div>
                {/* vector */}
                <div className='flex flex-col justify-center items-center w-[13rem] h-[13rem] absolute right-0 bottom-0'>
                    <img src={vector} alt='vector' className='w-full h-full object-cover' />
                </div>
                <KetcupComponent parallax={showOneSecond} />
            </div>
            {/* right */}
            <div className='flex-1 h-full bg-[#f3ebc8] relative flex flex-row justify-end items-center'>
                <h1 className='font-extrabold text-[15rem] font-white uppercase absolute -rotate-90 top-[10rem] right-0 text-white opacity-60'>
                    runc
                </h1>
                {/* slide thumbnail */}
                <SlideThumbnail selected={selected} parallax={showOneSecond} />
                {/* button slide thumbnail */}
                <ButtonSlideThumbnail selected={selected} handleSelected={handleSelected} imgSelected={imgSelected} parallax={showOneSecond} />
            </div>
        </div>
    )
}

type KetcupComponentProps = {
    parallax: boolean
}

// component ketcup 
const KetcupComponent: FC<KetcupComponentProps> = ({ parallax }) => {
    return (
        <>
            {/* shadow ketcup */}
            <div className={`absolute top-[15.8rem] -left-10 w-[4rem] h-[4rem] rounded-full shadow-[0_0_6rem_2rem_rgba(0,0,0,1)] ${parallax ? 'parallax-0' : 'parallax-x-left-30'} transisi-700`}></div>
            {/* ketcup */}
            <div className={`absolute top-[13rem] -left-20 w-[10rem] h-[10rem] ${parallax ? 'parallax-0' : 'parallax-x-left-30'} transisi-700`}>
                <img src={ketcup} alt='ketcup' className='w-full h-full object-cover' />
            </div>
        </>
    )
}


type ButtonSlideThumbnailProps = {
    selected: number
    handleSelected: (index: number) => void
    imgSelected: string[]
    parallax: boolean
}

// button slide thumbnail 
const ButtonSlideThumbnail: FC<ButtonSlideThumbnailProps> = ({ selected, handleSelected, imgSelected, parallax }) => {
    return (
        <div className={`h-full flex flex-col justify-center items-center gap-2 pr-4 transisi-700 ${parallax ? 'parallax-0' : 'parallax-x-right-30'}`}>
            {
                imgSelected.map((item, index) => {
                    return (
                        <button key={index} className={`w-[3.5rem] h-[3.5rem] bg-white rounded-full flex flex-col justify-center items-center cursor-pointer ${selected !== index && 'scale-80 opacity-65'} transition-all duration-400 ease-in-out `} onClick={() => handleSelected(index)}>
                            {
                                item === 'meet' && <img src={meet} alt='met' className='w-[80%] h-[80%] object-cover' />
                                || item === 'bread' && <img src={thumbnailSandwich} alt='sandwich' className='w-[80%] h-[80%] object-cover' />
                                || item === 'vegetables' && <img src={vegetables} alt='vegetable' className='w-[80%] h-[80%] object-cover' />
                            }

                        </button>
                    )
                })
            }
        </div>
    )
}

type SlideThumbnailProps = {
    selected: number;
    parallax: boolean
}

// component slide thumbnail 
const SlideThumbnail: FC<SlideThumbnailProps> = ({ selected, parallax }) => {
    console.log(parallax)
    return (
        <>
            {
                <div className='absolute top-0 -left-52 h-[110vh] flex flex-col justify-center items-center overflow-hidden '>
                    <div className={`slideThumbnail ${selected === 0 && 'translate-y-full scale-100 opacity-100'} `}>
                        <img src={meet} alt="thumbnail" className='w-full h-full object-contain' />
                    </div>
                    <div className={`w-[34rem] h-[34rem] transition-all duration-1000 ease-in-out  cursor-pointer ${selected === 2 && '-scale-50 opacity-0 -translate-y-full'} ${selected === 0 && 'translate-y-full opacity-0 -scale-50'} ${parallax ? '' : 'scale-0 opacity-0'}`}>
                        <img src={thumbnailSandwich} alt="thumbnail" className='w-full h-full object-contain' />
                    </div>
                    <div className={`slideThumbnail  ${selected === 2 && '-translate-y-full opacity-100 scale-100'}`}>
                        <img src={vegetables} alt="thumbnail" className='w-full h-full object-contain' />
                    </div>

                </div>
            }
        </>
    )
}

export default SectionThumbnail
