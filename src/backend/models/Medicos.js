const db = require('./db')

const Medicos = db.sequelize.define('medicos', {
    id_medicos: {
        type: db.Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    email_medico: {
        type: db.Sequelize.STRING
    },
    senha_medico:{
        type: db.Sequelize.STRING,
        allowNull: true, // permitir valores nulos
        defaultValue: null // definir o valor padrão como null
    },
    especialidade_medico: {
        type: db.Sequelize.STRING
    },
    nome_medico: {
        type: db.Sequelize.STRING
    },
    telefone_medico: {
        type: db.Sequelize.STRING
    },
    uf_medico: {
        type: db.Sequelize.STRING
    },
    crm_medico: {
        type: db.Sequelize.DOUBLE
    },
    situacao_medico: {
        type: db.Sequelize.STRING
    },
}, {
    timestamps: false
});

//Criar a tabela
// Medicos.sync({force: true})

module.exports = Medicos;