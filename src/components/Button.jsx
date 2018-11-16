import React from 'react';

export default class Button extends React.Component {
	render() {
		return (
			<button
				className="form-btn"
				id={this.props.btnInfo.id}
				type={this.props.btnInfo.type}
			>
				{this.props.btnInfo.value}
			</button>
		);
	}
}
