import React, { useContext } from "react"
import "./Code.scss"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
// import { Link }  from "react-router-dom";
import { CodeContext } from "./CodeProvider";
import 'bootstrap/dist/css/bootstrap.min.css';
import copy from "copy-to-clipboard";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { NoteContext } from "../notes/NoteProvider";
import CurrentNoteComponent from "../notes/CurrentNoteComponent";


 const options = [
  { key: "df", text: 'No Highlight', value: 'text'},
  { key: 'bash', text: 'Bash', value: 'bash' },
  { key: 'c#', text: 'C#', value: 'csharp' },
  { key: 'css', text: 'CSS', value: 'css' },
  { key: 'django', text: 'Django', value: 'django' },
  { key: 'elixir', text: 'Elixir', value: 'elixir' },
  { key: 'erlang', text: 'Erlang', value: 'erlang' },
  { key: 'html', text: 'HTML, XML', value: 'xml' },
  { key: 'js', text: 'JavaScript', value: 'javascript' },
  { key: 'jsx', text: 'JSX', value: 'jsx' },
  { key: 'json', text: 'JSON', value: 'json' },
  { key: 'md', text: 'MarkDown', value: 'markdown' },
  { key: 'python', text: 'Python', value: 'python' },
  { key: 'sql', text: 'SQL', value: 'sql' },
  
]



export default ({ code, note, history }) => {

    
    const { deleteCode } = useContext(CodeContext)
    const { notes } = useContext(NoteContext)
    

  
   
    const currentCodesNotes= notes.filter(n => n.codeId === code.id)
    console.log( currentCodesNotes, "noteArray notes" )


    const activeUserCode = (code) => {
        
    if(code.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (

    <div className="codeCard_buttons"> 
        <Button variant="secondary" size="sm" className="active__code" onClick={
              () => {
            history.push(`/code/edit/${code.id}`)
                }}>edit
        </Button>
    

        <Button variant="outline-danger" size="sm" className="deleteButton" onClick={
            () => {
                deleteCode(code)
                .then(() => {
                    history.push("/my__code")            
                })
            }}>delete
        </Button>
    
    </div>
    
    )} else {
        return("")
    }}


    return( 
        

            <section className="code__card">
                
                <div className="code__titleDiv">

                        <div className="user__name">{ code.user.name }</div>
                        <h3 className="code__name">{ code.name }</h3> 
                        <div className="code__codeType">{ code.codeType.type }</div>
                        <div className="code__cardButtons">{ activeUserCode(code) }</div>
                       
                </div>

                <div className="syntaxHighlightBlock">
                    <SyntaxHighlighter
                        language={ code.codeType.type}
                        style={atomDark}
                        showLineNumbers={true}
                        >
                        { code.codeSnippet }
                    </SyntaxHighlighter>

                    <Button
                        className="copy_code"
                      variant="dark"
                      size="small" 
                      block
                      onClick={() => copy(code.codeSnippet)}
                      style={{
                        fontSize: "1.5em"
                      }}
                    >
                        Copy Code
                    </Button>
                </div>

                <div className="code__text">{
                    <Card>
                        <Card.Body>{ code.text }</Card.Body>   
                    </Card>
                 } 

                 </div>

                 <div className="users__note__text">
                    
                        <Button variant="dark" size="sm" className="addNote" onClick={
                            () => {
                            history.push(`/add__note/${code.id}`)
                            }}>comment
                        </Button>
                    
                    {
                        currentCodesNotes.map (note => {
                            return <CurrentNoteComponent history={history} key={note.id} note={note} />
                        })

                        }

                        </div>
            </section>

    )

}

