import React from 'react';

const TotalAmount = () => {
    return (
        <div className="checkout">
            <div className="checkout-total">
                <div>
                    <div className="total">Total</div>
                </div>
                <div className="total-amount">$398.47</div>
            </div>
            <button className="checkout-button">Checkout</button>
        </div>
    );
};

export default TotalAmount;