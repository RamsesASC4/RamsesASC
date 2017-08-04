$(document).ready(function () {
    $.ajax({
        url: "https://jobs.github.com/positions.json?search=code&page=1",
        dataType: "json",
        success: function (data) {
            // console.log(data.results[0].name.first);
            var jtitle = [0].title;
        
            $("h1").append(jtitle);
            

        }
    });
});