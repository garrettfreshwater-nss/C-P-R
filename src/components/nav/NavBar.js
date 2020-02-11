import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';
import Toggle from 'buildo-react-components/lib/Toggle';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';









export default (props) => {
   
   
    return (


        
<>


<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

         <Navbar.Brand href="/">Copy-Paste-Refactor</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                <Nav.Link href="/add__code">Add Code</Nav.Link>
                <NavDropdown title="Your Code" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/my__code">All Code</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Javascript</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">React</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">C#</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.5">CSS</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
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

        

        

        // {<ul className="navbar">
        //     <li className="navbar__item active">
        //         <Link className="navbar__link" to="/">Dashboard</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/add__code">Add Code</Link>
        //     </li>
        //     <li className="navbar__item">
        //         <Link className="navbar__link" to="/my__code">My Code</Link>
        //     </li>
        //     {
        //         localStorage.getItem("cpr__user")
        //             ? <li className="navbar__item">
        //                 <Link className="navbar__link"
        //                     to=""
        //                     onClick={e => {
        //                         e.preventDefault()
        //                         localStorage.removeItem("cpr__user")
        //                         props.history.push("/")
        //                     }}
        //                 >Logout</Link>
        //             </li>
        //             : ""
        //     }

            
        //  </ul>}

        
    )
}