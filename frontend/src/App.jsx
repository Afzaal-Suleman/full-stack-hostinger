import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState("")
  console.log(message);
  

  const fetchApi = () => {
    fetch("http://localhost:4000/api/message").then((res) => res.json()).then((data) => setMessage(data?.message)).catch((error) => console.log("api error", error)
    )
  }
  useEffect(() => {
    fetchApi()
  }, [])
  return (
    <>
      <h1>Welocome to Afzaal frontend</h1>
      <h2 className="read-the-docs">
       {message}
      </h2>
    </>
  )
}

export default App
