import React from 'react';

export default class Capitalize extends React.Component {
	render() {
		return capitalText(this.props.text);
	}
}

const capitalText = str => {
	return str.charAt(0).toUpperCase() + str.slice(1);
};
