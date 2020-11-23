import React from 'react';
import './DropDown.css'

const ThemeDropDown = (props) => {
    return (
        <div className = "ui segment">
            <select className = "ui dropdown custom"
                onChange = {(e) => props.dispatch(e.target.value)}   
            >
                <option>Theme Selected : {props.props}</option>
                <option value="dark">dark</option>
                <option value="light">light</option>
            </select>
        </div>
    )
}

export default ThemeDropDown;
