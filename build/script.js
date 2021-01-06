document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.querySelector('#navigation');
    const urlLogo = document.getElementById('id');
    function buttonPress(event) {
        urlLogo.innerHTML = 'NEW URL';
});
    deleteButton.addEventListener('click', buttonPress);
}