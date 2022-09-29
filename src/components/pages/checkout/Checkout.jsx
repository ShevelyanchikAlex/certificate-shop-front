import React from 'react';
import '../../../assets/styles/Checkout.css';
import CheckoutCardItem from "./components/CardItem";
import TotalAmount from "./components/TotalAmount";

const Checkout = () => {
    return (
        <div className="checkout-card-container">
            <h1 className="checkout-card-header-name">Shopping Cart</h1>

            <div className="scrollable-items-list">
                <CheckoutCardItem
                    image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5001382/2017/06/12/593e634727f0e.jpg"}
                    title={'Horseback riding'}
                    price={'$40.5'}
                />
                <CheckoutCardItem
                    image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5002894/2019/07/24/5d385e008a42d.jpg"}
                    title={'Fun at the water park'}
                    price={'$5.99'}
                />
                <CheckoutCardItem
                    image={"https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5003567/2022/07/19/62d6fadb4ef3a.jpg"}
                    title={'Rent and rental of ATVsg'}
                    price={'300.95'}
                />
            </div>
            <TotalAmount/>
        </div>);
};

export default Checkout;