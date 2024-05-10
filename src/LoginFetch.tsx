import { ChangeEvent, FormEvent, useState } from "react";

const LoginFetch = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }

  return (
    <>
      <h1>Login Real</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="username" placeholder="Nombre de usuario" value={user.username} onChange={onChange} />
        <br />
        <input type="password" name="password" placeholder="Contraseña" value={user.password} onChange={onChange} />
        <br />
        <input type="submit" value="Iniciar Sesión" />
      </form>
    </>
  )
}

export default LoginFetch