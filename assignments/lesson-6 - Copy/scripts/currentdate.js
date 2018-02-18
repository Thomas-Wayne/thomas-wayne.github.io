var DaysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var MonthsinaYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
var dayName = DaysofWeek[d.getDay()];
var day = d.getDate();
var monthName = MonthsinaYear[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = dayName + ", " + monthName + " " + day +  ", " + year;