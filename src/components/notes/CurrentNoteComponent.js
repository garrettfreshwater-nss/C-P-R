import React, { useContext } from "react"
import { NoteContext } from "./NoteProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import { NoteForm } from "../notes/NoteForm";






export default ({ note, history }) => {
    
    const {deleteNote} = useContext(NoteContext)
    
    const activeUserNote = (note) => {
    
    if(note.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
        <div className="note__buttons"> 
            <Button variant="info" size="sm" className="active__note" onClick={
                () => {
                history.push(`/note/edit/${note.id}`)
                }}>Edit
            </Button>
        
            <Button variant="outline-danger" size="sm" className="deleteButton" onClick={
                () => {
                    deleteNote(note)
                    .then(() => {
                        history.push("/")            
                    })
                }}>Delete
            </Button>
        
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
                                { note.user.name }
                            </Card.Header>
                            <Card.Body>{ note.text }</Card.Body> 
                                {activeUserNote(note)}
                        </Card>
                       
                    </Accordion>
                 }
                 </div>

            </section>

    )

}