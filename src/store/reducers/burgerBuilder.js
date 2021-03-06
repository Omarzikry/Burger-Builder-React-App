import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    ingredients: null,
    totalPrice: 4,
    error: false
};
const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingridientName]: state.ingredients[action.ingridientName] + 1
            },
            totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingridientName]
        };
        case actionTypes.REMOVE_INGREDIENT:
        return {
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingridientName]: state.ingredients[action.ingridientName] - 1
            },
            totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingridientName]
        };
        case actionTypes.SET_INGREDIENTS:
        return{
            ...state,
            ingredients: action.ingredients,
            error: false,
            totalPrice: 4,
        };
        case actionTypes.FETCH_INGREDIENT_FAILED:
        return{
            ...state,
            error: true
        };
        default:
        return state;
    }
};

export default reducer;