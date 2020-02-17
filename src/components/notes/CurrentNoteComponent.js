import React, { useContext } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import { NoteContext } from "./NoteProvider";
// import { NoteForm } from "../notes/NoteForm";






export default ({ note, history }) => {


    
    const {deleteNote} = useContext(NoteContext)
    
    const activeUserNote = (note) => {
    
    if(note.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
        <div className="note__buttons"> 
            <button className="active__note" onClick={
                () => {
                history.push(`/note/edit/${note.id}`)
                }}>Edit
            </button>
        
            <button className="deleteButton" onClick={
                () => {
                    deleteNote(note)
                    .then(() => {
                        history.push("/")            
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
                            USERS NAME HERE
                            </Card.Header>
                            <Card.Body>{ note.text }</Card.Body> 
                        </Card>
                       
                    </Accordion>
                 }
                 </div>

                

                {activeUserNote(note)}

            </section>

    )

}