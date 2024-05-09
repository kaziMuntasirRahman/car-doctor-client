import { Link } from 'react-router-dom';
import SignInPhoto from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../component/AuthProvider';
import Swal from 'sweetalert2';

const SignIn = () => {
  const { logInUser } = useContext(AuthContext);

  const handleSignInUser = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
    .then(data=>data.user)
    .then(user=>{
      console.log(user);
      Swal.fire("User logged in as: " + user.email); 
    })

  }


  return (
    <div>
      <div className="hero min-h-screen bg-base-200 lg:px-28">
        <div className="w-full hero-content flex-col lg:flex-row justify-between">
          <div className="text-center lg:text-left lg:w-1/2">
            <img src={SignInPhoto} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignInUser} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="Your email" className="input input-bordered" name='email' required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="Your password" className="input input-bordered" name='password' required />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-orange-600 text-white">Login</button>
              </div>
              <button className="btn btn-primary">Continue with Google</button>
              <p className='text-center'>New Here? <Link className='text-orange-600 font-semibold' to={'/signup'}>Sign Up</Link></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;