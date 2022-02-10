const express= require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { status } = require('express/lib/response');
const task = require('../models/task');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async(req, res)=>{
    const tasks = await Task.find();
    
    res.json(tasks);
        
});

router.get('/:id', async (req, res)=>{
   const task =  await Task.findById(req.params.id);
   res.json(task);

})

router.post('/', async (req, res)=>{
const {title, descripcion} = req.body;
const task = new Task({title, descripcion})
    await task.save();
    res.json({status: 'Task Saved'});
})

router.put('/:id', async (req, res)=>{
    const {title, descripcion} = req.body;
    const newTask = {title, descripcion};
    await Task.findByIdAndUpdate(req.params.id, newTask)
         
        res.json({status: 'Task Update'});
    });
    router.delete('/:id', async (req, res)=>{
        await Task.findByIdAndRemove(req.params.id);
        res.json({status: 'Task Delete'});
    })



module.exports = router;

