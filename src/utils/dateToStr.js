const dateToStr = (dateArg) =>
  dateArg
    .toLocaleString("en-us", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    })

export default dateToStr;