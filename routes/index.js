var express = require('express');
var router = express.Router();
var csv = require('fast-csv');
var fs = require('fs');
var mongoose = require('mongoose');
var Produto = mongoose.model('Produto');
var csvfile = __dirname + "../public/files/TESTE.csv";
var stream = fs.createReadStream(csvfile);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Importando aqrquivo csv usando node.js' });
})

.get('/import', function(req, res, next){
  var produto = []
  var csvStream = csv()
  .on("data", function (data){
    var item = new Produto({
    nome: data[0],
    preco: data[1],
    categoria: data[2],
    descricao: data[3],
    fabricante: data[4]
  });
  item.save(function (error) {
    console.log(item);
    if (error) {
      throw error;
    }
    })
  });
})
.on("end", function(){
  console.log("FIm do processamento de importação.");
});
stream.pipe(csvStream);
res.json({success: "Os dados foram importado!!!", status: 200});

module.exports = router;
