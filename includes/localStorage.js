$(document).ready(function () {
    function populate(field){
        if (localStorage[field]) {
            $('#'+field).val(localStorage[field]);
        }
    }
    function init() {
        $('.stored').toArray().forEach(element => {
            populate(element.name);
        });
    }
    init();
});

$('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() {
    localStorage.clear();
});