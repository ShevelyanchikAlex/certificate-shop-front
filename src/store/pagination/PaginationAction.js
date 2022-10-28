import * as paginationActionTypes from "./PaginationActionType";

const PAGE_OFFSET = 2;

export const setPage = (page) => ({
    type: paginationActionTypes.SET_PAGE,
    payload: page,
});

export const setSize = (size) => ({
    type: paginationActionTypes.SET_SIZE,
    payload: size,
});

export const setPageQtyWithParams = (count, size) => ({
    type: paginationActionTypes.SET_PAGE_QTY,
    payload: Math.ceil(count / size) - PAGE_OFFSET,
});

export const setPageQty = (pageQty) => ({
    type: paginationActionTypes.SET_PAGE_QTY,
    payload: pageQty,
});