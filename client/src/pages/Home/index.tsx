import type { FC } from "react"
import Navbar from "../../fragments/Navbar"
import SectionThumbnail from "./SectionThumbnail"

const Home: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start overflow-x-hidden bg-[#F2EFEB] relative">
      <Navbar />
      <SectionThumbnail />
      <div className="h-[100vh]">

      </div>
    </div>
  )
}


export default Home
