import React , { useState, useEffect, useContext }from 'react';
import useInput from '../../CustomHooks/UseInput';
import FormContainer from './FormStyled';
import { useNavigate, Link } from "react-router-dom";
import { userContext } from '../UseContext/userContext';


const Register = () => {

    const navigate = useNavigate();
    const fName =useInput("text", "name");
    const lastName=useInput("text", "lastName");
    const user=useInput("text", "user");
    const email=useInput("email", "email");
    const phone=useInput("number", "phone");
    const pass=useInput("password", "pass");
    const [data, setData] = useState({});

    useEffect(() => {
      new Promise((resolve, reject) => {
        if (data.name) {
          resolve(data);
        }
      })
        .then((res) => sessionStorage.setItem("register", JSON.stringify(res)))
        .then(() => alert(`Registro exitoso! ${"\n"} Ven a probar tus credenciales--->`))
        .then(() => navigate("/login"));
    }, [data]);
    

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...fName.input,
      ...lastName.input,
      ...user.input,
      ...email.input,
      ...phone.input,
      ...pass.input,
      });
  };
  
  return (
    <FormContainer onSubmit={handleSubmit}>
        <form action="">
        <label htmlFor="">Nombre: <input {...fName}/></label>
        <label htmlFor="">Apellido: <input {...lastName} /></label>
        <label htmlFor="">Usuario: <input {...user} /></label>
        <label htmlFor=""> Correo <input {...email}/> </label> 
        <label htmlFor="">Telefono: <input {...phone}/></label>
        <label htmlFor="">Contraseña: <input {...pass}/></label>
        <button>Registrarse</button>
        </form>
    </FormContainer>
  )
}

export default Register