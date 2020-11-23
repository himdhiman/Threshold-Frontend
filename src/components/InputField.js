import React from 'react';
import "./textArea.css";


function InputField(props) {
    return (
        <div className = "ui segment" id = 'header-div'>
        <h3>Enter the Input</h3>
            <textarea rows = "7" placeholder = {props.val} onChange = {(e) => props.dispatch(e.target.value)}></textarea>
        </div>
    )
}

export default InputField;
