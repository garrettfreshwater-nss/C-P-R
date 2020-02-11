import React, { useContext, useState, useEffect } from "react"
import { CodeContext } from "./CodeProvider";
import Code from "./Code"
import "./Code.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CodeTypeContext } from "../codeType/CodeTypeProvider";





export default (props) => {

    const { codeTypes } = useContext(CodeTypeContext)
    const [ codeObject, setCode ] = useState({})
    const { code } = useContext(CodeContext)


    const codeArray = []

    const activeUsersCode = code.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersCode.map(a => {
        return codeArray.push(a)
    })

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCode = Object.assign([], codeObject)
        newCode[evt.target.name] = evt.target.value
        console.log(newCode)
        setCode(newCode)
    }


    useEffect(() => {
    }, [code])



    const filterCodeType = code.filter(c => c.codeTypeId === parseInt(codeObject.codeTypeId)) || []
    // array vs. state

    console.log(filterCodeType)

    return (
        <>
        <div className="userCodeView">
            <h1>Your Code Snippets</h1>

            <select
                value={ parseInt(codeObject.codeTypeId) }
                name="codeTypeId"
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
           

                


            <div className="code__list">
                {
                    filterCodeType.map(c => {
                        return <Code key={c.id} code={c} {...props} />
                    })



                }
            </div>
        </div>

            
        </>

        
    )
}