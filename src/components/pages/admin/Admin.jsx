import React from 'react';
import '../../../assets/styles/Admin.css';
import TableContainer from "./components/TableContainer";

const Admin = () => {
    return (
        <div>
            <div className={'admin-table-container'}>
                <h1 className={'table-container-header'}>Certificates</h1>
                <TableContainer/>
            </div>
        </div>
    );
};

export default Admin;