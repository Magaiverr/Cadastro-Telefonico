document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var name = document.getElementById('nome').value;
    var phone = document.getElementById('tel').value;

    document.getElementById('nome').value = '';
    document.getElementById('tel').value = '';

    var table = document.getElementById('contactTable');
    var row = table.insertRow(table.rows.length);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = name;
    cell2.innerHTML = phone;
    document.getElementById('clearButton').addEventListener('click', function() {
        var table = document.getElementById('contactTable');
        var rowCount = table.rows.length;
    
        for (var i = rowCount - 1; i > 0; i--) {
        table.deleteRow(i);
        }
    });
});