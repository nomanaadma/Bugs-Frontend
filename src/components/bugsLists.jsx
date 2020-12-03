import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadbugs, getUnresolvedBugs } from '../store/bugs';

const bugsLists = () => {

	const dispatch = useDispatch();
	const bugs = useSelector(getUnresolvedBugs);

	useEffect(() => {
		dispatch(loadbugs());
	}, []);

	return <ul>{bugs.map(bug => <li key={bug.id}>{bug.description}</li>)}</ul>
};

export default bugsLists;