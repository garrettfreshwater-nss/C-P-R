import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export default (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Dashboard</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Add Code</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">My Code</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Log Out</Link>
            </li>

            {
                localStorage.getItem("cpr__user")
                    ? <li className="navbar__item">
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

            
        </ul>
    )
}