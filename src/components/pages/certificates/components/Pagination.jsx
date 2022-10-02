import React from 'react';
import CertificatesService from "../../../../service/CertificateService";

const Pagination = ({total, size}) => {
    const pageNumbers = [];

    for (let i = 1; i < 10; i++) {
        pageNumbers.push(i);
    }

    return (
        <div>
            <ul>
                {pageNumbers.map(number => (<li key={number}>{number}
                    <button onClick={CertificatesService.getAll(number, size)}/>
                </li>))}
            </ul>
        </div>
    );
};

export default Pagination;