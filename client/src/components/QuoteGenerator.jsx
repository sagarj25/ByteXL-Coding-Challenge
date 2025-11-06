import { useState } from "react"
import axios from "axios"

export default function QuoteGenerator() {
  const [quote, setQuote] = useState("")
  const [loading, setLoading] = useState(false)

  const getQuote = () => {
    setLoading(true)
    axios.get("http://localhost:5000/api/quote")
      .then(res => {
        setQuote(res.data.quote)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }

  return (
    <div>
      <h2>Motivational Quote</h2>
      <button onClick={getQuote}>Get Quote</button>
      {loading && <p>Loading...</p>}
      {quote && <p>"{quote}"</p>}
    </div>
  )
}
