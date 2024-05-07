import { CiSearch } from 'react-icons/ci';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../src/assets/logo.svg';

const Navbar = () => {
  const navItems = <>
    <li><NavLink to={'/'}>Home</NavLink></li>
    <li><a href='#about'>About</a></li>
    <li><NavLink to={'/services'}>Services</NavLink></li>
    <li><NavLink to={'blog'}>Blog</NavLink></li>
    <li><NavLink to={'/contact'}>Contact</NavLink></li>
    <li><NavLink to={'/signin'}>Sign In</NavLink></li>
    <li><NavLink to={'/signup'}>Sign Up</NavLink></li>
  </>

  return (
    <div className="navbar bg-base-100 my-2">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navItems}
          </ul>
        </div>
        <Link to={'/'}><img src={logo} alt="" /></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end space-x-5">
        <HiOutlineShoppingBag className='text-3xl' />
        <CiSearch className='text-3xl' />
        <Link to={'/appointment'} className='btn btn-outline btn-secondary'>Appointment</Link>
      </div>
    </div>
  );
};

export default Navbar;