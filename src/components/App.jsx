import React, { Component } from 'react';
import Form from './Form.jsx';
import * as ApiFunc from './APIFunctions.js';
import 'index.css';
import 'city.list.json';

const sample = 'pleasant grove';
export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weather: this.load(),
			currentUrl: 'http://api.openweathermap.org/data/2.5/weather?id=',
			forecastUrl: 'http://api.openweathermap.org/data/2.5/forecast?id=',
			appid: 'b6f7913093d721bf4bea96c5e6d258e9',
		};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	save(weather) {
		this.setState({ weather });
		localStorage.setItem('weather', JSON.stringify(weather));
	}

	load() {
		if (localStorage.getItem('weather') == null) {
			return console.log(sample);
		} else {
			const books = JSON.parse(localStorage.getItem('books'));

			return books;
		}
	}

	newSearch(e) {
		const location = document.getElementById('location').value;
		console.log(location);

		return { location };
	}

	handleSubmit(e) {
		e.preventDefault();

		const weather = this.newSearch(e);

		if (weather) {
			ApiFunc.getWeather(weather);
			document.querySelector('form').reset();
		}
	}

	render() {
		return (
			<div>
				<h1 className="myHeader">Hello </h1>
				<img />
				<Form onSubmit={this.handleSubmit} />
			</div>
		);
	}
}
