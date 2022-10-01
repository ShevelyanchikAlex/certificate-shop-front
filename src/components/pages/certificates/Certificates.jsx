import React, {useEffect, useState} from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import '../../../assets/styles/Certificates.css';
import CardItem from "./components/CardItem";
import CertificatesService from "../../../service/CertificateService";

const Certificates = () => {
    const [giftCertificates, setGiftCertificates] = useState([]);

    useEffect(() => {
        CertificatesService.getAll()
            .then(response => setGiftCertificates(response.data._embedded.giftCertificates))
            .catch(e => console.log(e));
    }, []);

    if (giftCertificates.length === 0) {
        return <h1 style={{textAlign: 'center'}}>List is empty</h1>
    }
    return (
        <div>
            <div id="items-grid-view" className="items-grid-view">
                {giftCertificates.map((certificate, index) =>
                    <CardItem
                        certificate={certificate}
                        key={certificate.id}
                        image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/38/2015/12/11/566a8f04709b6.jpg"}
                    />
                )}
            </div>
            <div className="scrollButton">
                <ExpandLessIcon className={'expand-icon'}/>
            </div>
        </div>
    );
};

export default Certificates;