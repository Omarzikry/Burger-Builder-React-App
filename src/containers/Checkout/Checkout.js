import React, { Component } from 'react';
import { Route , Redirect } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import ContactData from './ContactData/ContactData';
import { connect } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import * as actionsCreators from '../../store/actions/index';
class Checkout extends Component {
    checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    checkoutContinuedHandler = () => {
        this.props.history.replace( '/checkout/contact-data' );
    }

    render () {
    let summary = <Redirect to="/" />;

    if(this.props.ings){
        const purchasedRedirect = this.props.purchased ? <Redirect to="/" /> : null;
        summary = <div>
            {purchasedRedirect}
            <CheckoutSummary
                    ingredients={this.props.ings}
                    checkoutCancelled={this.checkoutCancelledHandler}
                    checkoutContinued={this.checkoutContinuedHandler} />
            <Route path={this.props.match.path + '/contact-data'} component={ContactData} />
        </div>
    }


    return (
        <Auxiliary>
            {summary}
        </Auxiliary>
        );
}
}
const mapStateToProps = state => {
    const burgerBuilderReducer = state.burgerBuilderReducer||{};
    const orderReducer = state.orderReducer || {};
    return {
        ings: burgerBuilderReducer.ingredients,
        purchased: orderReducer.purchased
    }
}

export default connect(mapStateToProps)(Checkout);