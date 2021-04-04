// Define a utilização do model cliente e a dependência http-status
const Produto = require('../models/produto');
const status = require('http-status');

// Cria o método Insert, obtendo os dados da request
exports.Insert = (req, res, next) => {
    const nome = req.body.nome;
    const tipoProduto = req.body.tipoProduto;
    const dataChegada = req.body.dataChegada;
    const dataValidade = req.body.dataValidade;
    const preco = req.body.preco;
    const estoque = req.body.estoque;

    // Popula cada um dos campos do model com os campos recebido na request
    Produto.create({
        nome: nome,
        tipoProduto: tipoProduto,
        dataChegada: dataChegada,
        dataValidade: dataValidade,
        preco: preco,
        estoque: estoque,
    })
        //then = registra o que queremos que aconteca quando a Promise for resolvida
        .then(produto => {
            if (produto) {
                res.status(status.OK).send(produto);
            } else {
                res.status(status.NOT_FOUND).send();
            }
        })
        //catch = registra o que queremos que aconteca quando a Promise falhar
        .catch(error => next(error));
};
