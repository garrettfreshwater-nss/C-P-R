import React, { useContext, useState, useEffect, useRef } from "react"
import { CodeContext } from "./CodeProvider";
import { CodeTypeContext } from "../codeType/CodeTypeProvider";
import Code from "./Code"
import "./Code.scss"
import 'bootstrap/dist/css/bootstrap.min.css';


export default (props) => {

    const { codeTypes } = useContext(CodeTypeContext)
    const [ codeObject, setCode ] = useState({codeTypeId:0})
    const { code } = useContext(CodeContext)
    
   


    const activeUsersCode = code.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    }) || []

    

    const filterCodeType = activeUsersCode.filter(c => c.codeTypeId === parseInt(codeObject.codeTypeId)) || []
    // array vs. state

    

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

    useEffect(() => {
    }, [code])
    

    return (
        
        <>
        <div className="userView">
            <div className="topOfPage">
            <select
                    name="codeTypeId"
                    id="codeType"
                    value={codeObject.codeTypeId}
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
                <h1>YOUR SNIPPETS</h1>
            </div>
            
            </div>

{/* // you can do any type of conditional in a ternary */}

    <div className="userCodeView">
    
        <div className="code__list"> 

            { codeObject.codeTypeId === 0 ? 
            
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