import data from '../../store/state/data';
import {
    GET_TREE_DATA,

} from "../actions/actionTypes";

const initialState = {
    TreeArrRedux: data
}

export default function Numbers(state = initialState, action) {
    switch (action.type) {
        case GET_TREE_DATA:
            return {...state}
        default:
            return {...state}
    }
}
