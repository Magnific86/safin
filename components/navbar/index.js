import React, { useContext, useState } from "react";
import LoginCircleLineIcon from "remixicon-react/LoginCircleLineIcon";
import Wallet3LineIcon from "remixicon-react/Wallet3LineIcon";
import Bookmark3LineIcon from "remixicon-react/Bookmark3LineIcon";
import ShoppingCartLineIcon from "remixicon-react/ShoppingCartLineIcon";
import HeartLineIcon from "remixicon-react/HeartLineIcon";
import Notification4LineIcon from "remixicon-react/Notification4LineIcon";
import Link from "next/link";
import Sidebar from "../sidebar";
import CustomDrawer from "../drawer";
import SelectAddress from "../form/select-address";
import MobileNav from "./mobile";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import useWindowSize from "../../utils/hooks/useWindowSize";
import { MainContext } from "../../utils/contexts/MainContext";
import UserAvatar from "./avatar";
import { getPrice } from "../../utils/getPrice";
import { parseCookies } from "nookies";
import SerachFilter from "../search-filter";
import { useRouter } from "next/router";

const Navbar = ({ handleContent }) => {
  const { t: tl } = useTranslation();
  const cookies = parseCookies();
  const [open, setOpen] = useState(null);
  const user = useSelector((state) => state.user.data);
  const settings = useSelector((state) => state.settings.data);
  const notification = useSelector((state) => state.notification.data);
  const {
    notificationList,
    handleNotification,
    handleMarkAllNotification,
    setDrawerTitle,
  } = useContext(MainContext);
  const isEmpty = Object.keys(user ? user : {}).length === 0;
  const cartTotalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const windowSize = useWindowSize();
  const router = useRouter()
  const click = (key) => {
    setDrawerTitle("My order");
    handleContent(key);
  };
  const readed = (item) => {
    const readed = notification.includes(item.id);
    return readed;
  };

  const categoriesList = new Array(15).fill("Lorem").map(el =>
    <li>{el}</li>
    )

  return (
    <>
      <div className="navbar">
        <div className="left">
          {/* <div className="burger-btn" onClick={() => setOpen(true)}>
            <span></span>
            <span></span>
          </div> */}
          <Link href="/">
            <a className="logo">
              Safin24
            </a>
          </Link>
          {/* <SelectAddress /> */}
          <SerachFilter
          className={router.pathname === "/products/[id]" ? "inner-store" : ""}
        />
        </div>
        <div className="right">
          {(isEmpty || !cookies?.access_token) && (
            <Link href="/auth/sign-in">
              <a className="login-btn">
                <LoginCircleLineIcon size={20} />
                <span>{tl("Sign Up")}</span>
              </a>
            </Link>
          )}
          {/* {!user?.wallet && (
            <div className="wallet">
              <Wallet3LineIcon size={20} />
              <div className="amount">{getPrice(user?.wallet?.price)}</div>
            </div>
          )} */}
          <Link href="/stores/liked-product">
            <a className="square liked" style={{display: 'flex', alignItems: 'center'}}>
              <HeartLineIcon size={20} /> <span>{tl("Favorite")}</span>
            </a>
          </Link>
          <div className="cart-amount" onClick={() => click("order-list")}>
            <ShoppingCartLineIcon size={20} />
            <span>
            <span>{tl("Basket")}</span>
            </span>
          </div>
          {/* <Link href="/saved-store">
            <a className="square saved">
              <Bookmark3LineIcon size={20} />
            </a>
          </Link> */}
          
         {/*  <div className="square notification-wrapper">
            <Notification4LineIcon size={20} />
            <div className="notification">
              <div className="header">
                <div className="title">{tl("Notification")}</div>
                <div
                  className="mark-all"
                  onClick={() =>
                    handleMarkAllNotification(
                      notificationList.map((item) => item.id)
                    )
                  }
                >
                  {tl("Mark all")}
                </div>
              </div>
              {notificationList?.map((item, key) => {
                return (
                  <Link key={key} href={`/notification/${item.uuid}`}>
                    <div
                      className="item"
                      onClick={() => handleNotification(item.id)}
                    >
                      <div className="header">
                        <div className="title">{item.translation?.title}</div>
                        <div className="time">{item.published_at}</div>
                        {!readed(item) && <span></span>}
                      </div>
                      <div className="content">
                        {item?.translation?.short_desc}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div> */}
         {/*  <UserAvatar /> */}
        </div>
      </div>
      <CustomDrawer
        header={false}
        open={open}
        setOpen={setOpen}
        direction="left"
        size={585}
        className="mobile-sidebar"
      >
        <Sidebar setOpen={setOpen} />
        {windowSize?.width < 769 && <MobileNav setOpen={setOpen} />}
      </CustomDrawer>
      <div className="categoriesList">
          {categoriesList}
      </div>
    </>
  );
};

export default Navbar;
