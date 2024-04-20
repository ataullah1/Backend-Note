import { useLoaderData } from 'react-router-dom';

const Edit_user = () => {
  const loderUser = useLoaderData();

  const handlEdit = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.useName.value;
    const email = dta.email.value;
    const editUser = { name, email };
    // console.log(editUser);
    fetch(`http://localhost:5000/users/${loderUser._id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(editUser),
    })
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
        if (dta.modifiedCount > 0) {
          alert('Successfully Edited User');
        }
      });
  };
  return (
    <div>
      <h1>Edit User</h1>
      <h2>{loderUser.name}</h2>
      <form onSubmit={handlEdit}>
        <input
          type="text"
          name="useName"
          placeholder="Name"
          defaultValue={loderUser?.name}
        />
        <br />
        <input
          type="email"
          name="email"
          placeholder="email"
          defaultValue={loderUser?.email}
        />
        <br />
        <input type="submit" value="Edit Users" />
      </form>
    </div>
  );
};

export default Edit_user;
