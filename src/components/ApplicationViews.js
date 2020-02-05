import React from "react"
import { Route } from "react-router-dom"


export default (props) => {
    return (
        <>
        {/* Render the location list when http://localhost:3000/ */}
            <ProviderProvider>
                <Route exact path="/">
                    {/* <LocationList /> */}
                </Route>
            </ProviderProvider>


            </>
    )
}