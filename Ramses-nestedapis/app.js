var userFirstName = data.results[0].name.first;
var userLastName = data.results[0].name.last;
var userPhoto = data.results[0].picture.thumbnail;
var userLoc = data.results[0].nat;

$(document).ready(function () {
    $.ajax({
        url: "https://randomuser.me/api/",
            dataType: "json",
                success: function (data) {
                    // console.log(data.results[0].name.first);
            
            $("h1").append(userFirstName + " " + userLastName);
            $(".image").append("<img src =" + userPhoto + ">");

            $.ajax({
                url: "https://restcountries.eu/rest/v2/alpha?codes=" + userLoc,
                dataType: 'json',
                success: function(data){
                    console.log(data[0].name)
                    var country = data[0].name
                    $('body').append('<h2>' + country + '</h2>');
                }
            })
        }
    });
});

