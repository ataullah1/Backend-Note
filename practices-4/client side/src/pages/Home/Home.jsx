const Home = () => {
  const handleUserAdd = (e) => {
    e.preventDefault();
    const dta = e.target;
    const name = dta.name.value;
    const email = dta.email.value;
    const number = dta.number.value;
    const country = dta.country.value;
    const birth = dta.birth.value;
    const userDta = { name, email, number, country, birth };
    // console.log(userDta);
    fetch('http://localhost:200/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(userDta),
    })
      .then((res) => res.json())
      .then((dta) => {
        console.log(dta);
      });
  };

  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-full">
        <h1 className="text-5xl text-center font-bold py-5">Add New Users</h1>
        <div className="min-w-60 w-6/12 mx-auto bg-yellow-500  rounded-xl p-7">
          <form className="flex flex-col gap-5" onSubmit={handleUserAdd}>
            <input
              className="py-2 px-4 rounded-md w-full outline-none"
              type="text"
              name="name"
              placeholder="Name"
            />
            <input
              className="py-2 px-4 rounded-md w-full outline-none"
              type="email"
              placeholder="Email"
              name="email"
            />
            <input
              className="py-2 px-4 rounded-md w-full outline-none"
              type="number"
              placeholder="Number"
              name="number"
            />
            <input
              className="py-2 px-4 rounded-md w-full outline-none"
              type="text"
              placeholder="Country"
              name="country"
            />
            <input
              className="py-2 px-4 rounded-md w-full outline-none"
              type="date"
              placeholder="Date Of Birth"
              name="birth"
            />
            <input
              className="py-2 px-4 rounded-md w-full outline-none bg-slate-600 border-2 border-stone-600 hover:text-stone-600 duration-150 active:scale-95 hover:bg-transparent text-white font-bold "
              type="submit"
              value="Add User +"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
