import React from 'react';
import './Payment.css'

const Payment = (props) => {
    const payment=props.payment;
let total=0;
for(let i=0;i<payment.length;i++){
    const produce=payment[i];
    console.log(produce);
    total=total+produce.price;
}

const discount=total*(10/100)
const grandTotal=(total-discount)
function formatNumber(num){
    const precision=num.toFixed(2)
    return Number(precision)
}
    
    return (
        <div className="payment-holder ">
            <h2 className="d-flex justify-content-center" ><u>ORDER SUMMARY</u></h2>
    <h4>Courses Ordered:{payment.length}</h4>
    <h1> Price of Enrolled Course:${formatNumber(total)}</h1>
    <h2>Discount:10%</h2>
    <h2>Total Amount:${formatNumber(grandTotal)}</h2>
        </div>
    );
};

export default Payment;