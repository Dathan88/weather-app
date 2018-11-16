import React from 'react';
import Capitalize from './Capitalize.jsx';

export default class Input extends React.Component {
	render() {
		return (
			<div className="input-field">
				<label htmlFor={this.props.inputInfo.id}>
					<Capitalize text={this.props.inputInfo.id} />
				</label>
				<input
					className="form-input"
					id={this.props.inputInfo.name}
					name={this.props.inputInfo.name}
					type={this.props.inputInfo.type}
					value={this.props.inputInfo.value}
					placeholder={this.props.inputInfo.placeholder}
					required={this.props.inputInfo.required}
					defaultChecked={this.props.inputInfo.defaultChecked}
				/>
			</div>
		);
	}
}
