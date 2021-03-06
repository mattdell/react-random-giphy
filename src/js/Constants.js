import keyMirror from 'react/lib/keyMirror';

export default {
  // event name triggered from store, listened to by views
  CHANGE_EVENT: 'change',

  PayloadSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  }),

  // Each time you add an action, add it here... They should be past-tense
  ActionTypes: keyMirror({
    // Map Store
    UPDATED_STORE: null,
    UPDATED_STORE_IMAGE: null
  }),

  ActionSources: keyMirror({
    SERVER_ACTION: null,
    VIEW_ACTION: null
  })
};
