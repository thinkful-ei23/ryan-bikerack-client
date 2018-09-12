import React from 'react';
import rackList from './racklist';
import rackForm from './rackform';
import {fetchCheeses} from '../actions/cheese';
import {connect} from 'react-redux';


export class CheeseList extends React.Component {

componentDidMount(){
this.props.dispatch(fetchCheeses());}
renderResults() {
        if(this.props.loading) {
            return <li>Loading</li>;
        }
        if(this.props.error) {
            return <li>Oops</li>;
        }
        const listedCheeses = this.props.cheeses.map((cheese, i) => {
            return (<li key={i}>{cheese}</li>)
        });
        return (listedCheeses);
    }




    render() {
        return (
	//new component: input.js. should be a tap to expand (reference bookmark app)
	<div>	
		<rackForm />
		<rackList />

            <ul>
                {this.renderResults()}
    
    </ul>
   	</div>
  )
  }
}

const mapStateToProps = (state) => ({
    cheeses: state.cheeses,
    racks: state.racks,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(CheeseList);

