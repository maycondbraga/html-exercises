function generateId() {
    const id = Date.now().toString();
    console.log(id);
    document.getElementById('idInput').value = id;
}