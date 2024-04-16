import dayjs from "dayjs";

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year(),
  reserved
) => {
  const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
  const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");

  const arrayOfDate = [];

  // Create prefix dates (disabled for past months)
  for (let i = 0; i < firstDateOfMonth.day(); i++) {
    const date = firstDateOfMonth.day(i);
    const isPastMonth = date.isBefore(dayjs(), "month");
    const isPastDay = date.isBefore(dayjs(), "day");

    arrayOfDate.push({
      currentMonth: false,
      date,
      dateNotAvailable: isPastMonth || isPastDay,
    });
  }

  // Generate current month dates
  for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
    const date = firstDateOfMonth.day(i);
    const isPastDay = date.isBefore(dayjs(), "day");
    arrayOfDate.push({
      currentMonth: true,
      date: firstDateOfMonth.date(i),
      today:
        firstDateOfMonth.date(i).toDate().toDateString() ===
        dayjs().toDate().toDateString(),
      dateNotAvailable: isPastDay,
      isReserved:reserved.includes(date.format("DD-MM-YYYY"))
    });
  }

  const remaining = 42 - arrayOfDate.length;

  // Create suffix dates (disabled for past months)
  for (
    let i = lastDateOfMonth.date() + 1;
    i <= lastDateOfMonth.date() + remaining;
    i++
  ) {
    const date = lastDateOfMonth.date(i);

    arrayOfDate.push({
      currentMonth: false,
      date
    });
  }
  return arrayOfDate;
};

export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
