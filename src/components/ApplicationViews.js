import React from "react"
import { Route } from "react-router-dom"
import { CodeProvider } from "./code/CodeProvider";
import CodeForm from "./code/CodeForm";
import { CodeTypeProvider } from "./codeType/CodeTypeProvider";
import { NoteProvider } from "./notes/NoteProvider";
import NoteForm from "./notes/NoteForm";
import DashboardCodeList from "./code/DashboardCodeList";
import UserCodeList from "./code/UserCodeList";
import { UserProvider } from "./users/UserProvider";
import { UserProfilePage } from "./users/UserProfilePage";





export default (props) => {
return (
        <>
    {/* <UserProvider> */}
        <NoteProvider>
            <CodeTypeProvider>
                <CodeProvider>
                    

                    {/* <Route
                        exact path="/" 
                        render={props => <UserProfilePage {...props} />}
                    /> */}

                    <Route
                        exact path="/" 
                        render={props => <DashboardCodeList {...props} />}
                    />

                    <Route
                        exact path="/my__code" 
                        render={props => <UserCodeList {...props} />}
                    />

                    <Route
                        exact path="/add__note/:codeId(\d+)" 
                        render={props => <NoteForm {...props} />}
                    />

                    <Route
                        exact path="/add__code" 
                        render={props => <CodeForm {...props} />}
                    />
                   
                    <Route
                        path="/code/edit/:codeId(\d+)"
                        render={props => <CodeForm {...props} />}
                    />

                    <Route
                        exact path="/note/edit/:noteId(\d+)" //this is a path created here, renders the form
                        render={props => <NoteForm {...props} />}
                    />

                  
                </CodeProvider>
            </CodeTypeProvider>
        </NoteProvider>
    {/* </UserProvider> */}


        </>
    )
}