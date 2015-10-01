import React from 'react';

import AppActions from '../actions/AppActions';

export default React.createClass({

	_onClick() {
		AppActions.updateAppStore('overlayContent', undefined);
	},

	_getAddressLines(content) {

		if (!content.address) {
			return;
		}

		var result = [];
		var lineNum = 1;
		var line = content.address['line' + lineNum];

		while (line) {
			result.push(<li>{line}</li>);
			lineNum = lineNum + 1;
			line = content.address['line' + lineNum];
		}

		return result;
	},

	render() {

		if (!this.props.mapData.overlayContent || !this.props.mapData.overlayContent.properties) {
			return false;
		}

		var content = this.props.mapData.overlayContent.properties;
		var overlayClasses = ['overlay'];

		if (this.props.className) {	
			overlayClasses.push(this.props.className);
		}

		return (
			<div className={overlayClasses.join(' ')} onClick={this._onClick}>
				<h1>{content.title}</h1>
				<p>
					<ol>
						{this._getAddressLines(content)}
					</ol>
				</p>
			</div>
		);
	}
});
