import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: '',
        },
        loading: false
    };
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const order = {
            ingredients: {...this.props.ingredients},
            price: this.props.price,
            customer: {
                name: 'Omar',
                address: {
                    street: "Omar's Street",
                    zipCode: '11536',
                    country: 'Canada'
                },
                email: 'Omar@awesome.com',
            },
            deliveryMethod: 'fastest',
        }
        axios.post('/orders.json' , order)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false})
            });
    }
    render() {
        let form = <Spinner />;
    if(this.state.loading === false){
        form = (<form>
        <Input inputtype="input"type="text" name="name" placeholder="Your name" />
        <Input inputtype="input"type="email" name="mail" placeholder="Your email" />
        <Input inputtype="input"type="text" name="street" placeholder="street" />
        <Input inputtype="input"type="number" name="postal" placeholder="Postal Code" />
        <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
    </form>);
    }
        return (
            <div className={classes.ContactData}>
                <h4>Enter Your Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;
