import React from 'react';
import AppStore from '../stores/AppStore';
import IAppActions from '../actions/AppActions';
import FullWidthRow from './FullWidthRow.jsx';

var AppActions = IAppActions();

export default React.createClass({

	_onclick(e) {
		e.preventDefault();

		AppActions.getGiph(this.props.data.searchQuery);
	},

	render() {
		return (
			<FullWidthRow>
				<div className='search-box'>
					<div className='search-box-field'>
						<span className='search-box-prefix'>/giphy</span>
						<input name='searchQuery' type='text' onChange={AppActions.updateAppStoreFromInput} />
					</div>
					<div className='search-box-submit'>
						<button onClick={this._onclick}>Giph me</button>
					</div>
				</div>
			</FullWidthRow>
		);
	}
});
