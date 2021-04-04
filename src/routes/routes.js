const express = require('express');
const ProdutoController = require('../Controllers/produtoController.js');
const router = express.Router();

router.post('/produto', ProdutoController.Insert);

module.exports = router;
