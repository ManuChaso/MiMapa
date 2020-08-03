import React, {useState} from 'react';
import './createpoint.css';


function CreatePoint() {
	const [name, setName] = useState("");
	const [lat, setLat] = useState("");
	const [lng, setLng] = useState("");
	const [notes, setNotes] = useState("");

	const point ={
		name:name,
		lat:lat,
		lng:lng,
		notes:notes
	}

    const savePoint = ()=>{
        if(point.name && point.lat && point.lng && point.notes){
            localStorage.setItem(point.name, JSON.stringify(point));
            setName("");
            setLat("");
            setLng("");
            setNotes("");
        }else{
            alert("Debes llenar todos los campos");
        }
    }

  return (
    <div className="create">
    	<input className="input" type="text" name="name" placeholder="Nombre" value={name} onChange={e => setName(e.target.value)}/>
    	<input className="input" type="number" name="lat" placeholder="Latitud" value={lat} onChange={e => setLat(e.target.value)}/>
    	<input className="input" type="number" name="lng" placeholder="Longitud" value={lng} onChange={e => setLng(e.target.value)}/>
    	<textarea className="textarea" placeholder="Notas" value={notes} onChange={e => setNotes(e.target.value)}/>
    	<button onClick={()=> savePoint()} className="createButton">Crear</button>     
    </div>
  );
}

export default CreatePoint;