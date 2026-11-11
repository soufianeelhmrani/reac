import { useState } from "react";
import { listeetudiant} from "./data"
export default function GestionEtudint(){
    
    const [listetudiant,setlisteetudiant]=useState(listeetudiant);
    function supprimer(nom){
    
     setlisteetudiant( listetudiant.filter((e)=>e.nom !=nom))
    }

    return <>
    nom: <input type="text" />
    prenom : <input type="text"  />
    filier: <select  ></select>
    <button>Ajouter</button>

<table border={1}>
    
    <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Note</th>
        <th>Filier</th>
        <th>action</th>
    </tr>
   {listetudiant.map((e)=> <tr>
    <td>{e.nom}</td>
    <td>{e.prenom}</td>
    <td>{e.note}</td>
    <td>{e.filier}</td>
    <td><button onClick={()=>{supprimer(e.nom)}}>supprimer</button> <button onClick={()}></button></td>
   </tr>)}
</table>
</>
}