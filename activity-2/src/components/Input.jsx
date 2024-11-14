import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ label, type, placeholder }) => {
    return (
        <div className="input-container">
            <label>{label}</label>
            <input type={type} placeholder={placeholder} />
        </div>
    );
};

export default Input;