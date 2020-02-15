import React, { useContext, useState, useEffect, useRef } from "react"
import { CodeContext } from "./CodeProvider";
import { CodeTypeContext } from "../codeType/CodeTypeProvider";
import Code from "./Code"
import "./Code.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


export default (props) => {

    const { codeTypes } = useContext(CodeTypeContext)
    const [ codeObject, setCode ] = useState({})
    const { code } = useContext(CodeContext)
    const codeSelectRef = useRef(0)
    
   


    const codeArray = []

    const activeUsersCode = code.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersCode.map(a => {
        return codeArray.push(a)
    })

    const filterCodeType = activeUsersCode.filter(c => c.codeTypeId === parseInt(codeObject.codeTypeId)) || []
    // array vs. state

    console.log(filterCodeType)

    

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
    

    

    return (
        <>
        <div className="userCodeView">
            <h1>Your Code Snippets</h1>

            <select
                // value={ parseInt(codeObject.codeTypeId) }
                name="codeTypeId"
                id="codeType"
                ref={codeSelectRef}
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
           

{/* // you can do any type of conditional in a ternary */}

        <div className="code__list"> 

            { codeSelectRef.current.value === "0" ? 
            
                (
                    activeUsersCode.map(c => {
                        return <Code key={c.id} code={c} {...props} />
                    })
                ):
                (
                    filterCodeType.map(c => {
                        return <Code key={c.id} code={c} {...props} />
                    })

                )
            }
            </div>
        </div>

            
        </>

        
    )
}