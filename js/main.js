
$(function () {
	
    $("#btn-posts").click(function () {
        $("#btn-info").css({ height: "3.25em", "line-height": "3.25em", "border-bottom": "0" });
        $("#btn-posts").css({ height: "3.5em", "line-height": "3.5em", "border-bottom": "0.25em solid #FFFFFF" });
        $("#profile-about").hide();
        $("#profile-posts").show();
    });
	
    $("#btn-info").click(function () {
        $("#btn-posts").css({ height: "3.25em", "line-height": "3.25em", "border-bottom": "0" });
        $("#btn-info").css({ height: "3.5em", "line-height": "3.5em", "border-bottom": "0.25em solid #FFFFFF" });
        $("#profile-posts").hide();
        $("#profile-about").show();
    });
	
	$("#upload-photo").click(function () {
        $("#post-images").click();
    });
	
/*
	
    $("#btn-follow").click(function () {
        var dataString = "req=(username)";
        var response = "";
        $.ajax({
            type: "POST",
            url: "(user's profile url)",
            data: dataString,
            success: function (text) {
                $("#btn-follow").hide();
                $("#btn-unfollow").show();
            },
        });
    });

    $("#btn-unfollow").click(function () {
        if (confirm("Unfollow (username)?")) {
            var dataString = "unfollow=(username)";
            var response = "";
            $.ajax({
                type: "GET",
                url: "(user's profile url)?removef",
                data: dataString,
                success: function (text) {
                    $("#btn-unfollow").hide();
                    $("#btn-follow").show();
                },
            });
       }
    });
	
    $("#b-1").click(function () {
        $("#mainerror").html("");
        $("#nameerror").html("");
        $("#usernameerror").html("");
        $("#emailerror").html("");
        $("#passworderror").html("");
        var er = false;
        var fn = $("#fullname").val();
        var ea = $("#email").val();
        var un = $("#username").val();
        var pw = $("#password").val();
        var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        var re2 = /^\w+$/;
        if (fn.trim() == "" || ea.trim() == "" || un.trim() == "" || pw.trim() == "") {
            $("#mainerror").html('<p class="small">Please fill all the fields!</p>');
            er = true;
        } else {
            if (pw.length < 6) {
                $("#passworderror").html('<p class="small">Password should be at least 6 characters</p>');
                er = true;
            }
            if (!re.test(ea)) {
                $("#emailerror").html('<p class="small">Invalid email address</p>');
                er = true;
            }
            if (!re2.test(un) || un.length < 4) {
                $("#usernameerror").html('<p class="small">Invalid username</p>');
                er = true;
            }
        }
        if (!er) {
            var dataString = "username=" + un + "&email=" + ea + "&fullname=" + fn + "&password=" + pw + "&regcheck=yes";
            var response = "";
            $.ajax({
                type: "POST",
                url: "(website's url)",
                data: dataString,
                success: function (text) {
                    response = text;
                    switch (response) {
                        case "1":
                            $("#usernameerror").html('<p class="small">This username is taken</p>');
                            break;
                        case "2":
                            $("#emailerror").html('<p class="small">This email is already registered</p>');
                            break;
                        case "3":
                            $("#mainerror").html('<p class="small">Please fill all the fields!</p>');
                        case "4":
                            $("#mainerror").html('<p class="small">There is an invalid field. Please check again</p>');
                            break;
                        case "5":
                            window.location = "(website's url)";
                            break;
                        case "6":
                            $("#mainerror").html('<p class="small">Unexpected error occured</p>');
                            break;
                    }
                },
            });
            return false;
        }
    });
	
	$(document).keypress(function (e) {
        if (e.which == 13 && $("#search-box").is(":focus")) {
            var search = encodeURI($("#search-box").val());
            search = search.replace("#", "%23");
            window.location.href = "searchurlhere?q=" + search;
        }
    });
*/
});
/*
function follow(f) {
    var dataString = "req=" + f;
    var response = "";
    $.ajax({
        type: "POST",
        url: "followurl/" + f,
        data: dataString,
        success: function (text) {
            $("#follow-" + f).hide();
        },
    });
}

function submitcomment(e, comment, postid) {
    if (e.which === 13 || e.charCode === 13 || e.keyCode === 13) {
        var dataString = "postid=" + postid + "&mycomment=" + comment;
        $.ajax({
            type: "POST",
            url: "urlhere/",
            data: dataString,
            success: function () {
                $("#c" + postid).load("commentsurl?postid=" + postid);
            },
        });
        return false;
    }
}

function submitg(e, comment, postid) {
    if (e.which === 13 || e.charCode === 13 || e.keyCode === 13) {
        $("#g" + postid).css({ display: "none" });
        $("#aj" + postid).css({ display: "block" });
        var dataString = "postid=" + postid + "&guser=" + comment;
        $.ajax({
            type: "POST",
            url: "urlhere/",
            data: dataString,
            success: function (response) {
                $("#rn" + postid).html(response);
            },
        });
        return false;
    }
*/
}
