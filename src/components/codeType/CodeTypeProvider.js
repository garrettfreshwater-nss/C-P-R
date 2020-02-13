import React, { useState, useEffect } from "react"

/*
    *The context is imported and used by individual components
    *that need data
    !!Create it, define it, what can other people use?
*/
export const CodeTypeContext = React.createContext() //every provider needs a context created.

/*
 This component establishes what data can be used.
 */
export const CodeTypeProvider = (props) => {
    const [codeTypes, setCodeTypes] = useState([]) 
    //CodeType is the name of the data in our application now.

    const getCodeTypes = () => {
        return fetch("http://localhost:8088/codeTypes?_expand=type&_embed=code")
            .then(res => res.json())
            .then(setCodeTypes)
    }

    const addCodeType = CodeType => {
        return fetch("http://localhost:8088/codeTypes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(codeTypes)
        })
            .then(getCodeTypes)
    }

    /*
        Load all CodeTypes when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => { //listens for state changes. If the state of this componenent changes, the use of
        getCodeTypes()
    }, [])

    useEffect(() => {
        console.log("****  CodeType APPLICATION STATE CHANGED  ****")
        console.log(codeTypes)
    }, [codeTypes])

    return (
        <CodeTypeContext.Provider value={{  //
            codeTypes, addCodeType
        }}>
            {props.children} 
        </CodeTypeContext.Provider>
    )
}