import axios from "axios";
import { EVENT_ADD_FAIL, EVENT_ADD_REQUEST, EVENT_ADD_SUCCESS, EVENT_DELETE_REQUEST, EVENT_DELETE_SUCCESS, EVENT_EDIT_FAIL, EVENT_EDIT_REQUEST, EVENT_EDIT_SUCCESS, EVENT_LIST_FAIL, EVENT_LIST_REQUEST, EVENT_LIST_SUCCESS, EVENT_RESET } from "../constants/event";

const listEvents = () => async (dispatch) => {
    try {
        dispatch({ type: EVENT_LIST_REQUEST });
        const { data } = await axios.get(`http://localhost:3002/event`);
        dispatch({ type: EVENT_LIST_SUCCESS, payload:data.response });
    }
    catch (error) {
        dispatch({ type: EVENT_LIST_FAIL, payload:error.message });
    }
};

const eventDetail = (id) => async (dispatch) => {
    try {
        dispatch({ type: EVENT_LIST_REQUEST });
        const { data } = await axios.get(`http://localhost:3002/event/${id}`);
        dispatch({ type: EVENT_LIST_SUCCESS, payload: data.response });
    }
    catch (error) {
        dispatch({ type: EVENT_LIST_FAIL, payload:error.message });
    }
};

const addEvent = (newEvent) => async (dispatch) => {
    dispatch({ type: EVENT_ADD_REQUEST, payload:newEvent });
    try {
        const { data } = await axios.post(`http://localhost:3002/event`, newEvent);
        dispatch({ type: EVENT_ADD_SUCCESS, payload: data });
        dispatch({ type: EVENT_RESET });
    }
    catch (error) {
        dispatch({ type: EVENT_ADD_FAIL, payload:error.message });
    }
};

const editEvent = (event, id) => async (dispatch) => {
    console.log(id)
    dispatch({ type: EVENT_EDIT_REQUEST, payload:event });
    try {
        const { data } = await axios.patch(`http://localhost:3002/event/${id}`, event);
        dispatch({ type: EVENT_EDIT_SUCCESS, payload: data });
        dispatch({ type: EVENT_RESET });
    }
    catch (error) {
        dispatch({ type: EVENT_EDIT_FAIL, payload:error.message });
    }
};

const deleteEvent = (id) => async (dispatch) => {
    console.log(id)
    dispatch({ type: EVENT_DELETE_REQUEST, payload:id });
    try {
        const { data } = await axios.delete(`http://localhost:3002/event/${id}`);
        dispatch({ type: EVENT_DELETE_SUCCESS, payload:data.response });
    }
    catch (error) {
        dispatch({ type: EVENT_ADD_FAIL, payload:error.message });
    }
};

export {
    listEvents,
    eventDetail,
    addEvent,
    editEvent,
    deleteEvent
};