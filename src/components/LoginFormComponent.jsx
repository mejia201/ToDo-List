import { useForm } from "react-hook-form"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserDataContext";
import Swal from "sweetalert2";

export const LoginFormComponent = () => {

    const {register,handleSubmit} = useForm();
    const navigate = useNavigate();

    const {user,setUser} = useContext(UserContext);

    
    const onSubmitForm = (data) => {
        console.log(data);
        
        signInWithEmailAndPassword(auth, data.mail, data.pass)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user);
            setUser(user);

            Swal.fire({
              icon: 'success',
              title: 'Exito',
              text: 'El inicio de sesion fue exitoso!',
              timer: 1500,
              showConfirmButton: false,
            });

            navigate("/")
            })
        .catch((error) => {
        console.error(error);
        
    });

    }

    return (
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit(onSubmitForm)}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="text"
                      id="email"
                      placeholder="Example: mail@mail.com"
                      className="form-control"
                      {...register('mail')}
                    />
                  </div>
    
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                      type="password"
                      id="password"
                      placeholder="******"
                      className="form-control"
                      {...register('pass')}
                    />
                  </div>
    
                  <div className="d-grid">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
    
      
}
