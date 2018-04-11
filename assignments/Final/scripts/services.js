        var section = document.querySelector('section');
        
        var request = new XMLHttpRequest();
        request.open('GET', 'https://thomas-wayne.github.io/assignments/Final/data/services.json', true);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            var services = request.response;
            showData(services);
        }
        
        function showData(jsonObj) {
          var data = jsonObj['services'];
           var price = "";
            var service = "";

          for (var i = 0; i < data.length; i++) {            
                service += data[i].service +'<br>'; 
                price += data[i].price +'<br>';
        }
            document.getElementById("service").innerHTML = service;
            document.getElementById("price").innerHTML = price;
            
        }
        