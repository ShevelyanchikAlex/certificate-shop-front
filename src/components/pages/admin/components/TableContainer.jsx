import React, {useState} from 'react';
import PaginationComponent from "../../certificates/components/PaginationComponent";
import CertificatesTable from "./CertificatesTable";
import UsersTable from "./UsersTable";
import {Link} from "react-router-dom";

const TableContainer = () => {
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [pageQty, setPageQty] = useState(1000);

    const changePageHandler = (number) => setPage(number);

    const changeSizeHandler = (number) => setSize(number);

    return (
        <div>
            {/*<CertificatesTable page={page} size={size}/>*/}
            <UsersTable page={page} size={size}/>
            <PaginationComponent
                page={page}
                pageQty={pageQty}
                size={size}
                pageHandler={changePageHandler}
                sizeHandler={changeSizeHandler}
            />
        </div>
    );
};

export default TableContainer;