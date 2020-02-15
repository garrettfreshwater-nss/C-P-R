import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from 'buildo-react-components/lib/Toggle';



export default (props) => {
   
   
    return (

        
<>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

         <Navbar.Brand href="/"><img className="logo" src={require ('./logo.svg')}/> CPR</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/">Dashboard</Nav.Link>
                <Nav.Link href="/add__code">Add Code</Nav.Link>
                <NavDropdown title="Your Code" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/my__code">All Code</NavDropdown.Item>
                    <NavDropdown.Item href="/my__code">Javascript</NavDropdown.Item>
                    <NavDropdown.Item href="/my__code">React</NavDropdown.Item>
                    <NavDropdown.Item href="/my__code">C#</NavDropdown.Item>
                    <NavDropdown.Item href="/my__code">CSS</NavDropdown.Item>
                    {/* <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
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
        </>


        
    )
}