import * as adminTypes from "./AdminActionType";

const adminState =
    {
        certificates: [],
        filteredCertificates: [],
        selectedCertificate: '',
        users: [],
        filteredUsers: [],
        usersOpinions: ['Name', 'Email'],
        certificatesOpinions: ['Name', 'Description'],
        selectedOpinion: 'Name',
        searchTerm: '',
        ascSortDirection: false,
        isPageRefresh: false
    }

export const adminReducer = (state = adminState, action) => {
    switch (action.type) {
        case adminTypes.SET_CERTIFICATES:
            return {...state, certificates: action.payload};
        case adminTypes.SET_FILTERED_CERTIFICATES:
            return {...state, filteredCertificates: action.payload};
        case adminTypes.SET_SELECTED_CERTIFICATE:
            return {...state, selectedCertificate: action.payload};
        case adminTypes.CHANGE_SORT_DIRECTION:
            return {...state, ascSortDirection: action.payload};
        case adminTypes.SET_PAGE_REFRESH:
            return {...state, isPageRefresh: action.payload};
        case adminTypes.SET_USERS:
            return {...state, users: action.payload};
        case adminTypes.SET_FILTERED_USERS:
            return {...state, filteredUsers: action.payload};
        case adminTypes.GET_FILTERED_USERS:
            return {...state, filteredUsers: action.payload};
        case adminTypes.SEARCH:
            return {...state, searchTerm: action.payload};
        case adminTypes.NAME:
        case adminTypes.DESCRIPTION:
        case adminTypes.EMAIL:
            return {...state, selectedOpinion: action.payload};
        default:
            return state;
    }
}