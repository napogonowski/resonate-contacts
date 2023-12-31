import { Link } from "react-router-dom";
import { Contact } from "lucide-react";
export default function ContactsTable({ users }) {
  return (
    <>
      <h1 className="text-3xl mt-2 md:mt-5	tracking-tighter text-pink-500 font-medium">
        My Contacts ({users.length})
      </h1>
      <div className="flex justify-center mt-5">
        <table className="border-separate border-spacing-4 border-4 bg-white/50 p-2 text-left rounded-xl">
          <tbody className="text-lg">
            {users.map((user) => (
              <tr
                className="mt-10 hover:outline-purple-600 outline outline-offset-2 outline-pink-500 rounded-xl	"
                key={user.id}
              >
                <td className="p-5">
                  <div className="w-10 h-10 bg-pink-500 border-4 border-indigo-600/100 rounded-full flex items-center justify-center text-xl text-white title-font">
                    {user.name[0]}
                  </div>
                </td>
                <td className="m-5 text-xl">{user.name}</td>
                <td>
                  <Link to={`/contact?selectedId=${user.id}`}>
                    <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 py-2.5 text-center me-2">
                      <Contact />
                    </button>
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
