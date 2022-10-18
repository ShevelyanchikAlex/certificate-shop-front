import React from 'react';
import {Pagination} from "@mui/material";
import PageSizeSelector from "./PageSizeSelector";
import {useDispatch, useSelector} from "react-redux";
import {setPage} from "../../../../store/pagination/PaginationAction";

const PaginationComponent = () => {
    const page = useSelector(state => state.paginationData.page);
    const pageQty = useSelector(state => state.paginationData.pageQty);
    const dispatch = useDispatch();

    return (
        <div className={'bottom-container'}>
            <Pagination
                color={"primary"}
                page={page}
                count={pageQty}
                onChange={(_, number) => dispatch(setPage(number))}
            />
            <PageSizeSelector/>
        </div>
    );
};

export default PaginationComponent;