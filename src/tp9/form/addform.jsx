import { useState } from "react";
export default function Addform({setlisteetudiant,listetudiant}){
       const [noma,setnoma]=useState("");
        const [prenomA,setprenomA]=useState("");
     const ajouter=()=>{
      let t=Math.max(...listetudiant.map(e=>e.id))+1;
      let et={id:t,nom:noma,prenom:prenomA};
      setlisteetudiant([...listetudiant,et]);setnoma('');setprenomA('')
    }
    return <>
    <div>
    nom: <input type="text" onChange={(e)=>setnoma(e.target.value)} />
    prenom : <input type="text" onChange={(e)=>setprenomA(e.target.value) } />
    
    <button onClick= {()=>{ajouter()}}>Ajouter</button>
    </div>
    </>
}