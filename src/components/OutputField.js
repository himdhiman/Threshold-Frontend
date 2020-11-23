import React from 'react';
import "./textArea.css";

function OutputField(props) {
    return (
        <div id = 'header-div' className = "ui segment">
        <h3>Output</h3>
            <textarea disabled rows = "7" placeholder = {props.val} onChange = {(e) => props.dispatch(e.target.value)} id = "outputfield"></textarea>
        </div>
    )
}

export default OutputField;
