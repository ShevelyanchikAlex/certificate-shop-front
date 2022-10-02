import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select}  from "@mui/material";

const PageSizeSelector = ({size, sizeHandler}) => {
    return (
        <FormControl className={'size-selector'} sx={{bottom: 7, marginY: 1, m: 1, minWidth: 70}} size="small">
            <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={size}
                onChange={(event) => sizeHandler(event.target.value)}
            >
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={50}>50</MenuItem>
            </Select>
        </FormControl>
    );
};

export default PageSizeSelector;