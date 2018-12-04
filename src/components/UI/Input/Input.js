import React from 'react';
import classes from './Input.css';

const Input = (props) => {
    const inputClasses = [
        classes.Input
    ]

    if(props.invalid && props.shouldValidate && props.touched){
        inputClasses.push(classes.Invalid)
    }


    let inputElement = null;
    switch(props.elementType){
        case ('input'):
        inputElement = <input className={inputClasses.join(' ')} {...props.elementConfig} value={props.value} onChange={props.changed} />;
        break;
        case ('textarea'):
        inputElement = <textarea className={classes.Input} {...props.elementConfig} value={props.value} onChange={props.changed} />
        break;
        case ('select'):
        inputElement = <select className={classes.Input} value={props.value} onChange={props.changed} >
        {props.options.map(option => {
            return (
                <option key={option.value} value={option.value}>{option.displayValue}</option>
            );
        })}
        </select>
        break;
        default:
        inputElement = <input className={classes.Input} {...props.elementConfig} value={props.value} onChange={props.changed} />
    }
    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    );
};

export default Input;