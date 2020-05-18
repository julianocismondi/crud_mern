const express = require('express');
const router = express.Router();

const Client = require('../models/Client');


router.post('/', async (req, res) =>{
    const { name, address, phone, email } = req.body;
    const client = new Client({
        name: name,
        address: address,
        phone: phone,
        email: email
    });
    console.log(client);
    await client.save();
    res.send({ status: 'Cliente guardado'});
})

router.get('/', async (req, res) => {
  const clients = await Client.find();
  res.json(clients);
    
});

router.get('/:id', async (req, res) =>{
   const client = await Client.findById(req.params.id);
   res.json(client);
})

router.put('/:id', async (req, res) =>{
    const { name, address, phone, email } = req.body;
    const newClient = {name, address, phone, email};
    await Client.findByIdAndUpdate(req.params.id, newClient);
    res.json({status: 'Cliente modificado'});
});

router.delete('/:id', async (req, res) => {
    await Client.findByIdAndRemove(req.params.id);
    res.json({status: 'Cliente eliminado'});
})

module.exports = router;