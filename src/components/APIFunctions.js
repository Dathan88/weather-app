import $ from 'jquery';

async function getWeather(searchId) {
	const currentUrl = 'http://api.openweathermap.org/data/2.5/weather?id=';
	const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=';
	const appid = 'b6f7913093d721bf4bea96c5e6d258e9';
	console.log(searchId);

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

		console.log(searchData);

		for (let i = 0; i < weatherData.length; i++) {
			console.log(weatherData[i].main);
			displayResults.innerHTML +=
				searchData.name + "'s conditions are " + weatherData[i].main + '<br>';
		}
	} catch {
		console.log('error');
	}
}

function getId({ location }) {
	$.getJSON('city.list.json', function(json) {
		const search = json.find(function(city) {
			return city.name === location;
		});
		getWeather(search.id);
	});
}

export { getId };
