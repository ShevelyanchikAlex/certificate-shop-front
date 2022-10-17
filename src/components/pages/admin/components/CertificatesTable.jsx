import React, {useEffect, useState} from 'react';
import CertificatesService from "../../../../service/CertificateService";
import ActionButton from "./ActionButton";
import Modal from "./modal/Modal";
import CertificateAddForm from "./modal/CertificateAddForm";
import CertificateEditForm from "./modal/CertificateEditForm";
import CertificateView from "./modal/CertificateView";
import CertificateDeleteModal from "./modal/CertificateDeleteModal";
import AddIcon from '@mui/icons-material/Add';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SearchBox from "./SearchBox";
import {useDispatch, useSelector} from "react-redux";
import * as adminActions from "../../../../store/admin/AdminAction";

const CertificatesTable = ({page, size}) => {
    const certificates = useSelector(state => state.adminData.certificates);
    const filteredCertificates = useSelector(state => state.adminData.filteredCertificates);
    const selectedCertificate = useSelector(state => state.adminData.selectedCertificate);
    const ascSortDirection = useSelector(state => state.adminData.ascSortDirection);
    const isPageRefresh = useSelector(state => state.adminData.isPageRefresh);
    const searchTerm = useSelector(state => state.adminData.searchTerm);
    const selectedOpinion = useSelector(state => state.adminData.selectedOpinion);
    const certificatesOpinions = useSelector(state => state.adminData.certificatesOpinions);
    const [isAddCertificateModalVisible, setAddCertificateModalVisible] = useState(false);
    const [isViewCertificateModalVisible, setViewCertificateModalVisible] = useState(false);
    const [isEditCertificateModalVisible, setEditCertificateModalVisible] = useState(false);
    const [isDeleteCertificateModalVisible, setDeleteCertificateModalVisible] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        CertificatesService.getAll(page, size)
            .then(response => {
                dispatch(adminActions.setCertificates(response.data._embedded.giftCertificates));
                dispatch(adminActions.setFilteredCertificates(searchTerm, certificates, selectedOpinion));
                dispatch(adminActions.setPageRefresh(false));
            })
            .catch(e => console.log(e));
    }, [page, size, isPageRefresh]);

    useEffect(() => {
        dispatch(adminActions.setFilteredCertificates(searchTerm, certificates, selectedOpinion));
    }, [certificates, searchTerm]);

    const changeAddCertificateModalVisibleHandler = () => setAddCertificateModalVisible(true);

    const changeEditCertificateModalVisibleHandler = () => setEditCertificateModalVisible(true);

    const changeViewCertificateModalVisibleHandler = () => setViewCertificateModalVisible(true);

    const changeDeleteCertificateModalVisibleHandler = () => setDeleteCertificateModalVisible(true);

    return (
        <div>
            <Modal
                visible={isAddCertificateModalVisible}
                setVisible={setAddCertificateModalVisible}>
                <CertificateAddForm
                    setVisible={setAddCertificateModalVisible}
                    setIsRefresh={isPageRefresh}
                />
            </Modal>
            <Modal
                visible={isEditCertificateModalVisible}
                setVisible={setEditCertificateModalVisible}>
                <CertificateEditForm
                    setVisible={setEditCertificateModalVisible}
                    certificateData={selectedCertificate}
                    setIsRefresh={isPageRefresh}
                />
            </Modal>
            <Modal
                visible={isViewCertificateModalVisible}
                setVisible={setViewCertificateModalVisible}>
                <CertificateView
                    setVisible={setViewCertificateModalVisible}
                    certificate={selectedCertificate}
                />
            </Modal>
            <Modal
                visible={isDeleteCertificateModalVisible}
                setVisible={setDeleteCertificateModalVisible}>
                <CertificateDeleteModal
                    setVisible={setDeleteCertificateModalVisible}
                    id={selectedCertificate.id}
                    setIsRefresh={isPageRefresh}
                />
            </Modal>

            <div className={'table-container-header'}>
                <button
                    className={'add-certificate-button'}
                    onClick={changeAddCertificateModalVisibleHandler}>
                    <AddIcon/> Certificate
                </button>
                <SearchBox
                    opinions={certificatesOpinions}
                />
                <button
                    className={'add-certificate-button'}
                    onClick={() => dispatch(adminActions.changeSortDirection(ascSortDirection))}>
                    Sort Date {ascSortDirection ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                </button>
            </div>
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
                {filteredCertificates.map(certificate =>
                    <tr key={certificate.id}>
                        <td>{certificate.name}</td>
                        <td key={certificate.id}>{certificate.tags.map(tag => tag.name).join()}</td>
                        <td>{certificate.description}</td>
                        <td>${certificate.price}</td>
                        <td>{new Date(certificate.lastUpdateDate).toLocaleDateString()}</td>
                        <td>
                            <div className={'action-container'}>
                                <ActionButton buttonsClassName={'view-btn'} name={'View'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    changeViewCertificateModalVisibleHandler();
                                }}/>
                                <ActionButton buttonsClassName={'edit-btn'} name={'Edit'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    changeEditCertificateModalVisibleHandler();
                                }}/>
                                <ActionButton buttonsClassName={'delete-btn'} name={'Delete'} handler={() => {
                                    dispatch(adminActions.setSelectedCertificate(certificate));
                                    changeDeleteCertificateModalVisibleHandler();
                                }}/>
                            </div>
                        </td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default CertificatesTable;