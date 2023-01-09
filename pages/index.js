import { useContext, useEffect, useState } from "react";
import nookies from "nookies";
import { useTranslation } from "react-i18next";
import { ShopApi } from "../api/main/shops";
import HomeBanner from "../components/banner/home";
import AppBanner from "../components/stores/app-banner";
import StoresCard from "../components/stores/card";
import StoresSection from "../components/stores/section";
import axiosService from "../services/axios";
import { useDispatch, useSelector } from "react-redux";
import { getBanners } from "../redux/slices/banner";
import { AuthContext } from "../utils/contexts/AuthContext";
import StoreLoader from "../components/loader/store";
import { images } from "../constants/images";
import Empty from "../components/empty-data";
import SEO from "../components/seo";
import BlogCard from "../components/blog/card";
import { BlogApi } from "../api/main/blog";
import MegaSale from "../components/banner/mega-sale";
import { ProductApi } from "../api/main/product";
import ProductSection from "../components/products/section";
import ProductCard from "../components/products/card";
import ProductLoader from "../components/loader/product";
import ServiceBanner from "../components/banner/service";

function Home({ storeList, setLoader }) {
  const { t: tl } = useTranslation();
  const [stores, setStores] = useState(storeList.data);
  const [nearbyShops, setNearbyShops] = useState(null);
  const [blogList, setBlogList] = useState(null);
  const { userLocation } = useContext(AuthContext);
  const [page, setPage] = useState(1);
  const [discountList, setDiscountList] = useState(null);
  const [total, setTotal] = useState(storeList.meta.total);
  const dispatch = useDispatch();
  const bannerList = useSelector((state) => state.banners.data.data);
  const getStore = (params = {}) => {
    setLoader(true);
    ShopApi.get({ page, ...params })
      .then((res) => {
        if (params.page) {
          setStores(res.data);
        } else {
          setStores([...stores, ...res.data]);
        }
        setTotal(res.meta.total);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoader(false);
      });
  };
  const getNearbyShops = async () => {
    ShopApi.getNearby({ clientLocation: userLocation })
      .then((res) => {
        setNearbyShops(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDiscountProduct = (perPage = 4, page = 1) => {
    ProductApi.getDiscount({ perPage, page })
      .then((response) => {
        setDiscountList(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handlePaginate = () => {
    setPage(page + 1);
  };

  const getBlogs = () => {
    BlogApi.get({ type: "blog", perPage: 3 })
      .then((res) => {
        setBlogList(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (page > 1) {
      getStore();
    }
  }, [page]);

  useEffect(() => {
    getBlogs();
    dispatch(
      getBanners({
        params: { perPage: 8, page: 1, active: 1, type: "banner" },
      })
    );
    getDiscountProduct();
  }, []);
  useEffect(() => {
    if (userLocation) getNearbyShops();
  }, [userLocation]);

  return (
    <>
      <SEO />
      {/* <HomeBanner bannerList={bannerList} /> */}
     {/*  <MegaSale /> */}
      {/* <StoresSection title="Near you" icon={true}>
        {nearbyShops ? (
          nearbyShops.map((store, key) => {
            return <StoresCard key={key} store={store} id={key} />;
          })
        ) : (
          <>
            <StoreLoader />
            <StoreLoader />
            <StoreLoader />
            <StoreLoader />
          </>
        )}
        {nearbyShops?.length === 0 && (
          <Empty
            image={images.ViewedProduct}
            text1="There are no shops in the near you"
            text2=""
          />
        )}
      </StoresSection> */}
      <StoresSection view={true} title="Shops">
        {stores.map((store, key) => {
          return <StoresCard key={key} store={store} id={key} />;
        })}
        {stores?.length === 0 && (
          <Empty
            image={images.ViewedProduct}
            text1="There are no items in the stores"
            text2=""
          />
        )}
      </StoresSection>
      {total > stores?.length && (
        <div onClick={() => handlePaginate(page)} className="see-more">
          {tl("Load more")}
        </div>
      )}
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
      <ServiceBanner />
      <div className="blog-wrapper">
        <div className="blog">
          <div className="title">{tl("Blog")}</div>
          <div className="blog-items">
            {blogList ? (
              blogList?.map((blog, key) => {
                return <BlogCard key={key} blog={blog} />;
              })
            ) : (
              <>
                <StoreLoader />
                <StoreLoader />
                <StoreLoader />
                <StoreLoader />
              </>
            )}
          </div>
          {blogList?.length === 0 && (
            <Empty
              image={images.ViewedProduct}
              text1="There are no items in the blogs"
            />
          )}
        </div>
      </div>
      <AppBanner />
    </>
  );
}

export async function getServerSideProps(ctx) {
  const cookies = nookies.get(ctx);
  const currency_id = cookies?.currency_id;
  const language_id = cookies?.language_id;
  const language_locale = cookies?.language_locale;
  const res = await axiosService.get(`/api/v1/rest/shops/paginate`, {
    params: {
      perPage: 8,
      page: 1,
      currency_id,
      language_id,
      lang: language_locale,
      sort: "orders_count",
    },
  });
  let storeList = res.data;
  return { props: { storeList } };
}

export default Home;
