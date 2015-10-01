import React from 'react';
import AppStore from '../stores/AppStore';
import Header from './Header.jsx';
import SearchBox from './SearchBox.jsx';
import Images from './Images.jsx';

export default React.createClass({
	_onChange() {
		this.setState(AppStore.getAll());
	},

	getInitialState() {
		return {
			data: AppStore.getAll()
		};
	},

	componentDidMount() {
		AppStore.addChangeListener(this._onChange);
	},

	componentWillUnmount() {
		AppStore.removeChangeListener(this._onChange);
	},

	render() {

		var props = {
			data: this.state.data
		}

		return (
			<div className='container-fluid'>
				<Header />
				<SearchBox {...props} />
				<Images {...props} />
			</div>
		);
	}
});
