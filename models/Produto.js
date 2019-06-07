var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var produtoSchema = new Schema({
    nome: {type: String, Required: 'O nome do produto é obrigatório'},
    preco: {type: String, Required: 'O preço do produto é obrigatório'},
    categoria: {type: String, Required: 'A categoria é obrigatória'}, 
    descricao: {type: String, Required: 'A descrição é obrigatória'},
    fabricante: {type: String, Required: 'O fabricante é obrigatório'}
});

module.exports = mongoose.model('Produto', produtoSchema);