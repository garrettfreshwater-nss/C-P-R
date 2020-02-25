import React from "react"
import { Route, Redirect } from "react-router-dom"
import ApplicationViews from "./ApplicationViews"
import NavBar from "./nav/NavBar"
import Login from "./auth/Login"
import Register from "./auth/Register"
import "./cpr.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { CodeTypeProvider } from "./codeType/CodeTypeProvider";
import { CodeProvider } from "./code/CodeProvider";
import { NoteProvider } from "./notes/NoteProvider";
// import { UserProvider } from "./users/UserProvider";



export default (props) => (
    <>
    <CodeTypeProvider>
        <CodeProvider>
            <NoteProvider>
                {/* <UserProvider> */}

    
                <Route render={() => {
                    if (localStorage.getItem("cpr__user")) {
                        return (
                            
                            <>
                                <Route render={props => <NavBar {...props} />} />
                                <Route render={props => <ApplicationViews {...props} />} />
                            </>
                        )
                    } else {
                        return <Redirect to="/login" />
                    }
                }} />

                <Route path="/login" render={props => <Login {...props} />} />
                <Route path="/register" render={props => <Register {...props} />} />
        
                    {/* </UserProvider> */}
                </NoteProvider>
            </CodeProvider>
        </CodeTypeProvider>
    </>

    
)

