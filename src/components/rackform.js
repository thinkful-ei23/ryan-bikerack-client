import React from 'react';
import {connect} from 'react-redux';

export function rackForm(props) {


return(
	<form>
		<label for='rackLocation'>Location: </label>
		<input type='test' name='rackLocation' id='rackLocation' />
		<label for='rackOccupancy'>Occupancy: </label>
		<input type='text' name='rackOccupancy' id ='rackOccupancy' />
        	<input type='submit' value='Submit' />
	</form>
);

}

const mapStateToProps = state => ({
	//racks: state.racks
});

export default connect(mapStateToProps)(rackForm);
