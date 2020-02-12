import React, { useContext, useState, useEffect } from "react"
import "./Code.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { CodeTypeContext } from "../codeType/CodeTypeProvider";
import { NoteContext } from "./NoteProvider";
import Note from "./Note";





export default (props) => {

    // const { codeTypes } = useContext(CodeTypeContext)
    const [ noteObject, setNote ] = useState({})
    const { note } = useContext(NoteContext)

    const noteArray = []

    const activeUsersNote = note.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersNote.map(a => {
        return noteArray.push(a)
    })

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newNote = Object.assign([], noteObject)
        newNote[evt.target.name] = evt.target.value
        console.log(newNote)
        setNote(newNote)
    }


    useEffect(() => {
    }, [note])



    // const filterCodeType = note.filter(c => c.codeTypeId === parseInt(codeObject.codeTypeId)) || []
    // // array vs. state

    console.log(activeUsersNote)

    return (
        <>
            
            <div className="code__list">
                {
                    activeUsersNote.map(n => {
                        return <Note key={n.id} note={n} {...props} />
                    })

                }
            </div>
        </>

        
    )
}