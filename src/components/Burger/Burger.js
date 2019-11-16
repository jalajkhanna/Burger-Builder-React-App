import React from 'react'
import classes from './Burger.module.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
const Burger = (props) => {
    let transoformedIngriedents = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])]
                .map((_, i) => {
                    return <BurgerIngredient key ={igKey + i} type={igKey} />
                });
        })
        .reduce((arr,el) =>  {
            return arr.concat(el)
        }, []);
        if( transoformedIngriedents.length === 0 ) {
            transoformedIngriedents = <p>Please start adding your ingredeints</p>
        }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
                {transoformedIngriedents}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>

        </div>
    );
}

export default Burger;