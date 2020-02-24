import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const CodeContext = React.createContext()

export const CodeProvider = (props) => {
    const [code, setCode] = useState([]) //code is state variable, setCode sets the state variable
    

    const getCode = () => {
        return fetch("http://localhost:8088/code?_expand=codeType&_expand=user")
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
        Load all code when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getCode()
    }, [])

    useEffect(() => {
    }, [code])

    return (
        <CodeContext.Provider value={{
            code, addCode, deleteCode, updateCode
        }}>
            {props.children}
        </CodeContext.Provider>
    )
}