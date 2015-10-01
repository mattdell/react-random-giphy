import {Dispatcher} from 'flux';
import Constants from './Constants';
import assign from 'object-assign';
import async from 'async';

// Queue the actions. Implementation discussion found at https://github.com/facebook/flux/issues/106
var queue = async.queue(function(task, callback) {

	var payload = {
		source: Constants.PayloadSources[task.source],
		action: task.action
	};

	AppDispatcher.dispatch(payload);
	callback();
}, 1); // Only one worker, one event at a time

/**
 * Purpose: to create a single dispatcher instance for use throughout the
 * entire app. The two methods below are merely thin wrappers that describe
 * where the action originated from. Not mandatory, but may be helpful
 **/
var AppDispatcher = assign(new Dispatcher(), {

	/**
	 * This does nothing yet, but will come in handy if you need to respond
	 * to server-originated events and treat them differently...
	 **/
	handleServerAction(action) {
		queue.push({source: Constants.ActionSources.SERVER_ACTION, action: action});
	},

	/**
	 * Very thin wrapper around the core dispatcher API, just to signify
	 * that actions triggered here originated on the client-side
	 **/
	handleViewAction(action) {
		queue.push({source: Constants.ActionSources.VIEW_ACTION, action: action});
	}
});

module.exports = AppDispatcher;
