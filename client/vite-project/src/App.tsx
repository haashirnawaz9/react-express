import { useEffect, useState } from 'react'

import './App.css'
import axios from 'axios'

function App() {
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const FetchAPI = async () => {
      const response = await axios.get("http://localhost:3001/api")
      const data = response.data.fruits
      setMessages(data)
      console.log(data)
    }

    FetchAPI();
  }, [])

  return (
   <div>
      {messages.map((message, index) => (
        <div key={index}>
          <h1>{message}</h1>
        </div>
      ))}
   </div>
  )
}

export default App
