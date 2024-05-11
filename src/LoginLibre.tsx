import { ChangeEvent, FormEvent, useState } from "react";

const LoginLibre = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (user.username === "DaveDarko" && user.password === "Comida Rica 123")
      alert("Estas loggeado en la aplicación... si tan solo hubiera una")
    else
      alert("No estás usando las palabras magicas")

    setUser({ username: "", password: "" });
  }

  return (
    <>
      <h2>Login</h2>
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

export default LoginLibre