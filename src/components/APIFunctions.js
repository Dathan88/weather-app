import $ from 'jquery';

async function getCurrentWeather(searchId) {
	const currentUrl = 'http://api.openweathermap.org/data/2.5/weather?id=';
	const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=';
	const appid = 'b6f7913093d721bf4bea96c5e6d258e9';
	try {
		const displayResults = document.querySelector('.weather');
		const img = document.querySelector('img');
		const response = await fetch(currentUrl + searchId + '&APPID=' + appid, {
			mode: 'cors',
		});
		const searchData = await response.json();
		const weatherData = searchData.weather;
		const icon = weatherData[0].icon;
		const iconUrl = 'http://openweathermap.org/img/w/' + icon + '.png';
		img.src = iconUrl;

		for (let i = 0; i < weatherData.length; i++) {
			console.log(weatherData[i].main);
			displayResults.innerHTML +=
				searchData.name + "'s conditions are " + weatherData[i].main + '<br>';
		}
		document.querySelector('.loader').style.display = 'none';
	} catch {
		console.log('error');
	}
}

/* async function getForecastWeather() {
	const weatherData = searchData.list;
	for (let i = 0; i < 10; i++) {
		console.log(weatherData[i].weather[0].main);
		displayResults.innerHTML +=
			searchData.city.name +
			"'s conditions on " +
			weatherData[i].dt_txt +
			' is ' +
			weatherData[i].weather[0].main +
			'<br>';
	}
} */

function getId(location) {
	$.getJSON('city.list.json', function(json) {
		const search = json.find(function(city) {
			return city.name === location;
		});
		getCurrentWeather(search.id);
	});
}

export { getId };
