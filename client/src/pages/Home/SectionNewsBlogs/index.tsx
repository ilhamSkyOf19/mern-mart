import type { FC } from "react"
import SubJudulSection from "../../../components/SubJudulSection"
import ScrollX from "../../../fragments/ScrollX"
import { Utils } from "../../../utils/utils";


// icons
import { FaCalendarAlt } from "react-icons/fa";
import { FaRegComments } from "react-icons/fa6";
import type { NewsBlogsResponse } from "../../../model/news-blogs-model";
import Nodata from "../../../components/Nodata";


type SectionNewsBlogsProps = {
    dataNews?: NewsBlogsResponse[] | null
}
const SectionNewsBlogs: FC<SectionNewsBlogsProps> = ({ dataNews }) => {

    return (
        <div className='w-full min-h-[100vh] flex-col-start-center pt-7 gap-2'>
            <SubJudulSection text1="news" text2="& blogs" />
            <p className="text-xs w-[45%] text-center text-slate-600 mb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat quam, doloremque odit animi optio quia delectus corporis corrupti
            </p>
            {/* container news & blogs */}
            <div className="w-full h-[80vh] flex-row-center-center relative before:content-[''] before:absolute before:top-0 before:w-[70%] before:h-[1px] before:bg-slate-400">
                <ScrollX>
                    {
                        dataNews?.length === 0 ? (
                            <Nodata label={'No Data News & Blogs'} />


                        ) : (
                            dataNews?.map((item: any, index: number) => (
                                <CardNewsBlogs key={index} data={item ?? null} />
                            ))
                        )
                    }

                </ScrollX>
            </div>
        </div>
    )
}

type CardNewsBlogsProps = {
    data?: NewsBlogsResponse | null;
}

// card news & blogs 
const CardNewsBlogs: FC<CardNewsBlogsProps> = ({ data }) => {
    return (
        <div className="w-[14rem] h-[22rem] flex-col-start-start rounded-md overflow-hidden bg-white shrink-0">
            <div className="flex-1 w-full overflow-hidden cursor-pointer group">
                <img src={`/news-blogs/${data?.img}`} alt="news" className="img-cover group-hover:scale-105 transition-all duration-300 ease-in-out" />
            </div>
            <div className="flex-1/4 w-full flex-col-start-start gap-1.5 px-4 py-2">
                <p className="text-to-small italic font-medium text-matcha capitalize">{data?.category}</p>
                <p className="font-semibold text-sm text-slate-800 capitalize">
                    {data?.title}
                </p>
                <div className="flex-row-start-center gap-2 mt-2">
                    {/* calendar */}
                    <div className="flex-row-start-start gap-1">
                        <FaCalendarAlt className="text-matcha text-to-small opacity-70" />
                        <p className="text-[0.5rem] text-matcha opacity-70">{Utils.formattedDate(new Date(data?.date ?? ''))}</p>
                    </div>
                    {/* comments */}
                    <div className="flex-row-start-start gap-1">
                        <FaRegComments className="text-matcha text-xs opacity-70 font-bold" />
                        <p className="text-[0.5rem] text-matcha opacity-70">{data?.commentCount} Comments</p>
                    </div>
                </div>
                <p className="text-to-small font-normal text-slate-600 mb-2">{data?.description}</p>
                <button className="text-[0.5rem] capitalize py-1 px-2 border-1  border-slate-400 rounded-full cursor-pointer font-medium hover:bg-slate-400 hover:text-white transition-all duration-300 ease-in-out">
                    read more
                </button>
            </div>
        </div>
    )
}

export default SectionNewsBlogs
