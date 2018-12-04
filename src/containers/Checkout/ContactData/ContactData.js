import React, { Component } from 'react';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import axios from '../../../axios-orders';
import classes from './ContactData.css';
import Input from '../../../components/UI/Input/Input'
class ContactData extends Component {
    state = {
        orderForm: {
                name: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                street: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Street'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                    },
                    valid: false,
                    touched: false
                },
                zipCode: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your ZipCode'
                    },
                    value: '',
                    validation: {
                        required: true,
                        minLength: 5,
                        maxLength: 5                        
                    },
                    valid: false,
                    touched: false
                },
                country: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Country'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
                email: {
                    elementType: 'input',
                    elementConfig: {
                        type: 'email',
                        placeholder: 'Your E-mail'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest' , displayValue: 'Fastest'},
                        {value: 'cheapest' , displayValue: 'Cheapest'},
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            },
        },
        formIsValid: false,
        loading: false
    };
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: {...this.props.ingredients},
            price: this.props.price, 
            orderData: formData
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


    checkValidity = (value , rules) => {
        let isValid = true;
            if(rules.required){
                isValid = value.trim() !== '' && isValid;
            }
            if(rules.minLength){
                isValid = value.length >= rules.minLength && isValid;
            }
            if(rules.maxLength){
                isValid = value.length <= rules.maxLength && isValid;
            }
            return isValid
    }

    inputChangedHandler = (event , inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value , updatedFormElement.validation)
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }
        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid})
    }



    render() {
        let formElementArray = [];
        for(let key in this.state.orderForm){
            formElementArray.push({
                id: key,
                config: this.state.orderForm[key],

            })
        }
        let form = <Spinner />;
    if(this.state.loading === false){
        form = (<form onSubmit={this.orderHandler}>
        {formElementArray.map(inp => {
            return (
                <Input key={inp.id} 
                elementType={inp.config.elementType}
                touched={inp.config.touched} 
                invalid={!inp.config.valid}
                shouldValidate={inp.config.validation}
                elementConfig={inp.config.elementConfig} 
                value={inp.config.value} 
                options={inp.config.elementConfig.options}
                changed={(event)=> {this.inputChangedHandler(event , inp.id)}} />
            );
        })}
        <Button btnType="Success" disabled={!this.state.formIsValid}>ORDER</Button>
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
