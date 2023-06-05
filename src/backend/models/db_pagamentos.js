const db = require('./db.js')

const Pagamentos = db.sequelize.define('pagamentos', {
    id_pagamentos: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
      primaryKey: true
    },
    data_pagamento:{
        type: db.Sequelize.DATE
    },
    tipo_pagamento: {
        type: db.Sequelize.STRING
    },
    valor_pagamento: {
        type: db.Sequelize.DOUBLE
    },
    possui_plano: {
        type: db.Sequelize.STRING
    },
    id_consulta: {
        type: db.Sequelize.INTEGER,
        allowNull: false, // n permitir valores nulos
    },
}, { 
    timestamps: false
});

    module.exports = Pagamentos;

//Criar a tabela
//Pagamentos.sync({force: true})