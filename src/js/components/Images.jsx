import React from 'react';
import FullWidthRow from './FullWidthRow.jsx';

export default React.createClass({

	_getImages() {
		var images = [];

		for (var i = this.props.data.images.length - 1; i >= 0; i--) {
			images.push(
				<FullWidthRow key={i}>
					<div className='image'>
						<img src={this.props.data.images[i]} />
					</div>
				</FullWidthRow>
			);
		};

		return images;
	},

	render() {
		return (
			<div>
				{this._getImages()}
			</div>
		);
	}
});
