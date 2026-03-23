process.noDeprecation = true;
var url = require("url");
var addr = "https://localhost:8080/default.html?year=2025&month=feb";
var a = url.parse(addr, true);
var year = parseInt(a.query.year);
if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
  console.log(year + " is a leap year");
} else {
  console.log(year + " is not a leap year");
}