import { Component } from "react";
import StoreContext from '../contexts/storeContext';
import { loadbugs } from '../store/bugs';

class Bugs extends Component {

	static contextType = StoreContext;
	state = { bugs: [] }

	componentDidMount() {
		const store = this.context;

		this.unsubscribe = store.subscribe(() => {
			const bugsInStore = store.getState().entities.bugs.list;
			if(this.state.bugs !== bugsInStore) {
				this.setState({ bugs: bugsInStore });
			}
		});

		store.dispatch(loadbugs());

	}

	componentWillUnmount() {
		this.unsubscribe();
	}

	render() {
		return <ul>{this.state.bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}</ul>
	}

}

export default Bugs;