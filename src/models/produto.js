// Define que estamos utilizando o sequelize
const Sequelize = require('sequelize');

// Obtem dados de conexão entre sequelize e banco de dados MySQL
const sequelize = require('../Database/database.js');

// Cria tabela no BD e seus campos
const Produto = sequelize.define("produto", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },

    nome: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },

    tipoProduto: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [3, 100]
        }
    },

    dataChegada: {
        allowNull: false,
        type: Sequelize.DATE()
    },

    dataValidade: {
        allowNull: false,
        type: Sequelize.DATE()
    },

    preco: {
        allowNull: false,
        type: Sequelize.DOUBLE(),
        validate: {
            len: [1, 999999]
        }
    },
    estoque: {
        allowNull: false,
        type: Sequelize.BOOLEAN(),
        defaultValue: true

    }
});

module.exports = Produto;
