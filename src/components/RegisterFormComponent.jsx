import {useForm} from 'react-hook-form'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/config';

export const RegisterFormComponent = () => {
    const {register, handleSubmit} = useForm();

    const onSubmitForm = (data) => {
        console.log(data);
        console.log(data.email);
        
        

      createUserWithEmailAndPassword(auth, data.email, data.password)
          .then((userCredential) => {
          
          const user = userCredential.user;
          console.log(user);
          
          })
        .catch((error) => {
        console.error(error)

  });

    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Register</h2>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Example: Email@mail.com"
                      className="form-control"
                      {...register('email')}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      className="form-control"
                      {...register('password')}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      placeholder="Repeat your password"
                      className="form-control"
                      {...register('confirmPassword')}
                    />
                  </div>
    
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Send</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );    
}
