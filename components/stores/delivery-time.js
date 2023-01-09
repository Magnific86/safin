import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useTranslation } from "react-i18next";
import moment from "moment";
import "moment/locale/ru";
import { parseCookies } from "nookies";

function DeliveryTime({ storeDetail }) {
  const cookies = parseCookies();
  moment.locale(cookies?.language_locale);
  const { t: tl } = useTranslation();
  const [value, onChange] = useState(new Date());
  const getDeliveryTime = () => {
    const timeArray = [];
    let start = parseInt(storeDetail?.open_time?.slice(0, 2));
    let end = parseInt(storeDetail?.close_time?.slice(0, 2));
    for (start; start <= end; start++) {
      timeArray.push({
        id: `${start}:00`,
        value: `${tl("up to")} ${start}:00`,
      });
    }
    return timeArray;
  };
  const timeArray = getDeliveryTime();
  return (
    <div className="delivery-time">
      <Calendar
        onChange={onChange}
        value={value}
        locale={cookies?.language_locale}
      />
      <div className="delivery-date-wrapper">
        {timeArray?.map((item, key) => {
          return (
            <div key={key} className="delivery-date">
              <div className="month">{moment(value).format("LL")}</div>
              <div className="time">{item.value}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeliveryTime;
