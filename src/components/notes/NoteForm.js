import React, { useContext, useState, useEffect } from "react"
import { NoteContext } from "./NoteProvider"
import 'bootstrap/dist/css/bootstrap.min.css';
import TextareaAutosize from 'react-autosize-textarea';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



export default props => {

    const { addNote, updateNote, notes } = useContext(NoteContext)
    const [ noteObject, setNote ] = useState({})

    const editMode = props.match.params.hasOwnProperty("noteId")
   

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newNote = Object.assign({}, noteObject)
        newNote[evt.target.name] = evt.target.value
        console.log(newNote)
        setNote(newNote)
    }

    const setDefaults = () => {
        if (editMode) {
            
            const noteId = parseInt(props.match.params.noteId)
            const selectedNote = notes.find(n=> n.id === noteId) || {}
            setNote(selectedNote)
            console.log(selectedNote)
        }
    }

    useEffect(() => {
        setDefaults()
    }, [notes])

    const constructNewNote = () => {
       const currentCodeCardId = parseInt(props.match.params.codeId, 10) 
       //how to get id through props

        if (editMode) {
            updateNote({
                id: noteObject.id,
                text: noteObject.text,
                userId: parseInt(localStorage.getItem("cpr__user"), 10),
                codeId: noteObject.codeId //must reference note object code ID since we have already added it with the addNote.
            })
                .then(() => props.history.push("/"))
        } else {
            addNote({
                text: noteObject.text,
                userId: parseInt(localStorage.getItem("cpr__user"), 10),
                codeId: currentCodeCardId
            })
            .then(() => props.history.push("/"))
        }
    }

    return (

    <div className="react-form-container">

        <form className="AddNoteForm">
            
            <fieldset>

                <div className="form-group">
                    <label htmlFor="text">Note</label>
                    <TextareaAutosize
                        type="text"
                        id="text"
                        name="text"
                        defaultValue={noteObject.text}
                        required
                        className="form-control"
                        placeholder="Your notes"
                        onChange={handleControlledInputChange}
                        />
                </div>
            </fieldset>

            <Button variant="dark" size="lg" type="submit" onClick={evt => 
                    {evt.preventDefault() 
                    constructNewNote()
                    }}
                className="btn btn-primary"> {editMode ? "Update": "Add"} 
            </Button>

        </form>
    </div>
    )
}   