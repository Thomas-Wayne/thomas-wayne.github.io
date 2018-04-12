//Hamburger menu

function toggleNavMenu(){
    
    document.getElementById("primaryNav").classList.toggle("hide");
}


//Current date

var DaysofWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var MonthsinaYear = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var d = new Date();
var dayName = DaysofWeek[d.getDay()];
var day = d.getDate();
var monthName = MonthsinaYear[d.getMonth()];
var year = d.getFullYear();

document.getElementById("currentdate").innerHTML = dayName + ", " + monthName + " " + day +  ", " + year;


//Active navigation script

var urlString = document.location.href;
var urlArray = urlString.split('/');
var pageHREF=urlArray[urlArray.length -1];

if (pageHREF !=="") {
    
    var menu = document.querySelectorAll('ul#primaryNav li a');
    var i;
    
    for(i=0; i<menu.length; i++){
        
        var currentURL=(menu[i].getAttribute("href"));
        menu[i].parentNode.className="";
            if(currentURL===pageHREF){
                menu[i].parentNode.className="active";
            }
    }


}


