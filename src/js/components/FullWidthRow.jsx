import React from 'react';

export default React.createClass({

	render() {
		return (
			<div className='row no-gutter'>
				<div className='col-xs-12 text-center'>
					{this.props.children}
				</div>
			</div>
		);
	}
});
