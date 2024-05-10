import { useEffect, useState } from "react"
import getData from "./Helper/Fetch"


type MessageType = {
  title: string;
  description: string;
  author: string;
};

const initialState: MessageType = {
  title: "No Información",
  description: "No información",
  author: "No información"
};

const PracticaFetch = () => {
  const [message, setMessage] = useState<MessageType>(initialState)

  const getMessage = async () => {
    const response = await getData("/unprotected", {}, "get");
    console.log(response);
    setMessage(response.data);
  }

  useEffect(() => {
    getMessage();
  }, [])

  return (
    <>
      <h2>Practica Fetch</h2>
      <h3>{message.title}</h3>
      <p>{message.description}</p>
      <p>{message.author}</p>
    </>
  )
}

export default PracticaFetch