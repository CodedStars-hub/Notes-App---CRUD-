const express = require('express')
const noteModel = require('./models/note.model')
const app = express()
app.use(express.json())


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
    const notes = await noteModel.findOne({            // findOne return a particular single note. can put this condition with find() as well.
        title : "test_note_4"
    })

    res.status(200).json({
        message: "Note fetched successfully",
        notes : notes
    })
})

/*
find => [{},{}] or []
findOne => {} or null
 */


module.exports = app