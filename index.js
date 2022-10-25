const express=require('express');
const app=express();
const cors=require('cors');
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
app.use(cors())
app.get('/',(req, res)=>{
    res.json('hello world hello')
});

app.get('/courses',(req,res)=>{
    res.send(courses)
})

app.get('/course/:id',(req,res)=>{
    const id = req.params.id;
    const selectCourse = courses.find(course=>course._id===id);
    res.send(selectCourse);
})

app.listen(port,()=>{
    console.log(`app is running ${port}`)
})