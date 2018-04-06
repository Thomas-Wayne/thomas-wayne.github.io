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

          for (var i = 0; i < data.length; i++) {
                        var myArticle = document.createElement('article');
            var myH2 = document.createElement('tr, td');
            var myPara1 = document.createElement('tr, td');
            
            

            myH2.textContent = data[i].service;
            myPara1.textContent = data[i].price;
            

            }

            myArticle.appendChild(myH2);
            myArticle.appendChild(myPara1);
            

            section.appendChild(myArticle);
  }
