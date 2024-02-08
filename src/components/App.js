import { useState } from "react";
import data from "../data";
import List from "./List";

export default function App() {
	const [birthdays, setBirthdays] = useState(data);

	function handleClearAll() {
		setBirthdays([]);
	}

	return (
		<main>
			<div className="container">
				<h1 className="container-heading">
					{birthdays.length} Birthdays Today
				</h1>
				{birthdays.length > 0 && <List birthdays={birthdays} />}
				<button className="clear-btn" onClick={handleClearAll}>
					Clear All
				</button>
			</div>
		</main>
	);
}
