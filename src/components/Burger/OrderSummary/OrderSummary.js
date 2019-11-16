import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../../UI/Button/Button';


const OrderSummary = (props) => {
    const ingriedentSummary = Object.keys(props.ingriedents)
    .map(igKey => {
        return <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span>:{props.ingriedents[igKey]}</li>
    });
    return (
        <Aux>
            <h3>Your Order</h3>
            <p> A burger with the following ingredients</p>
            <ul>
                {ingriedentSummary}
            </ul>
    <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>checkout?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinues}>Proceed</Button>
        </Aux>
    );
}

export default OrderSummary;