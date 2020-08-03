import React, {useState} from 'react';
import './pointslist.css';


function PointsList() {
	const [refresh, setRefresh] = useState(false);

	var keys = [];
	for(var x=0; x<=localStorage.length-1; x++){
		var key = localStorage.key(x);
		keys.push(key)
	}
	if(keys.length >= 1){
		var list = keys.map((key)=>{
			var object = JSON.parse(localStorage.getItem(key));

			return(
				<div className="container">
					<div className="place">
						<h1 className="name">{object.name}</h1>
						<p className="notes">{object.notes}</p>
						<button className="remove" onClick={()=>{
							localStorage.removeItem(object.name);
							setRefresh(!refresh);
						}}>Borrar</button>
					</div>
				</div>
			);
		});
		return list;
	}else{
		return(<h2 className="nopoints">No has creado ningun punto</h2>);
	}
}

export default PointsList;