import React, { useContext } from "react"
import "./Code.scss"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Link }  from "react-router-dom";
import { CodeContext } from "./CodeProvider";
// import {PrismCode} from "./PrismComponent"
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NoteContext } from "../notes/NoteProvider";
import CurrentNoteComponent from "./CurrentNoteComponent";


//! */ import { UserContext } from "../users/UserProvider";
 // const userWhoPosted = users.find(u => u.id === userId)




export default ({ code, note, history }) => {

    
    
    const { deleteCode } = useContext(CodeContext)
    const { notes, addNote} = useContext(NoteContext)
    
    // const { users } = useContext(UserContext)

  
   
    const currentCodesNotes= notes.filter(n => n.codeId === code.id)
    console.log( currentCodesNotes, "noteArray notes" )
    // const mappedNotes = noteArray.map (sn => sn.codeId === code.id)

    // const newNotes = noteArray.filter(a => {
    //     return mappedNotes.push(a)
    // })
    


    const activeUserCode = (code, history) => {
        
    if(code.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
    
    <div className="codeCard_buttons"> 
        <button className="active__code" onClick={
              () => {
               history.push(`/code/edit/${code.id}`)
               
                }}>Edit
        </button>
    

        <button className="deleteButton" onClick={
            () => {
                deleteCode(code)
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

            <section className="code__card">

                <div className="code__titleDiv">
                    <h3 className="code__name">
                    <Link to={`/my_code/${code.id}`} >
                    { code.name } </Link></h3> 
                    <div className="code__codeType">{ code.codeType.type }</div>
                </div>

                <div>
              
                <SyntaxHighlighter
                    language={ code.codeType.type}
                    style={atomDark}
                    showLineNumbers={true}
                    >
                    { code.codeSnippet }
                 </SyntaxHighlighter>

            
                </div>

                <div className="code__text">{

                    <Accordion defaultActiveKey="0">
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                { code.name }
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                        <Card.Body>{ code.text }</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>

                 }  {activeUserCode(code, note, history)}


                    <div className="users__note__text">
                    
                        <button className="addNote" onClick={
                            () => {
                        addNote(note)
                            history.push(`/add__note/${code.id}`)
                            }}>Comment
                        </button>
                    
                    {

                        currentCodesNotes.map (note => {
                            return <CurrentNoteComponent {...history} key={note.id} note={note} />
                        })

                        }

                        </div>
                 </div>

                 
                  

            </section>

    )

}

