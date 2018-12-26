import * as actionTypes from '../actions/actionsTypes';


const intialState = {
    orders: [],
    loading: false,
    purchased: false,
    orders: []
};

const reducer = (state = intialState, action) => {
    switch(action.type){
        case actionTypes.PURCHASE_INIT:
        return{
            ...state,
            purchased: false
        };
        case actionTypes.PURCHASE_BURGER_START:
        return{
            ...state,
            loading: true
        };
        case actionTypes.PURCHASE_BURGER_SUCCESS:
        debugger;
        const newOrder = {
            ...action.orderData,
            id: action.orderId,
        };
        return{
            ...state,
            loading: false,
            orders: state.orders.concat(newOrder),
            purchased: true
        };
        case actionTypes.PURCHASE_BURGER_FAIL:
        return{
            ...state,
            loading: false
        };
        case actionTypes.FETCH_ORDER_START:
        return {
            ...state,
            loading: true,
        };
        case actionTypes.FETCH_ORDER_SUCCESS:
        return{
            ...state,
            orders: action.orders,
            loading: false
        };
        case actionTypes.FETCH_INGREDIENT_FAILED:
        return {
            ...state,
            loading: false
        };
        default:
        return state;
    }
}

export default reducer;