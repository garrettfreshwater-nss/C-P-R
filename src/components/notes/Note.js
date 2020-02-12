import React, { useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NoteContext } from "../notes/NoteProvider";





export default ({ note, addNote, history }) => {

    // const { codeNote } = useContext(CodeNoteContext)
    // const codeNoteArray = codeNote.map(cn => cn.id === parseInt(codeNote.codeId)) || []
    
    const {deleteNote} = useContext(NoteContext)
    
    const activeUserNote = (note, addNote, history) => {
        
    if(note.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
    
    <div className="noteCard_buttons"> 
        <button className="active__note" onClick={
              () => {
               history.push(`/note/edit/${note.id}`)
               }}>Edit
        </button>
    
        <button className="deleteButton" onClick={
            () => {
                deleteNote(note)
                .then(() => {
                    history.push("/my__code")            
                })
            }}>Delete
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(

            <section className="note__card">

                <div className="note__text">{

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                { note.codeId }
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                        <Card.Body>{ note.codeId.text }</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                            { note.userId }
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>{ note.codeId.text }</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                 }
                 </div>

                

                {activeUserNote(note, history)}

            </section>

    )

}