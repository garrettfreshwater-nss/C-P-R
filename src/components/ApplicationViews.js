import React from "react"
import { Route } from "react-router-dom"
import { CodeProvider } from "./code/CodeProvider";
import CodeForm from "./code/CodeForm";
import CodeList from "./code/CodeList";


export default (props) => {
return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
           
        
                <CodeProvider>
       
                <Route exact path="/">
                    <CodeList />
                </Route>
                
                    <Route exact path="/" render={props => <CodeList {...props} />} />

                    <Route
                        exact
                        path="/code"
                        render={props => <CodeForm {...props} />}
                    />
                    <Route
                        path="/code/edit/:codeId(\d+)"
                        render={props => <CodeForm {...props} />}
                    />
   
                </CodeProvider>

           
        </>
    )
}