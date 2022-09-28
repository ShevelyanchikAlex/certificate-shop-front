import React from 'react';
import '../../../assets/styles/Checkout.css';

const Checkout = () => {
    return (
        <div className="checkout-card-container">
            <h1 className="checkout-card-header-name">Shopping Cart</h1>

            <div className="scrollable-items-list">

                <div className="checkout-card-item">
                    <div className="image-box">
                        <img className="image"
                             src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/298/2016/01/18/569cca9b733ec.jpg"/>
                    </div>
                    <div className="card-item-info">
                        <h1>Flying at the controls of Flight Simulator</h1>
                    </div>
                    <div className="card-price">
                        <div className="amount">$50.99</div>
                        <button className="remove-button">Remove</button>
                    </div>
                </div>
                {/*<hr className="card-item-line">*/}

                <div className="checkout-card-item">
                    <div className="image-box">
                        <img className="image"
                             src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5001382/2017/06/12/593e634727f0e.jpg"/>
                    </div>
                    <div className="card-item-info">
                        <h1>Horseback riding</h1>
                    </div>
                    <div className="card-price">
                        <div className="amount">$40.5</div>
                        <button className="remove-button">Remove</button>
                    </div>
                </div>
                {/*<hr className="card-item-line">*/}

                <div className="checkout-card-item">
                    <div className="image-box">
                        <img className="image"
                             src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5003567/2022/07/19/62d6fadb4ef3a.jpg"/>
                    </div>
                    <div className="card-item-info">
                        <h1>Rent and rental of ATVs</h1>
                    </div>
                    <div className="card-price">
                        <div className="amount">$300.99</div>
                        <button className="remove-button">Remove</button>
                    </div>
                </div>
                {/*<hr className="card-item-line">*/}

                <div className="checkout-card-item">
                    <div className="image-box">
                        <img className="image"
                             src="https://daroo.by/media/cache/new_catalog_image_big_preview/images.daroo.gift/daroo.by/gallery/productbanner/5002894/2019/07/24/5d385e008a42d.jpg"/>
                    </div>
                    <div className="card-item-info">
                        <h1>Fun at the water park</h1>
                    </div>
                    <div className="card-price">
                        <div className="amount">$5.99</div>
                        <button className="remove-button">Remove</button>
                    </div>
                </div>
            </div>
        </div>);
};

export default Checkout;