import { useContext, useEffect, useState } from "react";
import HomeBanner from "../components/banner/home";
import AppBanner from "../components/stores/app-banner";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/slices/banner";
import { images } from "../constants/images";
import Empty from "../components/empty-data";
import SEO from "../components/seo";
import MegaSale from "../components/banner/mega-sale";
import { ProductApi } from "../api/main/product";
import ProductSection from "../components/products/section";
import ProductCard from "../components/products/card";
import ProductLoader from "../components/loader/product";
import ServiceBanner from "../components/banner/service";
import CategoryByChild from "../components/category/category-by-child";
import CategoryByParent from "../components/category/category-by-parent";
import BeSeller from "../components/banner/be-seller";
import Blog from "../components/blog";
import { BrandList } from "../components/navbar/BrandList";
import { Col, Row } from "antd";


function Home() {
  const [discountList, setDiscountList] = useState(null);
  const [mostSales, setMostSales] = useState(null);
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banners.data.data);
  const getDiscountProduct = (perPage = 4, page = 1) => {
    ProductApi.getDiscount({ perPage, page })
      .then((response) => {
        setDiscountList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const getMostSales = (perPage = 4, page = 1) => {
    ProductApi.getMostSales({ perPage, page })
      .then((response) => {
        setMostSales(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    dispatch(
      getBanners({
        params: { perPage: 8, page: 1, active: 1, type: "banner" },
      })
    );
    getDiscountProduct();
    getMostSales();
  }, []);


  return (
    <>
      <SEO />
      <BrandList />
      <HomeBanner bannerList={bannerList} />
      <Row id="row">
        {new Array(3).fill("Store Name").map((el, index) =>
              <StoreTemplate key={index} upperDesc="Lorem ipsum dolor sit amet" title={el} image="/assets/icons/example.jpg" />
        )}
      </Row>
     {/*  <CategoryByChild />
      <CategoryByParent /> */}
    {/*   <MegaSale /> */}
      <ProductSection icon={true} title="Super discounts of the week">
        {discountList ? (
          discountList.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))
        ) : (
          <>
            <ProductLoader />
            <ProductLoader />
          </>
        )}
        {discountList?.length === 0 && (
          <Empty
            image={images.ViewedProduct}
            text1="There are no items in the sale products"
          />
        )}
      </ProductSection>
      <ProductSection title="Most Sales">
        {mostSales ? (
          mostSales.map((product, key) => (
            <ProductCard key={key} product={product} />
          ))
        ) : (
          <>
            <ProductLoader />
            <ProductLoader />
          </>
        )}
        {mostSales?.length === 0 && (
          <Empty
            image={images.ViewedProduct}
            text1="There are no items in the most sale products"
          />
        )}
      </ProductSection>
      <BeSeller />
      <Row id="row">
        {new Array(18).fill("Store Name").map((el, index) =>
              <StoreTemplate key={index} upperDesc="Lorem ipsum dolor sit amet" title={el} image="/assets/icons/example.jpg" />
        )}
      </Row>
     {/*  <ServiceBanner /> */}
      {/* <Blog />
      <AppBanner /> */}
      
    </>
  );
}

export default Home;


export const StoreTemplate = ({title, upperDesc, image}) => {
  return (
    <Col xl={7} id = "col">
    <div className="mainBlock">
      <div className="leftPart">
      <p className="leftPartDesc">{upperDesc}</p>
      <img className="leftPartLogo" src={image}/>
      </div>
        <div className="rightPart">
        <img src={image} className="rightPartImage" /> 
        </div>
    </div>
    <div className="titleUnder">
      <h1 style={{height: '20%'}}>{title}</h1>
    </div>
  </Col>
  )
}
