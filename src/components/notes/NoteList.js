import React, { useContext, useState, useEffect } from "react"
import "./Code.scss"
import 'bootstrap/dist/css/bootstrap.min.css';
import { NoteContext } from "./NoteProvider";
import Note from "./Note";





export default (props) => {

    const [ noteObject, setNote ] = useState({})
    const { notes } = useContext(NoteContext)

    const noteArray = []

    const activeUsersNote = notes.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersNote.map(a => {
        return noteArray.push(a)
    })



    useEffect(() => {
    }, [notes])



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