import "./App.css";
import Bugs from "./components/bugs";
import BugsLists from "./components/bugsLists";
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

function App() {
	return (
		<Provider store={store}>
			<Bugs />
			<br />
			<BugsLists />
		</Provider>
	)
}

export default App;
