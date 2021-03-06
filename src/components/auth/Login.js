import React, { useRef } from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import "./Login.css"


const Login = props => {
    const email = useRef()
    const password = useRef()

    const existingUserCheck = () => {
        return fetch(`http://localhost:8088/users?email=${email.current.value}`)
            .then(_ => _.json())
            .then(user => {
                if (user.length) {
                    return user[0]
                }
                return false
            })
    }

    const handleLogin = (e) => {
        e.preventDefault()

        existingUserCheck()
            .then(exists => {
                if (exists && exists.password === password.current.value) {
                    localStorage.setItem("cpr__user", exists.id)
                    props.history.push("/")
                } else if (exists && exists.password !== password.current.value) {
                    window.alert("Password does not match")
                } else if (!exists) {
                    fetch("http://localhost:8088/users", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: email.current.value,
                            password: password.current.value,
                            // name: `${firstName.current.value} ${lastName.current.value}`
                        })
                    })
                        .then(_ => _.json())
                        .then(response => {
                            localStorage.setItem("cpr__user", response.id)
                            props.history.push("/")
                        })
                }
            })
    }

    return (
        <main className="container--login">
            <section className="login__section">
                <form className="form--login" onSubmit={handleLogin}>
                <img className="darkLogo" src={require ('./darklogo.svg')}/>
                    <h2>Welcome Back to CPR</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email"
                            id="email"
                            className="form-control"
                            placeholder="Email address"
                            required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password"
                            id="password"
                            className="form-control"
                            placeholder="Password"
                            required />
                    </fieldset>
                    <fieldset>
                    <Button type="submit" variant="outline-primary">
                    Sign In
                </Button>
                      
                    </fieldset>
                </form>
            </section>
            
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
export default Login