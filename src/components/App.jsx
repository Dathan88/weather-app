import React, { Component } from 'react';
import Form from './Form.jsx';
import { getId } from './APIFunctions.js';
import 'index.css';
import 'city.list.json';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	capInput(location) {
		const locCap = location.charAt(0).toUpperCase() + location.slice(1);
		//console.log(localStorage);

		return locCap;
	}

	newSearch(e) {
		const location = document.getElementById('location').value;

		return this.capInput(location);
	}

	handleSubmit(e) {
		const showWeather = document.querySelector('.weather');
		const weatherInput = this.newSearch(e);

		e.preventDefault();
		$('H1').empty();

		document.querySelector('.loader').style.display = 'block';
		document.querySelector('img').src = '';

		showWeather.style.display = 'block';

		if (weatherInput) {
			getId(weatherInput);
			document.querySelector('form').reset();
		}
	}

	render() {
		return (
			<div className="container">
				<h1 id="myHeader" className="myHeader">
					Hello
				</h1>
				<div className="loader" />
				<div className="weatherContainer">
					<h1 className="weather" />
					<img />
				</div>
				<Form onSubmit={this.handleSubmit} />
			</div>
		);
	}
}
