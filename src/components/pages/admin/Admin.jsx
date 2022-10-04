import React from 'react';
import '../../../assets/styles/Admin.css';
import PaginationComponent from "../certificates/components/PaginationComponent";
import AdminTable from "./components/AdminTable";

const Admin = () => {
    return (
        <div>
            <div className={'admin-table-container'}>
                <h1 className={'table-container-header'}>Certificates</h1>
                <AdminTable/>
            </div>
            <PaginationComponent
                page={10}
                pageQty={100}
                size={10}
                pageHandler={() => {
                }}
                sizeHandler={() => {
                }}/>
        </div>
    );
};

export default Admin;