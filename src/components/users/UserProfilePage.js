// import React, { useContext,  } from "react"
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Card from 'react-bootstrap/Card';
// import Accordion from 'react-bootstrap/Accordion';
// import { UserContext } from "./UserProvider";





// export default ({ user }) => {
    
//     const { user } = useContext(UserContext)
    
//     const activeUser = (user) =>  user.userId === parseInt(localStorage.getItem("cpr__user"), 10)
    


//     return(

//             <section className="user__card">
//                 <div className="user__text">{
//                     <Accordion defaultActiveKey="0">
//                         <Card>
//                             <Card.Header>
//                                 { user.name }
//                             </Card.Header>
//                             <Card.Body>{ user.text }</Card.Body> 
//                                 {activeUser(user)}
//                         </Card>
                       
//                     </Accordion>
//                  }
//                  </div>

//             </section>

//     )

// }

