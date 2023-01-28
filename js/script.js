var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["nombre"] = document.getElementById("nombre").value;
    formData["usuario"] = document.getElementById("usuario").value;
    formData["nicho"] = document.getElementById("nicho").value;
    formData["estado"] = document.getElementById("estado").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.usuario;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.nicho;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.estado;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a class="btn btn-secondary" onClick="onDelete(this)">Borrar</a>
                        <a class="btn btn-primary" onClick="onEdit(this)">Editar</a>`;
}

function resetForm() {
    document.getElementById("nombre").value = "";
    document.getElementById("usuario").value = "";
    document.getElementById("nicho").value = "";
    document.getElementById("estado").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("usuario").value = selectedRow.cells[1].innerHTML;
    document.getElementById("nicho").value = selectedRow.cells[2].innerHTML;
    document.getElementById("estado").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.nombre;
    selectedRow.cells[1].innerHTML = formData.usuario;
    selectedRow.cells[2].innerHTML = formData.nicho;
    selectedRow.cells[3].innerHTML = formData.estado;
}

function onDelete(td) {
    if (confirm('¿Estás seguro de eliminar este registro?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("nombre").value == "") {
        isValid = false;
        document.getElementById("validarNombre").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("validarNombre").classList.contains("hide"))
            document.getElementById("validarNombre").classList.add("hide");
    }
    return isValid;
}