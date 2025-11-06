// server/routes.js
const express = require('express')
const router = express.Router()

/**
 * Simple mock data + helpers
 */
const MOCK_WEATHER = {
  Pune: { location: 'Pune', temp_c: 28, temp_f: 82.4, condition: 'Clear sky' },
  London: { location: 'London', temp_c: 15, temp_f: 59.0, condition: 'Partly cloudy' },
  NewYork: { location: 'New York', temp_c: 20, temp_f: 68.0, condition: 'Sunny' },
  default: { location: 'Pune', temp_c: 28, temp_f: 82.4, condition: 'Clear sky' }
}

const MOCK_RATES = {
  USD: 0.012, // 1 INR -> 0.012 USD (mock)
  EUR: 0.011  // 1 INR -> 0.011 EUR (mock)
}

const QUOTES = [
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
  { text: "You are never too old to set another goal or to dream a new dream.", author: "C.S. Lewis" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" }
]

/**
 * Health / root
 */
router.get('/', (req, res) => {
  res.json({ success: true, message: 'API running. Use /api/weather, /api/currency, /api/quote' })
})

/**
 * GET /api/weather
 * Optional query: ?q=cityName
 * Example: /api/weather?q=London
 */
router.get('/api/weather', (req, res) => {
  try {
    const q = (req.query.q || '').trim()
    let key = 'default'
    if (q) {
      // simple matching: accept "London", "New York", "Pune" (case-insensitive, spaces removed)
      const normalized = q.replace(/\s+/g, '').toLowerCase()
      if (normalized === 'london') key = 'London'
      else if (normalized === 'newyork' || normalized === 'new york') key = 'NewYork'
      else if (normalized === 'pune') key = 'Pune'
    }
    const payload = MOCK_WEATHER[key] || MOCK_WEATHER.default

    // FIX matching frontend keys
    return res.json({
      city: payload.location,
      temp: payload.temp_c,
      condition: payload.condition
    })
  } catch (err) {
    console.error('Weather endpoint error:', err)
    return res.status(500).json({ success: false, error: 'Could not fetch weather (mock).' })
  }
})

/**
 * GET /api/currency
 * Query: ?amount=NUMBER (IN INR)
 * Example: /api/currency?amount=100
 */
router.get('/api/currency', (req, res) => {
  try {
    const raw = req.query.amount
    if (raw === undefined) {
      return res.status(400).json({ error: 'Missing query param: amount' })
    }
    const amount = Number(raw)
    if (Number.isNaN(amount)) {
      return res.status(400).json({ error: 'Invalid amount. Must be a number.' })
    }
    if (amount < 0) {
      return res.status(400).json({ error: 'Amount must be >= 0.' })
    }

    const usd = +(amount * MOCK_RATES.USD).toFixed(4)
    const eur = +(amount * MOCK_RATES.EUR).toFixed(4)

    // FIX matching frontend keys
    return res.json({
      usd,
      eur
    })
  } catch (err) {
    console.error('Currency endpoint error:', err)
    return res.status(500).json({ error: 'Could not perform currency conversion (mock).' })
  }
})

/**
 * GET /api/quote
 * Returns a random motivational quote
 */
router.get('/api/quote', (req, res) => {
  try {
    const idx = Math.floor(Math.random() * QUOTES.length)
    const quote = QUOTES[idx]

    // FIX matching frontend keys
    return res.json({ quote: quote.text })

  } catch (err) {
    console.error('Quote endpoint error:', err)
    return res.status(500).json({ error: 'Could not fetch quote.' })
  }
})

module.exports = router
