             
        var request = new XMLHttpRequest();
        request.open('GET', 'https://thomas-wayne.github.io/assignments/Final/data/services.json', true);
        request.responseType = 'json';
        request.send();
        
        request.onload = function() {
            var services = request.response;
            console.log(services);
        }//end of request
        
        function showData(jsonObj) {
            
            var services = jsonObj[services];
            
            for (var i = 0; i < services.length; i++){
            
                var service = document.createElement('p');
                var price = document.createElement('p');
        
  
}       
        
        document.getElementById('Service').innerHTML = services[i].service;
        document.getElementById('Price').innerHTML = services[i].price;
            
}