import Dispatcher from '../Dispatcher';
import Constants from '../Constants';

import ApiUtils from '../utils/ApiUtils';

// This class is a HACK! due to ES6 weirdness.
export default function() {

	var actions = {};

	actions.getGiph = function(searchQuery) {
		ApiUtils
			.getGiph(searchQuery)
			.then(function (value) {

				// Dispatch an action containing the places.
				Dispatcher.handleViewAction({
					actionType: Constants.ActionTypes.UPDATED_STORE_IMAGE,
					data: {key: 'image', value: value.data.fixed_height_downsampled_url}
				});
			});
	},

	actions.updateAppStoreFromInput = function(event) {
		var key = event.currentTarget.name;
		var value = event.currentTarget.value;
		actions.updateAppStore(key, value);
	};

	actions.updateAppStore = function(key, value) {
		Dispatcher.handleViewAction({
			actionType: Constants.ActionTypes.UPDATED_STORE,
			data: {key,	value}
		});
	};

	return actions;
};
