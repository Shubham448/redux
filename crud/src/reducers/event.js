const { EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_LIST_FAIL, EVENT_ADD_REQUEST, EVENT_ADD_SUCCESS, EVENT_ADD_FAIL, EVENT_RESET, EVENT_DELETE_REQUEST, EVENT_DELETE_SUCCESS, EVENT_DELETE_FAIL, EVENT_EDIT_REQUEST, EVENT_EDIT_SUCCESS, EVENT_EDIT_FAIL } = require("../constants/event");

function eventListReducer(state = { events: [] }, action ) {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loading: true, events:[] };
        case EVENT_LIST_SUCCESS:
            return { loading: false, events: action.payload };
        case EVENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

function eventDetailReducer(state = { event: [] }, action ) {
    switch (action.type) {
        case EVENT_LIST_REQUEST:
            return { loading: true, event:[] };
        case EVENT_LIST_SUCCESS:
            return { loading: false, event: action.payload };
        case EVENT_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    };
};

function addEventReducer(state = {}, action ) {
    console.log(action)
    switch(action.type) {
        case EVENT_RESET:
            return { ...state, loading:false, success: null };
        case EVENT_ADD_REQUEST:
            return { loading: true, success:null };
        case EVENT_ADD_SUCCESS:
            return { loading:false, newEvent: action.payload, success:true };
        case EVENT_ADD_FAIL:
            return { loading:false, error: action.payload, success: null };
        default:
            return state;
    };
};

function editEventReducer(state = {}, action ) {
    console.log(action)
    switch(action.type) {
        case EVENT_RESET:
            return { ...state, loading:false, success: null };
        case EVENT_EDIT_REQUEST:
            return { loading: true, success:null };
        case EVENT_EDIT_SUCCESS:
            return { loading:false, newEvent: action.payload, success:true };
        case EVENT_EDIT_FAIL:
            return { loading:false, error: action.payload, success: null };
        default:
            return state;
    };
};

function deleteEventReducer(state = {}, action ) {
    switch(action.type) {
        case EVENT_DELETE_REQUEST:
            return { loading: true };
        case EVENT_DELETE_SUCCESS:
            return { loading:false, deleteEvent: action.payload };
        case EVENT_DELETE_FAIL:
            return { loading:false, error: action.payload };
        default:
            return state;
    };
};

export {
    eventListReducer,
    eventDetailReducer,
    addEventReducer,
    editEventReducer,
    deleteEventReducer
};