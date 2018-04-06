var weatherObject = new XMLHttpRequest();

weatherObject.open('GET', 'https://api.wunderground.com/api/5013cd1f1eba4d2a/conditions/q/OR/Springfield.json', true);

weatherObject.send();

weatherObject.onload = function () {
    var weatherInfo = JSON.parse(weatherObject.responseText);
    console.log(weatherInfo);
    
    document.getElementById('place').innerHTML = weatherInfo.current_observation.display_location.full;
    document.getElementById('currentTemp').innerHTML = weatherInfo.current_observation.temp_f;
    document.getElementById('weather_icon').src = weatherInfo.current_observation.icon_url;
    document.getElementById('weather').innerHTML = weatherInfo.current_observation.weather;
    document.getElementById('precip').innerHTML = weatherInfo.current_observation.precip_today_in;
    document.getElementById('winddir').innerHTML = weatherInfo.current_observation.wind_dir;
    document.getElementById('wind').innerHTML = weatherInfo.current_observation.wind_mph;
    document.getElementById('windchill').innerHTML = weatherInfo.current_observation.windchill_f;
      
} 

var weatherObjectday = new XMLHttpRequest();

weatherObjectday.open('GET', 'https://api.wunderground.com/api/5013cd1f1eba4d2a/forecast/q/OR/Springfield.json', true);

weatherObjectday.send();

weatherObjectday.onload = function () {
    var weatherInfo = JSON.parse(weatherObjectday.responseText);
    console.log(weatherInfo);
    
    document.getElementById('high').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].high.fahrenheit;
    document.getElementById('low').innerHTML = weatherInfo.forecast.simpleforecast.forecastday["0"].low.fahrenheit;
}

var weatherObject10day = new XMLHttpRequest();

weatherObject10day.open('GET', 'https://api.wunderground.com/api/5013cd1f1eba4d2a/forecast10day/q/OR/Springfield.json', true);

weatherObject10day.send();

weatherObject10day.onload = function () {
    var weatherInfo = JSON.parse(weatherObject10day.responseText);
    console.log(weatherInfo);
    
 /*function showData(jsonObj) {
          var forecastbyday = jsonObj['forecastday'];

          for (var i = 0; i < forecastday.length; i++) {
            var weathericon = document.createElement('p');
            var tempHigh = document.createElement('p');
            var tempLow = document.createElement('p');
            
            document.getElementById('weathericon').src = weatherInfo.forecast.simpleforecast.forecastday[0].icon_url;
            document.getElementById('tempHigh').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit;
            document.getElementById('tempLow').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[0].low.fahrenheit;
                       
          }
  }*/
   
   

    document.getElementById('weathericon0').src = weatherInfo.forecast.simpleforecast.forecastday[0].icon_url;
    document.getElementById('high0').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[0].high.fahrenheit;
    document.getElementById('low0').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[0].low.fahrenheit;
    
    document.getElementById('weathericon1').src = weatherInfo.forecast.simpleforecast.forecastday[1].icon_url;
    document.getElementById('high1').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[1].high.fahrenheit;
    document.getElementById('low1').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[1].low.fahrenheit;
    
    document.getElementById('weathericon2').src = weatherInfo.forecast.simpleforecast.forecastday[2].icon_url;
    document.getElementById('high2').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[2].high.fahrenheit;
    document.getElementById('low2').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[2].low.fahrenheit;
    
    document.getElementById('weathericon3').src = weatherInfo.forecast.simpleforecast.forecastday[3].icon_url;
    document.getElementById('high3').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[3].high.fahrenheit;
    document.getElementById('low3').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[3].low.fahrenheit;
    
    document.getElementById('weathericon4').src = weatherInfo.forecast.simpleforecast.forecastday[4].icon_url;
    document.getElementById('high4').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[4].high.fahrenheit;
    document.getElementById('low4').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[4].low.fahrenheit;
    
    document.getElementById('weathericon5').src = weatherInfo.forecast.simpleforecast.forecastday[5].icon_url;
    document.getElementById('high5').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[5].high.fahrenheit;
    document.getElementById('low5').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[5].low.fahrenheit;
    
    document.getElementById('weathericon6').src = weatherInfo.forecast.simpleforecast.forecastday[6].icon_url;
    document.getElementById('high6').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[6].high.fahrenheit;
    document.getElementById('low6').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[6].low.fahrenheit;
    
    document.getElementById('weathericon7').src = weatherInfo.forecast.simpleforecast.forecastday[7].icon_url;
    document.getElementById('high7').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[7].high.fahrenheit;
    document.getElementById('low7').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[7].low.fahrenheit;
    
    document.getElementById('weathericon8').src = weatherInfo.forecast.simpleforecast.forecastday[8].icon_url;
    document.getElementById('high8').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[8].high.fahrenheit;
    document.getElementById('low8').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[8].low.fahrenheit;
    
    document.getElementById('weathericon9').src = weatherInfo.forecast.simpleforecast.forecastday[9].icon_url;
    document.getElementById('high9').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[9].high.fahrenheit;
    document.getElementById('low9').innerHTML = weatherInfo.forecast.simpleforecast.forecastday[9].low.fahrenheit;
        
}
