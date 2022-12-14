import React, { useContext, useEffect } from 'react';
import { Link, useNavigate,  } from 'react-router-dom';
import { AuthContext } from '../Context/UseContext';

const Register = () => {
    const {user, registerWithEmail } = useContext(AuthContext);
    const navigate = useNavigate();
   
     const onSubmit = (e) => {
       e.preventDefault();
       const form = e.target;
       const name = form.name.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name, email, password);
       

       registerWithEmail(email, password)
         .then((result) => {
           const user = result.user;
           form.reset();
          
           console.log(user);
         })
         .catch((error) => {
           console.error(error);
         });
     };
    useEffect(() => {
      if(user){
        navigate("/");
      }
      
    }, [user,navigate]);
     return (
       <div>
         <div className="hero min-h-screen bg-base-200">
           <div className="hero-content flex-col ">
             <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold">Register Now</h1>
             </div>
             <div className="card flex-shrink-0 w-[55rem] shadow-2xl bg-base-100">
               <form onSubmit={onSubmit}>
                 <div className="card-body">
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Name</span>
                     </label>
                     <input
                       name="name"
                       type="text"
                       placeholder="name"
                       className="input input-bordered"
                     />
                   </div>
                   <div className="form-control">
                     <label className="label">
                       <span className="label-text">Email</span>
                     </label>
                     <input
                       name="email"
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
                       <Link to="/login" className="label-text-alt text-secondary link link-hover">
                         Alread have a account? Please Login
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

export default Register;