const addDays = require("date-fns/addDays");
const getNewDateAfterXDays = (days) => {
  const newDate = addDays(new Date(2020, 8, 22), days);
  return `${newDate.getDate()}-${newDate.getMonth()}-${newDate.getFullYear()}`;
};
module.exports = getNewDateAfterXDays;
console.log(getNewDateAfterXDays(10));
