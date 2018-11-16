import React from 'react';
import Input from './Input.jsx';
import Button from './Button.jsx';

export default class Form extends React.Component {
	render() {
		const inputInfo = {
			location: {
				id: 'location',
				name: 'location',
				type: 'text',
				placeholder: 'See weather in...',
				required: 'required',
			},
		};

		const btnInfo = {
			search: {
				id: 'searchBtn',
				type: 'submit',
				value: 'Search',
			},
		};

		return (
			<form name="my-form" className="my-form" onSubmit={this.props.onSubmit}>
				<Input form="my-form" inputInfo={inputInfo.location} />

				<Button form="my-form" btnInfo={btnInfo.search} />
			</form>
		);
	}
}
