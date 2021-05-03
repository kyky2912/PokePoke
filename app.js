const express = require('express')
const axios = require('axios')
const app = express()

app.use(express.json())

app.get('/', async (req, res) => {
    try {
      const request = await axios.get(`https://pokeapi.co/api/v2/`)
      res.send(request.data)
    } catch (err) {
      res.sendStatus(200)
    }
  })

app.get('/item', async (req, res) => {
  try {
    const request = await axios.get(`https://pokeapi.co/api/v2/item/?limit=1000`)
    res.send(request.data)
  } catch (err) {
    res.sendStatus(200)
  }
})

app.get('/pokedex', async (req, res) => {
  try {
    const request = await axios.get('https://pokeapi.co/api/v2/pokedex/?limit=1000')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(200)
  }
})

app.get('/nature', async (req, res) => {
    try {
      const request = await axios.get('https://pokeapi.co/api/v2/nature/?limit=1000')
      res.send(request.data)
    } catch (error) {
      res.sendStatus(200)
    }
  })

app.get('/pokemon', async (req, res) => {
  try {
    const request = await axios.get('https://pokeapi.co/api/v2/pokemon/?limit=1000')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(200)
  }
})

app.get('/gender', async (req, res) => {
    try {
      const request = await axios.get('https://pokeapi.co/api/v2/gender/?limit=1000')
      res.send(request.data)
    } catch (error) {
      res.sendStatus(200)
    }
})

app.get('/gen', async (req, res) => {
  try {
    const request = await axios.get('https://pokeapi.co/api/v2/generation/?limit=1000')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(200)
  }
})

app.get('/stat', async (req, res) => {
    try {
      const request = await axios.get('https://pokeapi.co/api/v2/stat/?limit=1000')
      res.send(request.data)
    } catch (error) {
      res.sendStatus(200)
    }
})

app.get('/region', async (req, res) => {
  try {
    const request = await axios.get('https://pokeapi.co/api/v2/region/?limit=1000')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(200)
  }
})

app.get('/type', async (req, res) => {
    try {
      const request = await axios.get('https://pokeapi.co/api/v2/type/?limit=1000')
      res.send(request.data)
    } catch (error) {
      res.sendStatus(200)
    }
  })

app.get('/version', async (req, res) => {
  try {
    const request = await axios.get('https://pokeapi.co/api/v2/version/?limit=1000')
    res.send(request.data)
  } catch (error) {
    res.sendStatus(200)
  }
})


app.listen(6060, () => {
  console.log('server running on port 6060')
})