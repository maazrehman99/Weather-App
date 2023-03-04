function titleCase(str) {
	return str.toLowerCase().split(' ').map(function(word) {
	  return (word.charAt(0).toUpperCase() + word.slice(1));
	}).join(' ');
  }

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '35a70dc5femsh0dcff63381df1b8p16864ejsn8714086aed9f',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather=(city)=>{
	cityName.innerHTML= titleCase(city)

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city , options)
	.then(response => response.json())
	.then(response => {console.log(response)
		cloud_pct.innerHTML = response.cloud_pct 
		temp.innerHTML = response.temp 
		temp2.innerHTML = response.temp 
		feels_like.innerHTML = response.feels_like 
		humidity.innerHTML = response.humidity 
		humidity2.innerHTML = response.humidity 
		min_temp.innerHTML = response.min_temp 
		max_temp.innerHTML = response.max_temp 
		wind_speed.innerHTML = response.wind_speed 
		wind_degrees.innerHTML = response.wind_degrees 
		wind_degrees2.innerHTML = response.wind_degrees 
		sunrise.innerHTML = response.sunrise 
		sunset.innerHTML = response.sunset 

		
	})
	.catch(err => console.error(err));
	document.getElementById("submit").value=""
}


submit.addEventListener("click",(e)=>{
	e.preventDefault()
getWeather(city.value)

city.value=""

})

getWeather("Karachi")


const karachiWeather=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=karachi', options)
	.then(response => response.json())
	.then(response => {console.log(response)
		karCloud.innerHTML = response.cloud_pct 
	
		karFeels.innerHTML = response.feels_like 
		 
		karHum.innerHTML = response.humidity 
		karMin.innerHTML = response.min_temp 
		karMax.innerHTML = response.max_temp 
		

		
	})
	.catch(err => console.error(err));

	
}

karachiWeather("karachi")


const islamabadWeather=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=islamabad', options)
	.then(response => response.json())
	.then(response => {console.log(response)
		islCloud.innerHTML = response.cloud_pct 
	
		islFeels.innerHTML = response.feels_like 
		
		islHum.innerHTML = response.humidity 
		islMin.innerHTML = response.min_temp 
		islMax.innerHTML = response.max_temp 
		

		
	})
	.catch(err => console.error(err));

	
}


islamabadWeather()

const lahoreWeather=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=lahore', options)
	.then(response => response.json())
	.then(response => {console.log(response)
		lahCloud.innerHTML = response.cloud_pct 
	
		lahFeels.innerHTML = response.feels_like 
		
		lahHum.innerHTML = response.humidity 
		lahMin.innerHTML = response.min_temp 
		lahMax.innerHTML = response.max_temp 
		

		
	})
	.catch(err => console.error(err));

	
}

lahoreWeather()

const peshawarWeather=()=>{
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=peshawar', options)
	.then(response => response.json())
	.then(response => {console.log(response)
		pesCloud.innerHTML = response.cloud_pct 
	
		pesFeels.innerHTML = response.feels_like 
		
		pesHum.innerHTML = response.humidity 
		pesMin.innerHTML = response.min_temp 
		pesMax.innerHTML = response.max_temp 
		

		
	})
	.catch(err => console.error(err));

	
}

peshawarWeather()