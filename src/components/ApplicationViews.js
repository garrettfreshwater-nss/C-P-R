import React from "react"
import { Route } from "react-router-dom"
import { CodeProvider } from "./code/CodeProvider";
import CodeForm from "./code/CodeForm";
import CodeList from "./code/CodeList";
import { CodeTypeProvider } from "./codeType/codeTypeProvider";


export default (props) => {
return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
           
            <CodeTypeProvider>
                <CodeProvider>
       
                {/* <Route exact path="/">
                    <CodeList />
                </Route> */}
                
                    <Route exact path="/my__code" render={props => <CodeList {...props} />} />
{/* 
                    <Route
                        exact path="/dashboard" //this is a path created here, renders the form
                        render={props => <CodeForm {...props} />}
                    /> */}

                    <Route
                        exact path="/add__code" //this is a path created here, renders the form
                        render={props => <CodeForm {...props} />}
                    />
                    <Route
                        path="/code/edit/:codeId(\d+)"
                        render={props => <CodeForm {...props} />}
                    />
   
                </CodeProvider>
            </CodeTypeProvider>

           
        </>
    )
}