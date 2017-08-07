function checkInput() {
    var str = $(".form-control").val();
    console.log(str);
    if (str) {
        console.log("description=" + str);
        return "description=" + str;
    }
    return "";
}

function createList() {
    var info = checkInput();
    $.ajax({
        dataType: "jsonp",
        url: "https://jobs.github.com/positions.json?" + info,
        success: function (data) {
            console.log(data);
            if (data.length > 0) {
                $('.listings').empty();
                for (var i = 0; i < data.length; i++) {
                    $('.listings').append(`
                              <li class="row nav-item">
                                   <div class="column text-left col-xs-4">
                                        <div class="container">
                                             <img src=`+ "'" + data[i].company_logo + "'" + `alt="" class="">
                                        </div>
                                   </div>
                                   <div class="column col-xs-8 container text-right">
                                        <h2 class="job-title text-left">`+ data[i].company + `</h2>
                                        <p class="job-description text-left">`+ $(data[i].description).text() + `</p>
                                   </div>
                              </li>
                         `);
                }
            }
        }
    });
}

createList();
$(".submit-button").click(function (e) {
    e.preventDefault();
    createList();
});
//85ae0cc0a129e967cf24d4ab3a3893aa

//called when "sign out" button clicked
function onSignOut() {
    //should sign user out and toggleHidden
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        console.log('User signed out.')
        //setting back to default
        $(".userName").text("USER_NAME");
        $(".email").text("example@example.com");
    });
}

function onSignIn(googleUser) {
    console.log('User signed in!');
    var profile = googleUser.getBasicProfile();
    window.location.replace("localhost:8000/login.html")
    //change userName text, img source, & email text based on profile
    $(".username").text(profile.getName());
    $(".useravatar").attr("src", profile.getImageUrl());
    $(".email").text(profile.getEmail());
}