import React from 'react';

const LanguageDropDown = (props) => {
    return (
        <div className = "ui segment">
            <select className = "ui dropdown custom"
                onChange = {(e) => props.dispatch(e.target.value)}    
            >
                <option value=""> Language Selected : {props.props}</option>
                <option value="cpp">Cpp</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
                



            </select>
        </div>
    )
}

export default LanguageDropDown;
