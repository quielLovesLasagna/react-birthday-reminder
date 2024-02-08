export default function Birthday({ img, name, age }) {
	return (
		<li className="birthday-item">
			<img src={img} alt="avatar" className="avatar" />
			<div className="info">
				<h2 className="name">{name}</h2>
				<h3 className="age">{age} years</h3>
			</div>
		</li>
	);
}
