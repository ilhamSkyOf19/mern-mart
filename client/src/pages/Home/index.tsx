import { useEffect, useRef, useState, type FC } from "react"
import Navbar from "../../fragments/Navbar"
import SectionThumbnail from "./SectionThumbnail"
import SectionTwo from "./SectionTwo"
import SectionInfo from "./SectionInfo"
import SectionClientSays from "./SectionClientSays"
import SectionFeatureProduct from "./SectionFeatureProduct"
import type { ProductResponse } from "../../model/product-model"
import { ProductService } from "../../service/products.service"
import SectionNewsBlogs from "./SectionNewsBlogs"
import { NewsBlogsService } from "../../service/news-blogs.service"
import type { NewsBlogsResponse } from "../../model/news-blogs-model"
import Footer from "./Footer"


const Home: FC = () => {

  // state 
  const [data, setData] = useState<ProductResponse[] | null>([])
  const [category, setCategory] = useState<string>('organic')

  // news 
  const [dataNews, setDataNews] = useState<NewsBlogsResponse[] | null>([])

  // useReff
  const lastScrollY = useRef(0);
  const [showNavbar, setShowNavbar] = useState(true);
  const [showBgNavbar, setShowBgNavbar] = useState(false);


  // hadle scroll 
  useEffect(() => {
    // handle scroll
    const handleScroll = () => {
      // get scroll position
      const currentScrollY = window.scrollY;

      // cek curr scroll > last scroll
      if (currentScrollY > lastScrollY.current) {
        // setShowNavbarList(false)
        setShowNavbar(false)
      } else if (currentScrollY < lastScrollY.current) {
        setShowNavbar(true)
        if (currentScrollY > 10) {
          setShowBgNavbar(true)
        } else {
          setShowBgNavbar(false)
        }
      }

      // update last scroll
      lastScrollY.current = currentScrollY;
    }

    // panggil handler ketika scroll 
    document.addEventListener('scroll', handleScroll);

    // remove event listener
    return () => {
      document.removeEventListener('scroll', handleScroll);
    }

  }, [])


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


  // fetch data news
  const fetchDataNews = async () => {
    try {
      const result = await NewsBlogsService.getAll();
      setDataNews(result);
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchDataNews();
  }, [])

  useEffect(() => {
    console.log(data);
  }, [data])











  return (
    <div className="w-full flex flex-col justify-start items-start overflow-x-hidden bg-[#F2EFEB] relative">
      <Navbar showNavbar={showNavbar} showBgNavbar={showBgNavbar} />
      <SectionThumbnail />
      <SectionTwo />
      <SectionFeatureProduct data={data ?? null} handleSetCategory={handleSetCategory} />
      <SectionInfo />
      <SectionClientSays />
      <SectionNewsBlogs dataNews={dataNews ?? null} />
      <Footer />
    </div>
  )
}


export default Home
