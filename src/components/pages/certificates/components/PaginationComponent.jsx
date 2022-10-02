import React from 'react';
import {Pagination} from "@mui/material";
import PageSizeSelector from "./PageSizeSelector";

const PaginationComponent = ({page, pageQty, size, pageHandler, sizeHandler}) => {
    return (
        <div className={'bottom-container'}>
            <Pagination
                page={page}
                count={pageQty}
                onChange={(_, number) => pageHandler(number)}
            />
            <PageSizeSelector size={size} sizeHandler={sizeHandler}/>
        </div>
    );
};

export default PaginationComponent;