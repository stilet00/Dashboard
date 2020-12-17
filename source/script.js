document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.querySelector('#id');
    function buttonPress(event) {
    console.log(event.target);
});
deleteButton.addEventListener('click', buttonPress);
}