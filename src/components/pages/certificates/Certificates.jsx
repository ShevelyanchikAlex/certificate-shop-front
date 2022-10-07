import React, {useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CardItem from "./components/CardItem";
import EmptyListCard from "./components/EmptyListCard";
import CertificatesService from "../../../service/CertificateService";
import '../../../assets/styles/Certificates.css';
import PaginationComponent from "./components/PaginationComponent";
import LoadingSpinner from "./components/LoadingSpinner";

const Certificates = () => {
    const [certificates, setCertificates] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const [pageQty, setPageQty] = useState(1000);

    useEffect(() => {
        setIsLoading(true);
        CertificatesService.getAll(page, size)
            .then(response => {
                setCertificates(response.data._embedded.giftCertificates);
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e);
                setIsLoading(false);
            });
    }, [page, size]);

    const scrollToTop = () => {
        document.getElementById('items-grid-view').scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const changePageHandler = (number) => {
        setPage(number);
        scrollToTop();
    };

    const changeSizeHandler = (number) => setSize(number);

    return (isLoading ? <LoadingSpinner/>
            : ((certificates.length === 0) ? <EmptyListCard/>
                : <div>
                    <div className={'certificates-container'}>
                        <div id="items-grid-view" className="items-grid-view">
                            {certificates.map((certificate) =>
                                <CardItem
                                    certificate={certificate}
                                    key={certificate.id}
                                    image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/38/2015/12/11/566a8f04709b6.jpg"}
                                />
                            )}
                        </div>
                        <PaginationComponent
                            page={page}
                            pageQty={pageQty}
                            size={size}
                            pageHandler={changePageHandler}
                            sizeHandler={changeSizeHandler}/>
                    </div>
                    <div className="scrollButton" onClick={scrollToTop}>
                        <ExpandLessIcon className={'expand-icon'}/>
                    </div>
                </div>)
    );
};

export default Certificates;