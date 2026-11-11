export default function List({listetudiant,setlisteetudiant}){
    function supprimer(nom){
        
         setlisteetudiant( listetudiant.filter((e)=>e.nom !=nom))}
       return <>
    <table border={1}>
    
    <tr>
        <th>Nom</th>
        <th>Prenom</th>
        <th>Note</th>
        <th>action</th>
    </tr>
   {listetudiant.map((e)=>{ return <tr>
    <td>{e.id}</td>
    <td>{e.nom}</td>
    <td>{e.prenom}</td>
    <td><button onClick={()=>supprimer(e.nom)}>supprimer</button> </td> </tr> })
    }
  
</table>
</>
}