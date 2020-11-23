import React, {useRef, useState} from 'react';
import Editor from '@monaco-editor/react';
import { FillSpinner as Loader } from 'react-spinners-kit';  
import ThemeDropDown from './ThemeDropDown';
import LanguageDropDown from './LanguageDropDown';
import InputField from './InputField';
import OutputField from './OutputField';
import axios from 'axios';
import './EditorStyle.css';




const CodeEditor = (props) => {

    const [isEditorReady, setIsEditorReady] = useState(false);
    const valueGetter = useRef();

    const [theme, setTheme] = useState("dark");
    const [language, setLanguage] = useState("javascript");
    const [input, setInput] = useState("Enter Input");
    const [output, setOutput] = useState("Output will be Displayed Here");

    


    const handleEditorDidMount = (_valueGetter) => {
        setIsEditorReady(true);
        valueGetter.current = _valueGetter;
    }


    const compileCode = async (data) => {
        const response = await axios.post("http://localhost:7000/dirtybits/run/", data);
        const out = response.data;
        if("error" in out){
            setOutput("ERROR \n" + out["error"]);
        }else{
            setOutput(out["OUTPUT"]);
        }
        setIsEditorReady(true);

    }
    

    const runCode = () => {
        setIsEditorReady(false);
        if(input !== "Enter Input"){
            const data = {
                "code" : valueGetter.current(),
                "lang" : "C++",
                "inp" : input
            }
            compileCode(data);

        }else{
            const data = {
                "code" : valueGetter.current(),
                "lang" : "C++",
            }
            compileCode(data);
        }
    }



    return (
        <div>
            <div className = "ui grid">
                <div className = "four wide column" id = 'top-column'>
                    <h1 id = 'heading'>DirtyBits Editor</h1>
                </div>
                <div className = "four wide column">
                    <LanguageDropDown props = {language} dispatch = {setLanguage}/>
                </div>
                <div className = "four wide column">
                    <ThemeDropDown props = {theme} dispatch = {setTheme}/>
                </div>
                <div className = "four wide column" id = "btn-div">
                    <button className = "ui red button" onClick = {runCode} disabled={!isEditorReady}> Run Code</button>
                </div>
            </div>
            <br/>
            <Editor
            value = "//Enter Code Here"
            loading = {<Loader/ >}
            height = "calc(70vh - 60px)" 
            width = "100vw"
            theme = {theme} 
            language = {language}
            editorDidMount={handleEditorDidMount}
            />
            <div className = "ui segment">
                <div className = "ui two column very relaxed grid">
                    <div className = "column">
                        <InputField val = {input} dispatch = {setInput}/>
                    </div>
                    <div className = "column">
                        <OutputField val = {output} dispatch = {setOutput}/>
                    </div>
                </div>
            </div>


        </div>
    )
};



export default CodeEditor;
