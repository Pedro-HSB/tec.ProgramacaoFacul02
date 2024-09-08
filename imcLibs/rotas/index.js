const express = require('express');
const path = '../Tecnicas de Programacao II/imclibs';
const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile("index.html", {root: path});
    //C:\Users\Proprietario\OneDrive\Documentos\FATEC\Tecnicas de Programacao II\imcLibs\index.html
})

router.get('/resultado', (req, res) =>{
    const imc = req.query.peso / (req.query.altura * req.query.altura);
    // res.send("O imc é de: " + imc.toFixed(2));
    res.sendFile("resultado.html", {root: path});
})

module.exports = router;