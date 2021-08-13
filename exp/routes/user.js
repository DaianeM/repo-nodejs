const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Área do usuário'});
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    res.json({ message: `Seja bem vindo(a), o seu ID é: ${id}` })
});

router.post('/', (req, res) => {
    const user = req.body;
    res.json({ user });
});

module.exports = router;