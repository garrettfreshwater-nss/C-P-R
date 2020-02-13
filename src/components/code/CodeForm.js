import React, { useContext, useState, useEffect } from "react"
import { CodeContext } from "./CodeProvider"
import "./Code.scss"
import { CodeTypeContext } from "../codeType/CodeTypeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import TextareaAutosize from 'react-autosize-textarea';


export default props => {

    const { addCode, updateCode, code } = useContext(CodeContext)
    const { codeTypes } = useContext(CodeTypeContext)
    const [ codeObject, setCode ] = useState({})

    const editMode = props.match.params.hasOwnProperty("codeId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCode = Object.assign({}, codeObject)
        newCode[evt.target.name] = evt.target.value
        console.log(newCode)
        setCode(newCode)
    }

    const setDefaults = () => {
        if (editMode) {
            const codeId = parseInt(props.match.params.codeId)
            const selectedCode = code.find(c => c.id === codeId) || {}
            setCode(selectedCode)
            console.log(selectedCode)
        }
        }


    useEffect(() => {
        setDefaults()
    }, [code])

    const constructNewCode = () => {
        if (editMode) {
            updateCode({
                id: codeObject.id,
                name: codeObject.name,
                codeTypeId: parseInt(codeObject.codeTypeId),
                codeSnippet: codeObject.codeSnippet,
                text: codeObject.text,
                userId: parseInt(localStorage.getItem("cpr__user"), 10)
            })
                .then(() => props.history.push("/my__code"))
        } else {
            addCode({
                name: codeObject.name,
                codeTypeId: parseInt(codeObject.codeTypeId),
                codeSnippet: codeObject.codeSnippet,
                text: codeObject.text,
                userId: parseInt(localStorage.getItem("cpr__user"), 10)
            })
            .then(() => props.history.push("/my__code"))
        }
    }
    


    return (

    <div className="react-form-container">

        <form className="CodeForm">
        
            <h2 className="CodeForm__title">{editMode ? "Edit Code" : "New Code"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={codeObject.name}
                    required
                    autoFocus
                    className="form-control"
                    placeholder="Name your Snippet"
                    proptype="varchar"
                    onChange={handleControlledInputChange}
                    />
             </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="codeType">Assign to codeType: </label>
                    <select
                        value={ parseInt(codeObject.codeTypeId) }
                        name="codeTypeId"
                        // ref={codeTypes}
                        id="codeType"
                        className="form-control"
                        onChange={handleControlledInputChange}
                        >
                        <option value="0">Select Language</option>
                        {codeTypes.map(c => (
                            <option key={c.id} value={c.id}>
                                {c.type}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>

                <div className="form-group">
                <label htmlFor="code">Code</label>
                    <TextareaAutosize
                        type="text"
                        id="code"
                        name="codeSnippet"
                        defaultValue={codeObject.codeSnippet}
                        required
                        className="form-control"
                        placeholder="Paste Code Here"
                        onChange={handleControlledInputChange}
                    />
                </div>
                
            </fieldset>
            
            <fieldset>

                <div className="form-group">
                    <label htmlFor="text">Note</label>
                    <TextareaAutosize
                        type="text"
                        id="text"
                        name="text"
                        defaultValue={codeObject.text}
                        required
                        className="form-control"
                        placeholder="Your notes"
                        onChange={handleControlledInputChange}
                        />
                </div>
            </fieldset>

            <button type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewCode()
                    }}
                className="btn btn-primary"> {editMode ? "Update": "Add"} 
            </button>

        </form>
    </div>
    )
}   