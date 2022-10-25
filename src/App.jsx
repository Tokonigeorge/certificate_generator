import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import {data} from './csvjsons'
import VerifyEmail from "./pages/verifyEmail";
import Checkmail from "./pages/Checkmail";
import { db } from './firebase'
import {collection, query, orderBy, onSnapshot} from "firebase/firestore"

function App() {
   const [emails, setEmails] = useState([])
  const [value, setValue] = useState("");
  const [verify, setVerify] = useState(false);

   useEffect(() => {
    const q = query(collection(db, 'emails'))
  onSnapshot(q, (querySnapshot) => {
    querySnapshot.docs.map(doc => {
      setEmails(doc._document.data.value.mapValue.fields?.address?.arrayValue?.values?.map(i=>i.mapValue.fields))
   }
   
   )
  })   

   }, [])

//   useEffect(() => {
//     const update = async () => {
//     const updatedEmails = data.map(i => {
//             return {
//               email: i.email, download: false, name: ''
//             }
        
//       }
//       )
//       console.log(updatedEmails)
//     const taskDocRef = doc(db, 'emails/emailAddress')
//       await updateDoc(taskDocRef, 
//        {
//          address: updatedEmails
//        }
      
//         )
//     }
//  update()
//   })

  return (
    <Routes>
          <Route exact path="/" element={<VerifyEmail
              value={value}
              setValue={setValue}
        setVerify={setVerify}
         emails={emails}
            />}>
            
          </Route>
          <Route path="/checkemail" element={ <Checkmail email={value} verify={verify} emails={emails}/>}>
           
          </Route>
    </Routes>
  );
}

export default App;
