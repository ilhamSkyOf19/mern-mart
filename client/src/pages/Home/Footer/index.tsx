import type { FC } from "react"
import { Link } from "react-router"



// vectors 
import vectorFoods from '../../../assets/vector/vector-foods.png'


// img 
import logo from '../../../assets/logo/logo.png'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa"


// icons 
import { PiHeadsetBold } from "react-icons/pi";


const Footer: FC = () => {
    return (
        <div className='w-full py-1 bg-white flex-col-start-start relative overflow-hidden'>
            {/* vector left */}
            <div className="absolute -top-72 -left-12 w-[40%] h-full -scale-100 opacity-20 -rotate-10 z-1">
                <img src={vectorFoods} alt="vector" className="img-cover" />
            </div>
            {/* vector right */}
            <div className="absolute -top-72 -right-32 w-[40%] h-full  opacity-20 -rotate-10 z-1">
                <img src={vectorFoods} alt="vector" className="img-cover" />
            </div>

            {/* content one */}
            <ContentOne />

            {/* content two */}
            <ContentTwo />

            {/* content three */}
            <div className="w-full flex flex-row-center-center py-3">
                <p className="text-xs text-slate-600">Copyright &copy; 2023. All rights reserved</p>
            </div>
        </div>
    )
}


// conent one 
const ContentOne: FC = () => {
    return (
        <div className="flex-1 w-full min-h-[40vh] flex-col-center-center py-7 z-2">
            <h4 className="font-bold text-lg text-slate-800 uppercase mb-3">
                newslatter
            </h4>
            <p className="text-xs text-slate-600 mb-3">Subscribe to the weekly newsletter for all the latest updates</p>
            <div className="w-[43%] flex flex-row justify-between items-center border-1 border-slate-500 rounded-full py-1 px-2 mt-3">
                <input
                    type="email"
                    placeholder="Your email address"
                    className="text-xs py-2 px-2 w-full focus:outline-none" />
                <button className="text-xs text-white bg-matcha py-2 px-5 rounded-full cursor-pointer hover:bg-white hover:text-matcha transition-all duration-300 ease-in-out border-1 border-matcha font-semibold uppercase">
                    subscribe
                </button>
            </div>
        </div>
    )
}




// content two
const ContentTwo: FC = () => {
    // category 
    const category: string[] = ['company info', 'quick links', 'hot categories', 'contact us'];


    // list category
    const companyInfo: string[] = ['about us', 'careers', 'social responsibility', 'affiliate program', 'business with us', 'find a store', 'press & talent'];
    const quickLinks: string[] = ['Special Offers', 'gift cards', 'F21 red', 'privacy police', 'jakarta privacy rights', 'ca transparency in store', 'teams of use']
    const hotCategories: string[] = ['privacy policy', 'f21 red', 'smartphone', 'gift cards', 'battereries', 'handbag', 'shoes']


    return (
        <div className="flex-2 w-full z-2 flex-col-start-center py-16 gap-6 relative before:content-[''] before:w-full before:h-[1.5px] before:bg-slate-200 before:absolute before:top-0 after:content-[''] after:w-full after:h-[1.5px] after:bg-slate-200 after:absolute after:bottom-0">
            {/* category */}
            <div className="w-full flex flex-row justify-between items-center px-26 gap-12 ">
                <div className="flex-1 flex-row-start-center">
                    <img src={logo} alt="logo" className="w-[70%]" />
                </div>
                {category.map((item, index) => (
                    <div key={index} className="flex-1 flex-row-start-start">
                        <p className="text-xs font-bold text-black capitalize">{item}</p>
                    </div>
                ))}
            </div>

            {/* list category */}
            <div className="w-full flex flex-row justify-between items-start px-26 gap-12">
                <div className="flex-1 flex-col-start-start">
                    <p className="text-to-small text-slate-600">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam animi, sapiente earum aspernatur alias assumenda laudantium</p>

                    {/* social media */}
                    <SocialMedia />
                </div>
                <ListCategory category={companyInfo} />
                <ListCategory category={quickLinks} />
                <ListCategory category={hotCategories} />
                <div className="flex-1 flex-col-start-start">
                    {/* whatsapp */}
                    <div className="flex-row-start-start gap-2">
                        <PiHeadsetBold className="text-3xl text-matcha" />
                        <div className="flex flex-col justify-between items-start h-full">
                            <p className="text-to-small text-matcha capitalize font-medium">through whatsapp</p>
                            <p className="text-sm text-matcha font-bold">+62 8123 4567 89</p>
                        </div>
                    </div>
                    {/* address */}
                    <p className="text-to-small text-slate-600 mt-3">GymVast, 18 East 50th Street, 4th Floor, Jakarta, JKT 10012</p>
                    {/* email */}
                    <p className="text-to-small text-slate-600 mt-3">freshmart@example.com</p>
                </div>
            </div>
        </div>
    )
}


// social media 
const SocialMedia: FC = () => {

    // social media 
    const socialMedia: string[] = ['facebook', 'twitter', 'instagram', 'tiktok', 'linkedin'];
    return (
        <div className="w-full flex-row-start-center gap-1.5 mt-4">
            {
                socialMedia.map((item, index) => (
                    <div key={index} className="w-[1.5rem] h-[1.5rem] rounded-full flex-row-center-center border-1 border-slate-300 hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
                        {
                            item === 'facebook' && <FaFacebookF className="text-to-small text-slate-600" />
                        }
                        {
                            item === 'twitter' && <FaTwitter className="text-to-small text-slate-600" />
                        }
                        {
                            item === 'instagram' && <FaInstagram className="text-to-small text-slate-600" />
                        }
                        {
                            item === 'tiktok' && <FaTiktok className="text-to-small text-slate-600" />
                        }
                        {
                            item === 'linkedin' && <FaLinkedin className="text-to-small text-slate-600" />
                        }
                    </div>
                ))
            }

        </div>
    )
}




type ListCategoryProps = {
    category: string[]
}
// list category
const ListCategory: FC<ListCategoryProps> = ({ category }) => {
    return (
        <div className="flex-1 flex-col-start-start gap-1.5">
            {
                category.map((item, index) => (
                    <div key={index} className="flex-1 flex-col-start-start">
                        <Link to={'/'} className="text-to-small text-slate-600 capitalize font-medium">{item}</Link>
                    </div>
                ))
            }

        </div>
    )
}
export default Footer
