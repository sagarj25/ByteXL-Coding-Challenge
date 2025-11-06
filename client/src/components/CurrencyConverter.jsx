import { useState } from "react"
import axios from "axios"

export default function CurrencyConverter() {
  const [amount, setAmount] = useState("")
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleConvert = () => {
    setError("")
    if (!amount) return

    setLoading(true)
    axios.get(`http://localhost:5000/api/currency?amount=${amount}`)
      .then(res => {
        setResult(res.data)
        setLoading(false)
      })
      .catch(() => {
        setError("Failed to convert")
        setLoading(false)
      })
  }

  return (
    <div>
      <h2>Currency Converter</h2>

      <input
  placeholder="Enter amount in INR"
  value={amount}
  onChange={e => setAmount(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    marginTop: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none"
  }}
/>


      <button onClick={handleConvert}>Convert</button>

      {loading && <p>Loading...</p>}
      {error && <p style={{color:"red"}}>{error}</p>}

      {result && (
        <div>
          <p>USD: {result.usd}</p>
          <p>EUR: {result.eur}</p>
        </div>
      )}
    </div>
  )
}
