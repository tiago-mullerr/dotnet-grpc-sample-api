import React from 'react';
import styles from './Input.module.css';

const Input = (props) => {
    return (
        <input max={props.max} placeholder={props.placeholder} type={props.type} onChange={props.onChange} className={`${styles['custom-input']} ${props.classes}`} />
    );
}

export default Input;