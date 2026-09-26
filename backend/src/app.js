//creating a server

const express = require('express')

const app = express()
app.use(express.json())

const notes = []

app.post('/notes', (req, res) => {
    notes.push(req.body),

        res.status(201).json({
            message: "note created successfully"
        })
})

app.get('/notes', (req, res)=>{
    res.status(200).json({
        message: "Note fetched successfully",
        notes : notes
    })
})

app.delete('/notes/index', (req, res) =>{
    const idx = req.params.index

    delete notes[index]

    res.status(200).json({
        message : "note deleted successfully"
    })
})



module.exports = app
