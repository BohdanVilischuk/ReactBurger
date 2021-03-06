import React from 'react'
import classes from '../Burger/Burger.module.scss'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger  = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i) => {
          return  <BurgerIngredient key={igKey + i} type={igKey} />;
        });
    })
    .reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please add ingredients</p>
    }

    console.log(transformedIngredients);
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {/* <BurgerIngredient type="cheese"></BurgerIngredient>
            <BurgerIngredient type="meat"></BurgerIngredient> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;

