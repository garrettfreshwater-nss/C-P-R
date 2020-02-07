import React, { useContext } from "react"
import { CodeContext } from "./CodeProvider";
import Code from "./Code"
import "./Code.css"
// import { FriendContext } from "../friends/FriendProvider"


export default (props) => {
    const { code } = useContext(CodeContext)
    // const { friends } = useContext(FriendContext)


    const codeArray = []

    const activeUsersCode = code.filter(a => {
        return a.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    })

    activeUsersCode.map(a => {
        return codeArray.push(a)
    })

    // const activeFriendsArray = friends.filter( f => {
    //     return f.activeUserId === parseInt(localStorage.getItem("nutshell_user"), 10)
    // })

    // const friendsArticles = activeFriendsArray.map(f =>{
    //     return articles.filter(a => {
    //         return a.userId === f.userId 
    //     })
    // })

    // const singleFriendArticle = friendsArticles.map (f => {
    //     return f.map(sf => codeArray.push(sf))
    // })

    console.log(codeArray)
    return (
        <>
            <h1>Code</h1>
            <div className="code__list">
                {
                    codeArray.map(c => {
                        return <Code key={c.id} code={c} {...props} />
                    })
                }
            </div>
        </>
    )
}