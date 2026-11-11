import { useState } from "react";
import { listeetudiant} from "./data"
import List from "./form/listeform";
import Addform from "./form/addform";
export default function App(){
     
    
    const [listetudiant,setlisteetudiant]=useState(listeetudiant);
   
    return <>
    <Addform listetudiant={listetudiant} setlisteetudiant={setlisteetudiant}/>

   

    

<List listetudiant={listetudiant} setlisteetudiant={setlisteetudiant}  />

  </>
  
  
}