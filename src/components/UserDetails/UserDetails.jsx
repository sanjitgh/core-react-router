import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const user = useLoaderData();
  const { name, email, phone, website } = user;
  return (
    <div className="container mx-auto">
      <h2 className="font-bold text-xl">About user details</h2>

      <div className="bg-blue-500 text-white p-5 rounded my-10">
        <h3>{name}</h3>
        <p>{phone}</p>
        <p>{email}</p>
        <p>{website}</p>
      </div>
    </div>
  );
};

export default UserDetails;
