import React , { useState, useEffect }from 'react';
import useInput from '../../CustomHooks/UseInput';
import FormContainer from './FormStyled';
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const user=useInput("text", "user");
  const pass=useInput("password", "pass");
  const [data, setData] = useState({});

  useEffect(() => {
    new Promise((resolve, reject) => {
      let register = JSON.parse(sessionStorage.getItem("register"));
      if (data.name === register.name && data.pass === register.pass) {
        resolve(true);
      }
    })
      .then((res) => sessionStorage.setItem("user",res))
      .then(() => navigate("/"));
  }, [data, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      ...user.input,
      ...pass.input,
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
        <form action="">
        <label htmlFor="">Usuario: <input {...user} /></label>
        <label htmlFor="">Contraseña: <input {...pass}/></label>
            <button>Ingresar</button>
        </form>
    </FormContainer>
  )
}

export default LogIn