import * as actionTypes from "./actionTypes";
import axios from "axios";

export const loadItems = items => {
    return {
        type: actionTypes.LOAD_ITEMS,
        payload: items,
    }
}
export const loadItemsFailed = (err) => {
    return {
        type: actionTypes.LOAD_ITEMS_FAILED,
        payload: err,
    }
}
export const fetchItems = () => dispatch => {
    axios.get("https://resort-booking-3bef9.firebaseio.com/items.json")
        .then(response => {
            dispatch(loadItems(response.data));
            console.log(response.data);

        })
        .catch(err => {
            dispatch(loadItemsFailed(err))
        })
}
export const rooms_filter = (filter) => {
    return {
        type: actionTypes.ROOMS_FILTER,
        payload: filter,
    }
}