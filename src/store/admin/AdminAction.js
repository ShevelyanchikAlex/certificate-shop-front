import * as adminTypes from "./AdminActionType";

export const searchRecord = (searchTerm) => ({
    type: adminTypes.SEARCH,
    payload: searchTerm,
});

export const changeSortDirection = (isAscSortDirection) => ({
    type: adminTypes.CHANGE_SORT_DIRECTION,
    payload: !isAscSortDirection,
});

export const selectOpinion = (selectedOpinion) => ({
    type: selectedOpinion,
    payload: selectedOpinion,
});

export const setPageRefresh = (isPageRefresh) => ({
    type: adminTypes.SET_PAGE_REFRESH,
    payload: isPageRefresh,
});

export const setCertificates = (certificates, ascSortDirection) => ({
    type: adminTypes.SET_CERTIFICATES,
    payload: sortByDateCertificates(certificates, ascSortDirection),
});

export const setFilteredCertificates = (searchTerm, certificates, selectedOpinion) => ({
    type: adminTypes.SET_FILTERED_CERTIFICATES,
    payload: filterCertificates(searchTerm, certificates, selectedOpinion),
});

export const setSelectedCertificate = (selectedCertificate) => ({
    type: adminTypes.SET_SELECTED_CERTIFICATE,
    payload: selectedCertificate,
});

export const setUsers = (users) => ({
    type: adminTypes.SET_USERS,
    payload: users,
});

export const setFilteredUsers = (searchTerm, users, selectedOpinion) => ({
    type: adminTypes.SET_FILTERED_USERS,
    payload: filterUsers(searchTerm, users, selectedOpinion),
});

const filterUsers = (searchTerm, users, selectedOpinion) => {
    if (!searchTerm) {
        return users;
    }
    switch (selectedOpinion) {
        case adminTypes.NAME:
            return users.filter(user => user.name.toLowerCase().includes(searchTerm.toLowerCase()));
        case adminTypes.EMAIL:
            return users.filter(user => user.email.toLowerCase().includes(searchTerm.toLowerCase()));
        default:
            return users;
    }
}

const filterCertificates = (searchTerm, certificates, selectedOpinion) => {
    if (!searchTerm) {
        return certificates;
    }
    switch (selectedOpinion) {
        case adminTypes.NAME:
            return certificates.filter(certificate => certificate.name.toLowerCase().includes(searchTerm.toLowerCase()));
        case adminTypes.DESCRIPTION:
            return certificates.filter(certificate => certificate.description.toLowerCase().includes(searchTerm.toLowerCase()));
        default:
            return certificates;
    }
}

const sortByDateCertificates = (certificates, ascSortDirection) => {
    return ascSortDirection ? sortDateASC(certificates) : sortDateDESC(certificates);
}

const sortDateDESC = (certificates) => {
    return certificates.sort(function (a, b) {
        return new Date(b.lastUpdateDate).getTime() - new Date(a.lastUpdateDate).getTime();
    });
}

const sortDateASC = (certificates) => {
    return certificates.sort(function (a, b) {
        return new Date(a.lastUpdateDate).getTime() - new Date(b.lastUpdateDate).getTime();
    });
}