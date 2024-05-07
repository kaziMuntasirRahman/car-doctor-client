import { Link } from 'react-router-dom';
import signupPhoto from '../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../component/AuthProvider';

const SignUp = () => {
  const { loading, createUser } = useContext(AuthContext);

  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    const newUser = { name, email, password };
    console.log(newUser);



    createUser(email, password)
      .then(userCredential => console.log(userCredential.user))
  }

  return (
    <div>
      {
        loading ? <>
          <span className="loading loading-ring loading-xs"></span>
          <span className="loading loading-ring loading-sm"></span>
          <span className="loading loading-ring loading-md"></span>
          <span className="loading loading-ring loading-lg"></span>
        </> :
          <div className="hero min-h-screen bg-base-200 lg:px-28">
            <div className="w-full hero-content flex-col lg:flex-row justify-between">
              <div className="text-center lg:text-left lg:w-1/2">
                <img src={signupPhoto} alt="" />
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className='card-body'>

                  <form onSubmit={handleSignUp}>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Name</span>
                      </label>
                      <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input type="email" placeholder="Your email" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Password</span>
                      </label>
                      <input type="password" placeholder="Your password" name="password" className="input input-bordered" required />
                      <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                      </label>
                    </div>
                    <div className="form-control mt-6">
                      <button className="btn bg-orange-600 text-white">Sign Up</button>
                    </div>
                  </form>
                  <button className="btn btn-primary">Continue with Google</button>
                  <p className='text-center'>Already Have An Account? <Link className='text-orange-600 font-semibold' to={'/signin'}>Sign In</Link></p>
                </div>
              </div>
            </div>
          </div>
      }
    </div>
  );
};

export default SignUp;