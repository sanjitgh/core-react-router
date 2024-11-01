import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData();
  return (
    <div className="container mx-auto py-10">
      <h2 className="font-bold text-xl my-8">Our Users: {users.length}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {users.map((user) => (
          <User key={user.id} user={user}></User>
        ))}
      </div>
    </div>
  );
};

export default Users;
