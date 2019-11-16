import React, { Component } from 'react';
import Aux from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad :.5,
    bacon : .4,
    cheese :.2,
    meat :.8
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad :0,
            bacon : 0,
            cheese :0,
            meat :0
        },
        totalPrice :  4,
        purchasable : false,
        purchasing : false
    }

    updatePurchaseState (ingredients) {

        const sum = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey]
            }).reduce((sum, el) => sum=sum+el,0)

        this.setState({purchasable : sum>0})
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount+1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceAdded = INGRIDIENT_PRICES[type];
        const newprice = this.state.totalPrice + priceAdded;
        this.setState({
            totalPrice : newprice,
            ingredients : updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }
    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if(oldCount === 0) {return;}
        const updatedCount = oldCount-1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;
        const priceDeducted = INGRIDIENT_PRICES[type];
        const newprice = this.state.totalPrice + priceDeducted;
        this.setState({
            totalPrice : newprice,
            ingredients : updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({
            purchasing : true
        });
    }

    purchaseCancelHandler = () =>
    {
        this.setState({purchasing : false});
    }

    purchaseContinueHandler = () => {
        alert("placed");
    }
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for ( let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return(
            <Aux>
                <Modal show={this.state.purchasing}
                modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    ingriedents={this.state.ingredients}
                    purchaseCancelled = {this.purchaseCancelHandler}
                    purchaseContinues = {this.purchaseContinueHandler}
                    price = {this.state.totalPrice}></OrderSummary>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls ingredientAdded={this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabledInfo = {disabledInfo}
                price= {this.state.totalPrice}
                purchasable = {this.state.purchasable}
                ordered = {this.purchaseHandler}/>
            </Aux>
        );
    }
}

export default BurgerBuilder;