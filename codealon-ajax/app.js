$( document).ready(function() {
    $.ajax({
        url: "https://swapi.co/api/people/1/?format=json",
        dataType: "json",
        success: function(data) {
            console.log(data);
        }
    });
});