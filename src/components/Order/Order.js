import React from 'react';
import classes from './Order.css';
const Order = (props) => {
    const ingredients = [];
    for(let ingredientName in props.ingredients){
        ingredients.push({name: ingredientName , amount: props.ingredients[ingredientName]})
    }
    console.log(ingredients);
    const ingredientOutput = ingredients.map(ingredient => {
        return <span style={{textTransform: 'capitalize',display: 'inline-block' , margin: '0 8px' , border: '1px solid #ccc',padding: '5px'}} key={ingredient.name}>{ingredient.name} ({ingredient.amount})</span>
    })
    console.log(ingredientOutput);
    return (
        <div className={classes.Order}>
            <p>ingredients: {ingredientOutput}</p>
            <p>price: {Number.parseFloat(props.price).toFixed(2)} USD</p>
        </div>
    );
};

export default Order;