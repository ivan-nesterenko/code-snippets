import dayjs from "dayjs";

export const getFormattedDate = (date: Date) => {
  const currentDate = dayjs(date);
  const formattedMonthYear = currentDate.format("DD:MM");
  const formattedDate = currentDate.format("ddd, D MMMM, HH:mm");

  return {
    formattedMonthYear: formattedMonthYear,
    fullFormatted: formattedDate,
  };
};
