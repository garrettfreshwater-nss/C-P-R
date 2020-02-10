import React, { useContext } from "react"
import "./Code.scss"
import { CodeContext } from "./CodeProvider";
import { PrismCode } from "./prismComponent";
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

//testing our form react comp
import ReactDOM from "react-dom"

// const codeBit = `
// code.codeSnippet
// `
// const Example = () => (
//   <PrismCode
//     code={codeBit}
//     language="js"
//     plugins={["line-numbers"]}
//   />
// )


const formContainer = document.querySelector('.react-form-container');

export default ({ code, history }) => {
    
    const {deleteCode} = useContext(CodeContext)
    
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
                    <h3 className="code__name">{ code.name }</h3>
                    <div className="code__codeType">{ code.codeType.type }</div>
                </div>

                <div className="code__codeSnippet">{  

                <PrismCode
                        code={ code.codeSnippet }
                        language="react"
                        plugins={["line-numbers"]}
                    />
                    
                }
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
                        <Card>
                            <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                more notes
                            </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! I'm another body</Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>


                 }
                 </div>

                

                {activeUserCode(code, history)}

            </section>

    )

}

