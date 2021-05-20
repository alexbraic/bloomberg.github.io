$(document).ready(function() {
    $("#feedback-form").submit(function(event) {
        var is_error = false;
        var is_email_error = false;
        var is_fullname_error = false;
        var error_count = 0;

        var fullname = $("#name-field").val();
        if (fullname == ""){
            $("input#name-field").css("background-color", "yellow");
            is_error = true;
            is_fullname_error = true;
            error_count += 1;
        }
        var email = $("#email-field").val();
        if (email == "") {
            $("input#email-field").css("background-color", "yellow");
            is_error = true;
            is_email_error = true;
            error_count += 1;
        }

        if (is_error) {
            $("span#error-count").text(error_count);
            $("p#error-list").css("display", "block");
            event.preventDefault();
        }

        if(is_fullname_error) {
            $("#name-error-msg").css("display", "block");
            $("#name-error-msg").css("background-color", "white");
        }
        if(is_email_error) {
            $("#email-error-msg").css("display", "block");
            $("#email-error-msg").css("background-color", "white");
        }
    });
    
});