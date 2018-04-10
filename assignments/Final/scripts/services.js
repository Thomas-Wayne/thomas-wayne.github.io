             
/*        var request = new XMLHttpRequest();
        request.open('GET', 'https://thomas-wayne.github.io/assignments/Final/data/services.json', true);
        request.responseType = 'json';
        request.send();
        
        /*request.onload = function() {
            var services = request.response;
            console.log(services);
        }//end of request*/


function onLoad(){
			var url='https://thomas-wayne.github.io/assignments/Final/data/services.json';
			$.getJSON(url, function(json){
				var table = $('<table>');
				table.attr('border','1');
				var tr = $('<tr>');
				var td = $('<td>');
				td.html("Service");
				tr.append(td);
				td = $('<td>');
				td.html('Price');
				tr.append(td);
				table.append(tr);
				for( var i=0; i<json.length;i++){
					var tr = $('<tr>');
					var td = $('<td>');
					td.html(json[i].service);
					tr.append(td);
					td = $('<td>');
					td.html(json[i].price);
					tr.append(td);
					table.append(tr);
				}
				$('body').append(table);
			});
		}