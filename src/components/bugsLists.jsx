import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadbugs, getUnresolvedBugs, resolveBug } from "../store/bugs";

const BugsLists = () => {
	const dispatch = useDispatch();
	const bugs = useSelector(getUnresolvedBugs);

	useEffect(() => {
		dispatch(loadbugs());
	}, []);

	return (
		<ul>
			{bugs.map(bug => (
				<li key={bug.id}>
					{bug.description}
					<button onClick={() => dispatch(resolveBug(bug.id))}>Resolve</button>
				</li>
			))}
		</ul>
	);
};

export default BugsLists;
