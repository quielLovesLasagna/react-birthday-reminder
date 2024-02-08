import Birthday from "./Birthday";

export default function BirthdayList({ birthdays }) {
	return (
		<ul className="birthday-list">
			{birthdays.map((birthday) => (
				<Birthday
					img={birthday.image}
					name={birthday.name}
					age={birthday.age}
					key={birthday.id}
				/>
			))}
		</ul>
	);
}
