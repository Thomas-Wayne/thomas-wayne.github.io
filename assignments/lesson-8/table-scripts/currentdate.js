var MonthsinaYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
var day = d.getDate();
var monthName = MonthsinaYear[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = "Compiled " + monthName + " " + day +  ", " + year + " by WThomas";