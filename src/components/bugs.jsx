import { Component } from "react";
import StoreContext from '../contexts/storeContext';

class Bugs extends Component {

	static contextType = StoreContext;

	render() {
		return (<div>bugs</div>)
	}

}

export default Bugs;