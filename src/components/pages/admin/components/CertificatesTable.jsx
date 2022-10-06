import React, {useEffect, useState} from 'react';
import CertificatesService from "../../../../service/CertificateService";
import ActionButton from "./ActionButton";

const CertificatesTable = ({page, size}) => {
    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        CertificatesService.getAll(page, size)
            .then(response => setCertificates(response.data._embedded.giftCertificates))
            .catch(e => console.log(e));
    }, [page, size]);

    return (
        <table className="table">
            <thead>
            <tr>
                <th>Title</th>
                <th>Tags</th>
                <th>Description</th>
                <th>Price</th>
                <th>Last Update</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {certificates.map(certificate =>
                <tr key={certificate.id}>
                    <td>{certificate.name}</td>
                    <td key={certificate.id}>{certificate.tags.map(tag => tag.name).join()}</td>
                    <td>{certificate.description}</td>
                    <td>${certificate.price}</td>
                    <td>{new Date(certificate.lastUpdateDate).toLocaleDateString()}</td>
                    <td>
                        <div className={'action-container'}>
                            <ActionButton buttonsClassName={'view-btn'} name={'View'}/>
                            <ActionButton buttonsClassName={'edit-btn'} name={'Edit'}/>
                            <ActionButton buttonsClassName={'delete-btn'} name={'Delete'}/>
                        </div>
                    </td>
                </tr>)}
            </tbody>
        </table>
    );
};

export default CertificatesTable;