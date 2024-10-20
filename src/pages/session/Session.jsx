import { useState } from "react"
import { LoginFormComponent } from "../../components/LoginFormComponent"
import { RegisterFormComponent } from "../../components/RegisterFormComponent"
import { Link } from "react-router-dom";

export const Session = () => {
  
    const [typeForm, setTypeForm] = useState("login");

  return (
   <>
   <div className="text-center">
      <Link className="btn btn-dark mb-3" to="/">Regresar</Link> 
      <br/>
      <h1 className="mb-2">Manejo de sesion</h1>
      <button className="btn btn-success me-2" onClick={() => { setTypeForm('login')}} > Iniciar Sesion</button>
      <button className="btn btn-warning" onClick={() => { setTypeForm('signup')}} > Registrarse</button>
   
      { typeForm === "login" ? <LoginFormComponent /> : <RegisterFormComponent /> }
      
   </div>
    
   </>
  )
}
