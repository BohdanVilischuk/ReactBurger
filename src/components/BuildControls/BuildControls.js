import React from 'react';
import classes from '../../components/BuildControls/BuildControls.module.scss'
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad' },
    {label: 'Bacon', type: 'bacon' },
    {label: 'Cheese', type: 'cheese' },
    {label: 'Meat', type: 'meat'}

]
const buildContols = (props) => (
    <div className={classes.BurgerControls}>
        <p>Current price <strong>{props.price.toFixed(2)} </strong> </p>
        {controls.map(ctrl => (
            <BuildControl key={ctrl.label} label={ctrl.label} 
            added={() =>  props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}

            />
        ))}
    </div>
)

export default buildContols;