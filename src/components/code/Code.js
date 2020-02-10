import React, { useContext } from "react"
import "./Code.scss"
import { CodeContext } from "./CodeProvider";
import { PrismCode } from "../notes/prismComponent";
//testing our form react comp
import ReactDOM from "react-dom"

const codeBit = `
code.codeSnippet
`
const Example = () => (
  <PrismCode
    code={codeBit}
    language="js"
    plugins={["line-numbers"]}
  />
)


const formContainer = document.querySelector('.react-form-container');

export default ({ code, history }) => {
    
    const {deleteCode} = useContext(CodeContext)
    
    const activeUserCode = (code, history) => {
        
    if(code.userId === parseInt(localStorage.getItem("cpr__user"), 10)){
    return (
    
    <div className="codeCard_buttons"> 
        <button className="active__code" onClick={
              () => {
               history.push(`/code/edit/${code.id}`)
               }}>Edit
        </button>
    
        <button className="deleteButton" onClick={
            () => {
                deleteCode(code)
                .then(() => {
                    history.push("/")            
                })
            }}>Delete
        </button>
    
    </div>
    
    )} else {
        return("")
    }}


    return(
            <section className="code__card">
                <h3 className="code__name">{ code.name }</h3>
                <div className="code__codeType">{ code.codeType.type }</div>
                <div className="code__codeSnippet">{  
                <PrismCode
                        code={ code.codeSnippet }
                        language="react"
                        plugins={["line-numbers"]}
                    />
                    
                }
                </div>

                <div className="code__text">{ code.text }</div>
                {activeUserCode(code, history)}
            </section>

    )

}

