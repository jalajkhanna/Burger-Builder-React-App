import React from 'react';
import Aux from '../../../hoc/Auxilary';
import Button from '../../../UI/Button/Button';


class OrderSummary extends React.Component {

    componentDidUpdate() {
        console.log("[OrderSummary] will Update")
    }

    render() {

        const ingriedentSummary = Object.keys(this.props.ingriedents)
        .map(igKey => {
            return <li key={igKey}><span style={{textTransform : 'capitalize'}}>{igKey}</span>:{this.props.ingriedents[igKey]}</li>
        });
        return (
            <Aux>
                <h3>Your Order</h3>
                <p> A burger with the following ingredients</p>
                <ul>
                    {ingriedentSummary}
                </ul>
        <p><strong>Total Price : {this.props.price.toFixed(2)}</strong></p>
                <p>checkout?</p>
                <Button btnType="Danger" clicked={this.props.purchaseCancelled}>Cancel</Button>
                <Button btnType="Success" clicked={this.props.purchaseContinues}>Proceed</Button>
            </Aux>
        );
    }
}

export default OrderSummary;