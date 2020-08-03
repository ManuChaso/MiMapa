import React from 'react';
import './map.css';
import GoogleMapReact from 'google-map-react';
import {Credentials} from '../../credentials';

const Map = (props)=>{

	var keys = [];
	for(var x=0; x<=localStorage.length-1; x++){
		var key = localStorage.key(x);
		keys.push(key)
	}

	var list = keys.map((key)=>{
		var object = JSON.parse(localStorage.getItem(key));
		var char = object.name.charAt();;

		return(
			<div className="point" lat={object.lat} lng={object.lng}>
				{char}
			</div>
		);
	});

	return(
		<div style={{height:'550px', width:'90%'}}>
			<GoogleMapReact
			bootstrapURLKeys={{key: Credentials.ApiKey}}
			defaultCenter={{lat:40.4167, lng:-3.70325}}
			defaultZoom={6}
			>
				{list}
			</GoogleMapReact>
		</div>
	);
}

export default Map;