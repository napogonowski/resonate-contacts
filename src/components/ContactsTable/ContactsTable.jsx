import { Link } from "react-router-dom";
export default function ContactsTable({ users }) {
  return (
    <>
      <h1>My Contacts ({users.length})</h1>
      <div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>
                  <Link to={`/contact?selectedId=${user.id}`}>
                    <button>View Contact</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
