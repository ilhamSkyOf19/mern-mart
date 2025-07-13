import type { FC } from "react"
import Navbar from "../../fragments/Navbar"
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionTwo"
import SectionInfo from "./SectionInfo"
import SectionClientSays from "./SectionClientSays"


const Home: FC = () => {
  return (
    <div className="w-full flex flex-col justify-start items-start overflow-x-hidden bg-[#F2EFEB] relative">
      <Navbar />
      <SectionThumbnail />
      <SectionTwo />
      <SectionInfo />
      <SectionClientSays />
    </div>
  )
}


export default Home
