import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { getYear, format } from "date-fns";
import CalendarEventLineIcon from "remixicon-react/CalendarEventLineIcon";
import { useTranslation } from "react-i18next";
import { parseCookies } from "nookies";

export default function DateRangePopover({
  onChange,
  error,
  label,
  value,
  required,
  extraDay = 0,
  disabled,
}) {
  const { t: tl } = useTranslation();
  const data = new Date();
  const year = getYear(data);
  const month = data.getMonth();
  const day = data.getDate() + extraDay;
  const [selected, setSelected] = useState(value);
  const [datepicker, showDatepicker] = useState(false);
  const hanleClick = (e) => {
    if (e) {
      setSelected(e);
      onChange(format(new Date(e), "yyyy-MM-dd"));
    }
    showDatepicker(false);
  };
  return (
    <div
      className={
        error
          ? "form-item custom-datepicker invalid"
          : "form-item custom-datepicker"
      }
    >
      <div className="label">{tl(label)}</div>
      <CalendarEventLineIcon className="suffix" size={22} />
      <input
        required={required}
        type="text"
        placeholder={value ? value : "dd/mm/yyyy"}
        onFocus={() => showDatepicker(true)}
        disabled={disabled}
        value={value}
        readOnly={true}
      />
      <DayPicker
        fromDate={new Date(year, month, day)}
        className={datepicker ? "datepicker active" : "datepicker"}
        mode="single"
        selected={selected}
        onSelect={hanleClick}
        showOutsideDays
      />
    </div>
  );
}
