import React from 'react';

import Map from '../map/map';
import PointsList from '../pointslist/pointslist';
import CreatePoint from '../createpoint/createpoint';

function Navigator(props) {

	if(props.screen === "map") return(<Map/>);
	if(props.screen === "pointslist") return(<PointsList/>);
	if(props.screen === "createpoint") return(<CreatePoint/>);
}
export default Navigator;
