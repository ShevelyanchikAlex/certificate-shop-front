import * as paginationActionTypes from "./PaginationActionType";

const paginationState =
    {
        page: 1,
        size: 10,
        pageQty: 1,
    }

export const paginationReducer = (state = paginationState, action) => {
    switch (action.type) {
        case paginationActionTypes.SET_PAGE:
            return {...state, page: action.payload};
        case paginationActionTypes.SET_SIZE:
            return {...state, size: action.payload};
        case paginationActionTypes.SET_PAGE_QTY:
            return {...state, pageQty: action.payload};
        default:
            return state;
    }
}