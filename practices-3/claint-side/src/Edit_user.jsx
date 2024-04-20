import { useLoaderData } from 'react-router-dom';

const Edit_user = () => {
  const loderUser = useLoaderData();
  return (
    <div>
      <h1>Edit User</h1>
      <h2>{loderUser.name}</h2>
    </div>
  );
};

export default Edit_user;
