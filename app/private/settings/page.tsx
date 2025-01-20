import { fetchAllUsers } from "@/action/user";
import { getSession } from "@/lib/getSession";
import { redirect } from "next/navigation";

const Settings = async () => {

   const session = await getSession();
          const user = session?.user;
          if(!user){
            redirect('/login')
          }

          if(user?.role !== 'admin'){
            redirect('/private/dashboard')
          }

    const allUsers = await fetchAllUsers()

    return(
        <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">users</h1>
      <table className="w-full rounded shadow">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2">First Name</th>
            <th className="p-2">Last Name</th>
            <th className="p-2">Action</th>
          </tr>
        </thead>

        <tbody> 
          {allUsers?.map((user)=>(
            <tr key={user._id}>
              <td className="p-2">
                {user.firstName}
              </td>
              <td className="p-2">
                {user.lastName}
              </td>
              <td className="p-2">
              <form action="">
                <button>delete</button>
              </form>
              </td>
             
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    )
}

export default Settings