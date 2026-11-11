import { useState } from "react";
import { Personnels, Serveces } from "./data";
export default function App() {
  const [P, setP] = useState(Personnels);
  const [Snom,setSnom] = useState("");
  const [id,setId] = useState("");
const [nom,setNom] = useState("");
const [prenom,setPreom] = useState("");
const [Sid,setSid] = useState(Serveces[0].num);
function supp(id) {x
    setP(P.filter(e=>e.id!=id));
}
function ajouter() {
    var p = {
    id: id,
    nom: nom,
    prenom: prenom,
    serveceId: Sid
  };
  console.log(p);
  
  setP([...P,p]);
}
  return (
    <div>
      <h2>Nouveua Personnel :</h2>
      id : <input type="number" onChange={(e)=>{setId(e.target.value)}} />
      <br />
      nom : <input type="text" onChange={(e)=>{setNom(e.target.value)}} />
      <br />
      prenom : <input type="text" onChange={(e)=>{setPreom(e.target.value)}} />
      <br />
      service :{" "}
      <select onChange={(e)=>{setSid(e.target.value)}}>
        {Serveces.map((e) => (
          <option value={e.num}>{e.title}</option>
        ))}
      </select> <br />
      <button onClick={ajouter}>Ajouter</button>
      <hr />
      Nom : <input type="text" onChange={(e)=>{setSnom(e.target.value)}}/>
      <table>
        <tr>
          <th>Nom</th>
          <th>Prenom</th>
          <th>ServiceId</th>
          <th></th>Action
        </tr>
        {P.filter(e=>{return e.nom.includes(Snom)}).map((e) => (
          <tr>
            <td>{e.nom}</td>
            <td>{e.prenom}</td>
            <td>{e.serveceId}</td>
            <td><button onClick={()=>supp(e.id)}>Supprimer</button></td>
          </tr>
        ))}
      </table>
    </div>
  );
}
