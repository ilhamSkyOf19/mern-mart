import { type FC } from 'react'

// logo 
import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router'

// icons
import { FaRegUser } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { BiShoppingBag } from "react-icons/bi";
import { Parallax } from '../../hooks/useParallax';

// type object 
type RouteNavbar = {
    label: string,
    route: string,
}

type Props = {
    showNavbar: boolean
    showBgNavbar: boolean
}
const Navbar: FC<Props> = ({ showNavbar, showBgNavbar }) => {

    // route 
    const routeNavbar: RouteNavbar[] = [
        {
            label: 'Home',
            route: '/'
        },
        {
            label: 'Shop',
            route: '/'
        },
        {
            label: 'Page',
            route: '/'
        },
        {
            label: 'Blog',
            route: '/'
        },
        {
            label: 'Shortcode',
            route: '/'
        },
        {
            label: 'On Sale',
            route: '/'
        },
        {
            label: 'Contact',
            route: '/'
        },
    ]

    // parallax 
    const parallax = Parallax.useMountAnimation(1000);



    return (
        <div className={`fixed top-0 flex flex-row justify-between items-center w-full px-12 py-2 z-50 ${showNavbar && parallax ? `translate-y-0` : `-translate-y-full`} transition-all duration-300 ease-in-out ${showBgNavbar ? 'backdrop-blur-sm' : 'bg-transparent'} `}>
            <div className={`${parallax ? 'parallax-0' : '-translate-y-full opacity-0'} transisi-700 flex flex-row justify-between items-center w-full`}>
                <img src={logo} alt="logo" className='w-[7rem]' />
                <div className='flex flex-row justify-center items-center gap-7'>
                    {
                        routeNavbar.map((item, index) => {
                            return (

                                <Link key={index} to={item.route} className='font-semibold text-xs relative after:content-[""] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-matcha after:transition-all hover:after:w-full after:duration-300'>{item.label}</Link>
                            )
                        })
                    }
                </div>
                <div className='flex flex-row justify-end items-center gap-7'>
                    <div className='flex flex-row justify-start items-start gap-2 cursor-pointer'>
                        <div className='roundedIcon'>
                            <FaRegUser className='text-sm' />
                        </div>
                        <div className='flex flex-col justify-start items-start'>
                            <p className='text-to-small font-semibold'>Login <span className='text-[#74A12E] italic'>or</span></p>
                            <p className='text-to-small font-semibold'>Register</p>
                        </div>
                    </div>
                    <button className='roundedIcon relative'>
                        <FaRegHeart className='text-sm' />
                        <div className=' text-white roundedCount bg-matcha'>3</div>
                    </button>
                    <button className='roundedIcon relative'>
                        <BiShoppingBag className='text-md' />
                        <div className=' text-white roundedCount bg-orange-400'>3</div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navbar
