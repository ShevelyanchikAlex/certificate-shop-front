import React, {useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../../../assets/styles/Certificates.css';
import CardItem from "./components/CardItem";
import CertificatesService from "../../../service/CertificateService";
import EmptyList from "./components/EmptyList";

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    const pageNumbers = [];
    for (let i = 1; i < 10; i++) {
        pageNumbers.push(i);
    }

    useEffect(() => {
        CertificatesService.getAll(currentPage, 10)
            .then(response => setCertificates(response.data._embedded.giftCertificates))
            .catch(e => console.log(e));
    }, [currentPage]);

    const scrollToTop = () => {
        document.getElementById('items-grid-view').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return ((certificates.length === 0)
            ? <EmptyList/>
            : <div>
                <div id="items-grid-view" className="items-grid-view">
                    {certificates.map((certificate, index) =>
                        <CardItem
                            certificate={certificate}
                            key={certificate.id}
                            image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/38/2015/12/11/566a8f04709b6.jpg"}
                        />
                    )}
                    <div>
                        <ul>
                            {pageNumbers.map(number => (<li key={number}>
                                <button onClick={() => {
                                    setCurrentPage(number)
                                    scrollToTop()
                                }}>{number}</button>
                            </li>))}
                        </ul>
                    </div>
                </div>
                <div className="scrollButton" onClick={scrollToTop}>
                    <ExpandLessIcon className={'expand-icon'}/>
                </div>
            </div>
    );
};

export default Certificates;