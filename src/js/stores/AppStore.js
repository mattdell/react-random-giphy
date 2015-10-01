import Dispatcher from '../Dispatcher';
import Constants from '../Constants';
import assign from 'object-assign';
import {EventEmitter} from 'events';

// data storage
let _data = {
	images: []
};

// add private functions to modify data
function addItem(key, value) {
	_data[key] = value;
}

// Facebook style store creation.
const AppStore = assign({}, EventEmitter.prototype, {

	// Allow Controller-View to register itself with store
	addChangeListener(callback) {
		this.on(Constants.CHANGE_EVENT, callback);
	},

	removeChangeListener(callback) {
		this.removeListener(Constants.CHANGE_EVENT, callback);
	},

	// triggers change listener above, firing controller-view callback
	emitChange() {
		this.emit(Constants.CHANGE_EVENT);
	},

	// public methods used by Controller-View to operate on data
	getAll() {
		return _data;
	},

	// register store with dispatcher, allowing actions to flow through
	dispatcherIndex: Dispatcher.register(function(payload) {
		let action = payload.action;

		switch(action.actionType) {

			case Constants.ActionTypes.UPDATED_STORE:

				if (action.data) {
					addItem(action.data.key, action.data.value);
					console.log('Updated store', _data);
					AppStore.emitChange();
				}
				break;

			case Constants.ActionTypes.UPDATED_STORE_IMAGE:
				if (action.data) {
					_data.images.push(action.data.value);
					console.log('Updated store', _data);
					AppStore.emitChange();
				}
				break;
			}
	})
});

export default AppStore;
