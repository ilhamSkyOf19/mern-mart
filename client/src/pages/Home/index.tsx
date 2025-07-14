import { useEffect, useState, type FC } from "react"
import Navbar from "../../fragments/Navbar"
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionTwo"
import SectionInfo from "./SectionInfo"
import SectionClientSays from "./SectionClientSays"
import SectionFeatureProduct from "./SectionFeatureProduct"
import type { ProductResponse } from "../../model/product-model"
import { ProductService } from "../../service/products.service"


const Home: FC = () => {

  // state 
  const [data, setData] = useState<ProductResponse[] | null>([])
  const [category, setCategory] = useState<string>('organic')

  // fecth data
  const fetchData = async () => {
    try {
      const result = await ProductService.getByCategory(category);
      setData(result);
    } catch (error) {
      console.log(error);
    }
  }

  // load data 
  useEffect(() => {
    fetchData();
  }, [category])


  // handle set category 
  const handleSetCategory = (category: string): void => {
    setCategory(category);
  }






  return (
    <div className="w-full flex flex-col justify-start items-start overflow-x-hidden bg-[#F2EFEB] relative">
      <Navbar />
      <SectionThumbnail />
      <SectionTwo />
      <SectionFeatureProduct data={data ?? null} handleSetCategory={handleSetCategory} />
      <SectionInfo />
      <SectionClientSays />
    </div>
  )
}


export default Home
