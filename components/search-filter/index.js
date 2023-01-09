import React, { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import MapPinLineIcon from "remixicon-react/MapPinLineIcon";
import Search2LineIcon from "remixicon-react/Search2LineIcon";
import EqualizerFillIcon from "remixicon-react/EqualizerFillIcon";
import FileListFillIcon from "remixicon-react/FileListFillIcon";
import Store3FillIcon from "remixicon-react/Store3FillIcon";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import SerachResult from "./search-result";
import { MainContext } from "../../utils/contexts/MainContext";
import FilterContent from "./filter-content";
import useDebounce from "../../utils/hooks/useDebounce";
import serviceWithOutToken from "../../services/auth";
import { imgBaseUrl } from "../../constants";
import { useTranslation } from "react-i18next";
import FlashlightFillIcon from "remixicon-react/FlashlightFillIcon";
import { ArrowRigthIcon, CheeseLineIcon } from "../../constants/images";
import Category from "../category";
const SerachFilter = ({ className }) => {
  const { t: tl } = useTranslation();
  const router = useRouter();
  const { isOpen, setIsOpen, shop } = useContext(MainContext);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 1000);
  function searchProduct(search) {
    return serviceWithOutToken(`/api/v1/rest/products/paginate`, {
      params: { search, perPage: 50 },
    })
      .then((r) => r.data)
      .catch((error) => {
        console.error(error);
        return [];
      });
  }

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      searchProduct(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setSearchResult(results);
      });
    } else {
      setSearchResult([]);
    }
  }, [debouncedSearchTerm]);

  const handleClick = (key) => {
    setIsOpen(key);
  };
  useEffect(() => {
    setSearchTerm("");
  }, [isOpen]);

  return (
    <>
      <div
        className={
          isOpen === "search"
            ? "filter-wrapper search-visible"
            : isOpen === "filter"
            ? "filter-wrapper filter-visible"
            : "filter-wrapper"
        }
      >
        <div className="search-input-wrapper">
          {router?.query?.id && <Category />}
          {router.pathname === "/products/[id]" && (
            <Link href={`/stores/${shop.uuid}`}>
              <a className="current-store">
                <div className="logo">
                  <img src={imgBaseUrl + shop?.logo_img} alt="Logo" />
                </div>
                <div className="data">
                  <div className="name">{shop?.translation?.title}</div>
                  <div className="type">{tl("Store")}</div>
                </div>
              </a>
            </Link>
          )}
          <div className={`search-filter ${className}`}>
            <Search2LineIcon size={20} onClick={() => handleClick("search")} />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onFocus={() => handleClick("search")}
              placeholder={tl("Search products")}
            />
            {searchResult?.data && (
              <div className="search-result-count">
                {searchResult?.data?.length}
              </div>
            )}
            {(router.route === "/stores/[id]/news" ||
              router.route === "/stores/[id]/top-sales" ||
              router.route === "/stores/[id]/sales" ||
              router.route === "/stores/[id]/all-product") && (
              <EqualizerFillIcon
                className="filter-icon"
                onClick={() => handleClick("filter")}
                size={20}
              />
            )}
            <SerachResult
              isSearching={isSearching}
              searchResult={searchResult}
              setSearchTerm={setSearchTerm}
              setIsOpen={setIsOpen}
            />
            <FilterContent isSearching={isSearching} isOpen={isOpen} />
          </div>
        </div>
        <div className="filter-links">
         
        </div>
      </div>
    </>
  );
};

export default SerachFilter;