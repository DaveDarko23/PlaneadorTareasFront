import { useState } from "react"
import './App.css'
import FetchProtegido from "./FetchProtegido"
import LoginFetch from "./LoginFetch"
import LoginLibre from "./LoginLibre"
import PracticaFetch from "./PracticaFetch"


function App() {
  const [logeado, setLogeado] = useState(false);

  return (
    <>
      <h1>Practicas segundo parcial</h1>
      <LoginLibre />
      <hr />
      <PracticaFetch />
      <hr />
      <LoginFetch isLogeado={setLogeado} />
      <hr />
      <FetchProtegido logeado={logeado} />
    </>
  )
}

export default App
