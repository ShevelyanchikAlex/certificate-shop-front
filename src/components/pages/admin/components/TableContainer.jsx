import React from 'react';
import UsersTable from "./UsersTable";
import CertificatesTable from "./CertificatesTable";

const TableContainer = ({tableName}) => {
    const CERTIFICATES_TABLE = 'CERTIFICATES';

    return (
        <div>
            {tableName === CERTIFICATES_TABLE
                ? <CertificatesTable/>
                : <UsersTable/>}

        </div>
    );
};

export default TableContainer;