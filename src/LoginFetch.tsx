import { ChangeEvent, FormEvent, useState } from "react";

const LoginFetch = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3010/api/v1/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      console.log(response)
      if (response.status === 401) {
        alert("Usuario Incorrecto");
        return;
      }
      const data = await response.json();
      console.log('Token JWT:', data);
      localStorage.setItem("token", data.token)
      alert("Usuario Correcto")
    } catch (error) {
      console.error('Error:',);
    }
  };

  return (
    <>
      <h1>Login Real</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="email" placeholder="Nombre de usuario" value={user.email} onChange={onChange} />
        <br />
        <input type="password" name="password" placeholder="Contraseña" value={user.password} onChange={onChange} />
        <br />
        <input type="submit" value="Iniciar Sesión" />
      </form>
    </>
  );
};

export default LoginFetch;
