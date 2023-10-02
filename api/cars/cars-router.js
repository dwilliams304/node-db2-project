// DO YOUR MAGIC
const express = require('express');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try{
        res.json('test');
    }catch(err){
        next(err);
    }
    
})
router.get('/:id', async (req, res, next) => {
    try{
        res.json('test');
    }catch(err){
        next(err);
    }
    
})
router.post('/', async (req, res, next) => {
    try{
        res.json('test');
    }catch(err){
        next(err);
    }
    
})





module.exports = router;