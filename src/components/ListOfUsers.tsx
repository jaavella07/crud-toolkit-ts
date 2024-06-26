import { useAppSelector } from "../hooks/UseStore";
import { useUsers } from "../hooks/useUsers";

export default function ListOfUsers() {
	const users = useAppSelector((state) => state.users);
	const { handleRemoveUser } = useUsers();

	return (
		<>
			<div>
				<div>
					<h3 className="nav-title"> List Users </h3>
				</div>
				<button type="button"> Add User </button>
			</div>

			<table className="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">First Name</th>
						<th scope="col">Last Name</th>
						<th scope="col">Email</th>
						<th scope="col">Actions</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item) => (
						<tr key={item.id}>
							<th scope="row">{item.id}</th>
							<td>{item.firtsname}</td>
							<td>{item.lastname}</td>
							<td>{item.email}</td>
							<td>
								<button
									onClick={() => handleRemoveUser(item.id)}
									type="button"
									className="btn btn-outline-danger"
								>
									Delete
								</button>
								<button type="button" className="btn btn-outline-success">
									Update
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
