import './App.css';

function App() {
  const handleUser = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.useName.value;
    const email = dta.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <h1>Simple CRUD</h1>
      <form onSubmit={handleUser}>
        <input type="text" name="useName" placeholder="Name" />
        <br />
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="submit" value="Add User +" />
      </form>
    </>
  );
}

export default App;
