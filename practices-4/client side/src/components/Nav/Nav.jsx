import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="absolute top-0 right-0 left-0 bg-slate-700 p-3">
      <ul className="navBer flex items-center justify-around max-w-[500px] w-11/12 gap-12 mx-auto text-white">
        <NavLink className="py-2 px-4 rounded-md" to={'/'}>
          Home
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to={'/alluser'}>
          All User
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to={'/login'}>
          Login
        </NavLink>
        <NavLink className="py-2 px-4 rounded-md" to={'/register'}>
          Register
        </NavLink>
      </ul>
    </div>
  );
};

export default Nav;
