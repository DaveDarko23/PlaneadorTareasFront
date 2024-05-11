import { useEffect, useState } from "react";

interface LoginFetchProps {
  logeado: boolean;
}


const FetchProtegido: React.FC<LoginFetchProps> = ({ logeado }) => {
  const [tasks, setTasks] = useState([]);

  const showTasks = async () => {
    try {
      const response = await fetch('http://localhost:3010/api/v1/tasks', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("token")}`
        },

      });
      console.log(response)
      if (response.status === 401) {
        alert("Usuario Incorrecto");
        return;
      }
      const data = await response.json();
      console.log(data);
      setTasks(data);
    } catch (error) {
      console.error('Error:',);
    }
  }


  useEffect(() => {
    if (!logeado) { setTasks([]); return; }

    showTasks();
  }, [logeado])
  return <>
    <h2>Tareas del usuario loggeado</h2>
    {logeado && (
      <section>
        {tasks.map((task) => (
          <section>
            <h4>{task.name}</h4>
            <p>{task.description}</p>
            <p> Fecha inicio: {task.date}</p>
            <p> Fecha Final: {task.dateEnd}</p>
          </section>
        ))}
      </section>)}
  </>;
};

export default FetchProtegido;
