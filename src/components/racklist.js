import React from 'react';
import {connect} from 'react-redux';

export function rackList(props) {

    const rackList = props.racks.map((rack)=>(
	<li>
		{rack}
	</li>
        ));

return(
    		<ul>
		{rackList}
		</ul>
);

}

const mapStateToProps = state => ({
	racks: state.racks
});

export default connect(mapStateToProps)(rackList);
