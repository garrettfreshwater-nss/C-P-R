import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CodeContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const CodeProvider = (props) => {
    const [code, setCode] = useState([])

    const getCode = () => {
        return fetch("http://localhost:8088/code")
            .then(res => res.json())
            .then(setCode)
    }

    const addCode = code => {
        return fetch("http://localhost:8088/code", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(code)
        })
            .then(getCode)
    }

    const deleteCode = code => {
        return fetch(`http://localhost:8088/code/${code.id}`, {
            method: "DELETE",
        })
            .then(getCode)
    }

    const updateCode = code => {
        return fetch(`http://localhost:8088/code/${code.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(code)
        })
            .then(getCode)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCode()
    }, [])

    useEffect(() => {
        console.log("****  CoDe APPLICATION STATE CHANGED  ****")
    }, [code])

    return (
        <CodeContext.Provider value={{
            code, addCode, deleteCode, updateCode
        }}>
            {props.children}
        </CodeContext.Provider>
    )
}