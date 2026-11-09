 
$(document).ready(function() {
	
    
			$.post(
				'/weather.php',
				{},
				function(data){
					$("#current_weather_in_ufa").html(data + "&deg;С");
					//console.log(data);
				}			
			);
		
});
  

