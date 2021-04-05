import axios from "axios";
import { USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS } from "../constants/user";

const listUsers = () => async (dispatch) => {
    try {
        dispatch({ type: USER_LIST_REQUEST });
        const { data } = await axios.get(`http://localhost:3002/user`);
        console.log(data.response)
        dispatch({ type: USER_LIST_SUCCESS, payload:data.response });
    }
    catch (error) {
        dispatch({ type: USER_LIST_FAIL, payload:error.message });
    }
};

export {
    listUsers
};