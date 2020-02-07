import React, { useContext, useState, useEffect } from "react"
import { CodeContext } from "./CodeProvider"
import "./Code.css"

export default props => {
    const { addCode, updateCode, code } = useContext(CodeContext)
    const [ codeOjbect, setCode ] = useState({})

    const editMode = props.match.params.hasOwnProperty("codeId")

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCode = Object.assign({}, code)
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
                id: codeOjbect.id,
                name: codeOjbect.name,
                code: codeOjbect.code,
                text: codeOjbect.text,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
                .then(() => props.history.push("/"))
        } else {
            addCode({
                name: codeOjbect.name,
                code: codeOjbect.code,
                text: codeOjbect.text,
                userId: parseInt(localStorage.getItem("nutshell_user"), 10)
            })
            .then(() => props.history.push("/"))
        }
    }
    


    return (
        <form className="CodeForm">
            <h2 className="CodeForm__title">{editMode ? "Edit Code" : "New Code"}</h2>
            <fieldset>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    defaultValue={code.name}
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
                <label htmlFor="code">Code</label>
                <input
                    type="text"
                    id="code"
                    name="code"
                    defaultValue={code.code}
                    required
                    className="form-control"
                    placeholder="Paste Code Here"
                    onChange={handleControlledInputChange}
                    />
            </div>
                    </fieldset>
                    
                    <fieldset>

            <div className="form-group">
                <label htmlFor="note">Note</label>
                <input
                    type="text"
                    id="note"
                    name="note"
                    defaultValue={code.note}
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
                className="btn btn-primary"> {editMode ? "Update Code": "Add Code"} </button>
        </form>
    )
}