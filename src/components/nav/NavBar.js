import React, { useContext, useRef, useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from 'buildo-react-components/lib/Toggle';
import { CodeContext, CodeProvider } from "../code/CodeProvider";
import { CodeTypeContext, CodeTypeProvider } from "../codeType/CodeTypeProvider";
import Code from "../code/Code";
import { NoteProvider } from "../notes/NoteProvider";




export default (props) => {

    const { codeTypes } = useContext(CodeTypeContext)
    const [ codeObject, setCode ] = useState({})
    const { code } = useContext(CodeContext)
    const dashboardCodeSelectRef = useRef(0)

   
    const codeArray = []

    const activeUsersCode = code.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersCode.map(a => {
        return codeArray.push(a)
    })

    

    const handleControlledInputChange = (evt) => {
        /*
            When changing a state object or array, always create a new one
            and change state instead of modifying current one
        */
        const newCode = Object.assign([], codeObject)
        newCode[evt.target.name] = evt.target.value
        console.log(newCode)
        setCode(newCode)
    }


    useEffect(() => {
    }, [code])
    

    const filterCodeType = code.filter(c => c.codeTypeId === parseInt(codeObject.codeTypeId)) || []
    // const dashboardCodeView = code || []


   
   
    return (

        
<>
<CodeTypeProvider>
<NoteProvider>
<CodeProvider>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

         <Navbar.Brand href="/"><img className="logo" src={require ('./logo.svg')}/><span className="app__name"> CPR</span></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/add__code">Add Code</Nav.Link>
                <Nav.Link href="/my__code">Your Code</Nav.Link>
                </Nav>
                
                <Nav>


            
        
            

                <Nav.Link eventKey={2} href="#memes">
                    Dank memes
                </Nav.Link>
                <Nav.Link eventKey="/log__out" href="">
            {
                localStorage.getItem("cpr__user")
                    ? <li className="">
                        <Link className="navbar__link"
                            to=""
                            onClick={e => {
                                e.preventDefault()
                                localStorage.removeItem("cpr__user")
                                props.history.push("/")
                            }}
                        >Logout</Link>
                    </li>
                    : ""
            }
            </Nav.Link>
                
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        </CodeProvider>
        </NoteProvider>
        </CodeTypeProvider> 
        </>


        
    )
}