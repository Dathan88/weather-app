import React, { Component } from 'react';

const currentUrl = 'http://api.openweathermap.org/data/2.5/weather?id=';
const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=';
const appid = 'b6f7913093d721bf4bea96c5e6d258e9';

function getWeather() {
	try {
		$.getJSON('city.list.json', function(json) {
			console.log(json[1]); // this will show the info it in firebug console
		});
		/* const change = document.querySelector('h1');
		const response = await fetch(
			'http://api.openweathermap.org/data/2.5/weather?q=bluewater,us&APPID=b6f7913093d721bf4bea96c5e6d258e9',
			{ mode: 'cors' } 
		);
		const weatherData = await response.json();
		change.src = weatherData.name;
		console.log(weatherData);*/
	} catch {
		console.log('error');
	}
}

function apiInfo() {
	const currentUrl =
		'http://api.openweathermap.org/data/2.5/weather?id=' +
		{ id } +
		'&appid=' +
		{ appid };
	const forecastUrl =
		'http://api.openweathermap.org/data/2.5/forecast?id=' +
		{ id } +
		'&appid=' +
		{ appid };
	const weatherIcon = '';
}

export { getWeather, apiInfo };

/* export default class LookUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUrl: 'http://api.openweathermap.org/data/2.5/weather?id=',
			forecastUrl: 'http://api.openweathermap.org/data/2.5/forecast?id=',
			appid: 'b6f7913093d721bf4bea96c5e6d258e9',
		};
	}
	render() {
		return (
			<button
				onClick={() => {
					getWeather();
				}}
			>
				Click This
			</button>
		);
	}
} */

/* 
async function getWeatherDemo() {
	const change = document.querySelector('h1');

	fetch(
		'http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=b6f7913093d721bf4bea96c5e6d258e9',
		{ mode: 'cors' }
	)
		.then(function(response) {
			return response.json();
		})
		.then(function(response) {
			change.innerHTML =
				response.name +
				'<br>' +
				response.weather[0].main +
				', ' +
				response.weather[1].main +
				' and ' +
				response.weather[2].main +
				'<br>' +
				'Lat: ' +
				response.coord.lat +
				' and Long: ' +
				response.coord.lon;

			console.log(response);
		});
} 
*/
