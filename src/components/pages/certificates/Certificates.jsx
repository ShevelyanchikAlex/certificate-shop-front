import React, {useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CardItem from "./components/CardItem";
import EmptyListCard from "./components/EmptyListCard";
import CertificatesService from "../../../service/CertificateService";
import '../../../assets/styles/Certificates.css';
import PaginationComponent from "./components/PaginationComponent";
import LoadingSpinner from "./components/LoadingSpinner";
import CertificateDefault from "../../../assets/images/certificate-default.png";
import {useDispatch, useSelector} from "react-redux";
import {setPage, setPageQtyWithParams} from "../../../store/pagination/PaginationAction";

const Certificates = () => {
    const FIRST_PAGE = 1;
    const [certificates, setCertificates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const page = useSelector(state => state.paginationData.page);
    const size = useSelector(state => state.paginationData.size);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setPage(FIRST_PAGE));
    }, []);

    useEffect(() => {
        setIsLoading(true);
        CertificatesService.getAll(page, size)
            .then(response => {
                setCertificates(response.data._embedded.giftCertificates);
                setIsLoading(false);
            })
            .catch(() => setIsLoading(false));
    }, [page, size]);

    useEffect(() => {
        CertificatesService.getCount()
            .then(count => dispatch(setPageQtyWithParams(count.data, size)))
            .catch(e => console.log(e));
    }, [size]);

    const scrollToTop = () => {
        document.getElementById('items-grid-view').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (isLoading ? <LoadingSpinner/>
            : ((certificates.length === 0) ? <EmptyListCard/>
                : <div>
                    <div className={'certificates-container'}>
                        <div id="items-grid-view" className="items-grid-view">
                            {certificates.map((certificate) =>
                                <CardItem
                                    certificate={certificate}
                                    key={certificate.id}
                                    image={CertificateDefault}
                                />
                            )}
                        </div>
                        <PaginationComponent/>
                    </div>
                    <div className="scrollButton" onClick={scrollToTop}>
                        <ExpandLessIcon className={'expand-icon'}/>
                    </div>
                </div>)
    );
};

export default Certificates;