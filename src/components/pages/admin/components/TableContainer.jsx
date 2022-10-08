import React, {useState} from 'react';
import PaginationComponent from "../../certificates/components/PaginationComponent";
import UsersTable from "./UsersTable";
import CertificatesTable from "./CertificatesTable";

const TableContainer = ({tableName}) => {
    const CERTIFICATES_TABLE = 'CERTIFICATES';

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [pageQty, setPageQty] = useState(1000);

    const changePageHandler = (number) => setPage(number);

    const changeSizeHandler = (number) => setSize(number);

    return (
        <div>
            <h1 className={'table-container-header'}>{tableName}</h1>
            {tableName === CERTIFICATES_TABLE
                ? <CertificatesTable page={page} size={size}/>
                : <UsersTable page={page} size={size}/>}
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