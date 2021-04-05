import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { addEventReducer, deleteEventReducer, editEventReducer, eventDetailReducer, eventListReducer } from './reducers/event';
import { userListReducer } from './reducers/user';

const reducer = combineReducers({
    eventList: eventListReducer,
    eventDetail: eventDetailReducer,
    addEvent: addEventReducer,
    deleteEvent: deleteEventReducer,
    editEvent: editEventReducer,
    userList: userListReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;