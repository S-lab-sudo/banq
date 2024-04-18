import dayjs from "dayjs";
import React, { useState } from "react";
import { generateDate, months } from "./util/calendar";
import cn from "./util/cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

export default function Calendar({ reservedDates, setReservationDate }) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectDate, setSelectDate] = useState(currentDate);

  const handleDateSelect = (
    currentMonth,
    dateNotAvailable,
    date,
    isReserved
  ) => {
    if((!isReserved&&currentMonth&&!dateNotAvailable)){
      setSelectDate(date);
      setReservationDate(date);
    }
  };
  //   TESTS
  const letReserved = reservedDates.map(v=>dayjs(v).format("DD-MM-YYYY"))
  return (
    <div id="dateSelector" className="flex gap-10 sm:divide-x justify-center sm:w-1/2 mx-auto items-center sm:flex-row flex-col border border-black rounded">
      <div className="calenderWrapper">
        <div className="flex items-center justify-between">
          <GrFormPrevious
            size={60}
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setToday(today.month(today.month() - 1));
            }}
          />
          <h1 className="select-none font-semibold">{months[today.month()]}</h1>
          <GrFormNext
            size={35}
            className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
            onClick={() => {
              setSelectDate(currentDate);
              setToday(today.month(today.month() + 1));
            }}
          />
        </div>
        <div className="grid grid-cols-7 place-items-center">
          {days.map((day, index) => {
            return (
              <h1
                key={index}
                className="text-sm text-center h-14 w-14 grid select-none"
              >
                {day}
              </h1>
            );
          })}
        </div>

        <div className=" grid grid-cols-7 ">
          {generateDate(today.month(), today.year(), letReserved).map(
            (
              { date, currentMonth, today, dateNotAvailable, isReserved },
              index
            ) => {
              return (
                <div
                  key={index}
                  className="p-2 text-center h-14 grid place-content-center text-sm border-t"
                >
                  <h1
                    className={cn(
                      isReserved ? "reserved" : "",
                      dateNotAvailable ? "dateNotAvailable" : "",
                      isReserved || dateNotAvailable || !currentMonth
                        ? ""
                        : "hover:bg-black cursor-pointer hover:text-white",
                      currentMonth ? "" : "text-gray-300",
                      today ? "bg-red-600 text-white" : "",
                      selectDate.toDate().toDateString() ===
                        date.toDate().toDateString()
                        ? "bg-black text-white"
                        : "",
                      "h-10 w-10 grid place-content-center transition-all select-none rounded-full	"
                    )}
                    onClick={() => {
                      handleDateSelect(
                        currentMonth,
                        dateNotAvailable,
                        date,
                        isReserved
                      );
                    }}
                  >
                    {date.date()}
                  </h1>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
}
