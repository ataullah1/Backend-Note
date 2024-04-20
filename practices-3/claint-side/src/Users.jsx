import { useLoaderData } from 'react-router-dom';
import './App.css';

const Users = () => {
  const data = useLoaderData();

  const handleDelete = (id) => {
    console.log('delete: ', id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
        if (dta.deletedCount > 0) {
          alert('Deleted successfull.');
        }
      });
  };
  return (
    <div>
      <h1>Users Page {data.length}</h1>
      <div>
        {data.map((dta) => (
          <p key={dta._id}>
            {dta.name} : {dta.email}{' '}
            <button onClick={() => handleDelete(dta._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
