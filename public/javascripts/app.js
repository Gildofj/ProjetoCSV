$(function () {
    /** Carrega os dados do MongoDB e exibe em uma tabela em HTML **/
    $("#fetchdata").on('click', function () {
        $.get("/fetchdata", function (data) {
            var produto = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(produto, function (index, produto) {
                string += '<tr><td>' + (index + 1) +
                    '</td><td>' + produto['_id'] +
                    '</td><td>' +
                    produto['nome'] +
                    '</td><td>' + produto['categoria'] +
                    '</td><td>' + produto['preco'] +
                    '</td><td>' + produto['fabricante'] +
                    '</td><td class="text-center">' +
                    '<a href="/edit/'+ produto['_id'] +'" class="btn btn-default" id="editdata" style="margin-right: 10px;">Editar<a/>' +
                    '<a href="/delete/:id" class="btn btn-danger">Excluir</a>' +
                    '</td></tr>';
            });
            $("#trdata").html(string);
        });
    });
    /** Importa os dados para o MongoDB **/
    $("#importdata").on('click', function () {
        $.get("/import", function (data) {
            $("#message").show().html(data['success']);
        });
    });
    $("#editdata").on('click', function () {
        $.get("/edit", function (data) {
            var produto = data['data'];
            $("#trdata").html('');
            $("#message").hide();
            var string = '';
            $.each(produto, function (index, produto) {
                string += '<tr><td>' + (index + 1) +
                    '</td><td>' + produto['_id'] +
                    '</td><td>' + produto['nome'] +
                    '</td><td>' + produto['categoria'] +
                    '</td><td>' + produto['preco'] +
                    '</td><td>' + produto['fabricante'] +
                    '</td></tr>'
            });
            $("#trdata").html(string);
        });
    });
});
