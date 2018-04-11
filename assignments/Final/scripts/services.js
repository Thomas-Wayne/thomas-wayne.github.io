             
      var request = new XMLHttpRequest();
        request.open('GET', 'https://thomas-wayne.github.io/assignments/Final/data/services.json', true);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            var services = request.response;
            console.log(services);
        }//end of request


        function services(arr) {
            var out = "";
            var i;
            for(i = 0; i<arr.length; i++) {
                out += "Service: "+ arr[i].service + "Price: " + arr[i].price + '<br>';
        }
            document.getElementById("id01").innerHTML = out;
}