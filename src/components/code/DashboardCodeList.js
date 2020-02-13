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
    const dashboardCodeSelectRef = useRef(0)
    
   


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
    // const dashboardCodeView = code || []
    // array vs. state


    return (
        <>
        <div className="dashboardCodeView">

            <select
                // value={ parseInt(codeObject.codeTypeId) }
                name="codeTypeId"
                id="codeType"
                className="form-control"
                ref={dashboardCodeSelectRef}
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

                { dashboardCodeSelectRef.current.value === "0" ? 

                    (
                        code.map(c => {
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