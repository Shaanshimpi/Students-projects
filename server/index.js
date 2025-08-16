const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://shaan:Shaan9689@cluster0.h3qgz7d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected to MongoDB'))


const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})


const Recipe = mongoose.model('Recipe', {
  title: { type: String, required: true },
  ingredients: { type: String, required: true },
  instructions: { type: String, required: true }
})

app.get('/api/recipes', async (req, res) => {
  try {
    const recipes = await Recipe.find()
    res.json(recipes)
  } catch (error) {
    res.json({ error: error.message })
  }
})

app.post('/api/recipes', async (req, res) => {
  try {
    console.log('POST /api/recipes called with:', req.body)
    const recipe = new Recipe(req.body)
    const savedRecipe = await recipe.save()
    console.log('Recipe saved to MongoDB:', savedRecipe)
    res.json(savedRecipe)
  } catch (error) {
    res.json({ error: error.message })
  }
})
