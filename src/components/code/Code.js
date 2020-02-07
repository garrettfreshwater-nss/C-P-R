import React, { useContext } from "react"
import "./Code.css"
import { CodeContext } from "./CodeProvider";





export default ({ code, history }) => {
    
    const {deleteCode} = useContext(CodeContext)
    
    const activeUserCode = (code, history) => {
        
    if(code.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
    
    <div> 
          <button className="active__code" onClick={() => {
               history.push(`/code/edit/${code.id}`)
            }}>Edit</button>
    
        <button onClick={
            () => {
                deleteCode(code)
                .then(() => {
                    history.push("/")            
                })
            }}>
        Delete code
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="code">
                <h3 className="code__name">{ code.name }</h3>
                <div className="code__code">{ code.code }</div>
                <div className="code__note">{ code.note }</div>
                {activeUserCode(code, history)}
            </section>
    )

}