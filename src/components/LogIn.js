import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const LogIn = () => {
    const {loginWithEmail} = useContext(AuthContext);
    const onSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();

        loginWithEmail(email, password)
        .then(result=>{
            const user = result.user
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card flex-shrink-0 w-[55rem] shadow-2xl bg-base-100">
              <form onSubmit={onSubmit}>
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                        name='email'
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                        name="password"
                      type="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label">
                      <Link to="#" className="label-text-alt link link-hover">
                        Forgot password?
                      </Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LogIn;