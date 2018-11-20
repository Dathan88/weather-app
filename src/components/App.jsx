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

	newSearch(e) {
		const location = document.getElementById('location').value;

		console.log(location);

		return { location };
	}

	handleSubmit(e) {
		const hideHeader = document.querySelector('.myHeader');
		const showWeather = document.querySelector('.weather');
		const weatherInput = this.newSearch(e);

		e.preventDefault();
		$('.myHeader').empty();

		hideHeader.style.display = 'none';
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
				<div className="weatherContainer">
					<h1 className="weather" />
					<img />
				</div>
				<Form onSubmit={this.handleSubmit} />
			</div>
		);
	}
}
