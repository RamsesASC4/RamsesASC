$(document).ready(function () {
    $.ajax({
        url: "https://randomuser.me/api/",
        dataType: "json",
        success: function (data) {
            // console.log(data.results[0].name.first);
            var userFirstName = data.results[0].name.first;
            var userLastName = data.results[0].name.last;
            var userPhoto = data.results[0].picture.thumbnail;
            $("h1").append(userFirstName + " " + userLastName);
            $("body").append("<img src =" + userPhoto + ">");
            
        }
    });
});