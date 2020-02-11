import React, { useState, useEffect } from "react"

/*
    The context is imported and used by individual components
    that need data
*/
export const NoteContext = React.createContext()

/*
 This component establishes what data can be used.
 */
export const NoteProvider = (props) => {
    const [notes, setNote] = useState([])

    const getNote = () => {
        return fetch("http://localhost:8088/notes?_expand=text&_codeId?_embed=name") // fix fetch
            .then(res => res.json())
            .then(setNote)
    }

    const addNote = note => {
        return fetch("http://localhost:8088/note", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNote)
    }

    const deleteNote = note => {
        return fetch(`http://localhost:8088/note/${note.id}`, {
            method: "DELETE",
        })
            .then(getNote)
    }

    const updateNote = note => {
        return fetch(`http://localhost:8088/note/${note.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
            .then(getNote)
    }

    /*
        Load all animals when the component is mounted. Ensure that
        an empty array is the second argument to avoid infinite loop.
    */
    useEffect(() => {
        getNote()
    }, [])

    useEffect(() => {
        console.log("****  CoDe APPLICATION STATE CHANGED  ****")
    }, [notes])

    return (
        <NoteContext.Provider value={{
            notes, addNote, deleteNote, updateNote
        }}>
            {props.children}
        </NoteContext.Provider>
    )
}