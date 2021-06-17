const express = require('express');
const router = express.Router();

const Cloth = require('../models/Cloth');

router.get('/clothing', async (req, res) => {
    const cloth = await Cloth.find();
    res.json(cloth); 
});

router.post('/clothing', async (req, res) => {
    const cloth = new Cloth(req.body);
    await cloth.save()
    console.log(cloth);
    res.json({
        status: 'Saved'
    });
})

router.put('/clothing/:id', async (req, res) => {
    await Cloth.findByIdAndUpdate(req.params.id, req.body);
    res.json({
        status: 'Updated'
    });
});

router.delete('/clothing/:id', async (req, res) => {
    await Cloth.findByIdAndRemove(req.params.id);
    res.json({
        status: 'Deleted'
    });
})

module.exports = router;