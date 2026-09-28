const express = require('express')

const app = express()
app.use(express.json());
const noteModel = require('./models/note.model')



app.post('/notes', async(req, res)=>{
    const data = req.body

    await noteModel.create({
        title : data.title,
        description : data.description
    })

    res.status(201).json({
        message: "Note created"
    })
})

/*
app.get('/notes', async(req, res)=>{
    const notes = await noteModel.find()             // find always returns an array. So, "notes" is an array of the created notes.

    res.status(200).json({
        message: "Notes fecthed successfully",
        notes: notes
    })
})
*/

app.get('/notes', async(req, res)=>{
    const notes = await noteModel.find()

    res.status(200).json({
        message: "Note fetched successfully",
        notes : notes
    })
})

/*
find => [{},{}] or []
findOne => {} or null
 */




app.delete('/notes/:id', async(req, res)=>{
    const id = req.params.id

    await noteModel.findOneAndDelete({
        _id : id
    })

    res.status(200).json({
        message: "note deleted successfully"
    })
})

app.patch('/notes/:id', async(req, res)=>{

    const id = req.params.id
    const description = req.body.description

    await noteModel.findOneAndUpdate({_id: id}, {description: description})

    res.status(200).json({
        message: "Note Updated"
    })
})

module.exports = app