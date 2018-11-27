import React, { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
class Checkout extends Component {
    state = {
        ingredients: {
            salad: 2,
            meat: 2,
            bacon: 1 ,
            cheese: 2
        }
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        for(let param of query.entries()){
            ingredients[param[0]] = +param[1]
        }
        this.setState({ingredients: ingredients})
    }
    checkoutCancelled = () => {
        this.props.history.goBack();
    }
    checkoutContinued = () => {
        this.props.history.replace('/Checkout/contact-data')
    }
    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} onCheckoutCancelled={this.checkoutCancelled} onCheckoutContinue={this.checkoutContinued}/>
            </div>
        );
    }
}

export default Checkout;