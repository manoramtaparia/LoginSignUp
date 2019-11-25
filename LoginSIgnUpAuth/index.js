$(document).ready(function () {
    $(".hide").hide();
    $(".login-form").hide();
    $(".login").css("background", "none");
    // var emailErrorMsg = {
    //     formatError: "",
    //     validEmailError: "nflkjfdrnh"
    // }

    $(".login").click(function () {
        $(".signup-form").hide();
        $(".login-form").show();
        $(".signup").css("background", "none");
        $(".login").css("background", "#fff");
    });

    $(".signup").click(function () {
        $(".signup-form").show();
        $(".login-form").hide();
        $(".login").css("background", "none");
        $(".signup").css("background", "#fff");
    });

    $(".submitBtn").click(function () {

        //EMPTY FIRST NAME BOX VALIDATION
        firstName = $("#firstNameSignUp").val();
        if (firstName == '') {
            $(".firstname-error-empty").show();
        }
        $("#firstNameSignUp").focus(function () {
            $(".firstname-error-empty").hide();
        });

        //EMPTY LAST NAME BOX VALIDATION
        lastName = $("#lastNameSignUp").val();
        if (lastName == '') {
            $(".lastname-error-empty").show();
        }
        $("#lastNameSignUp").focus(function () {
            $(".lastname-error-empty").hide();
        });
        
        //EMPTY EMAIL BOX VALIDATION
        email = $("#emailSignUp").val();
        if (email == '') {
            $(".email-error-empty").show();
        }
        $("#emailSignUp").focus(function () {
            $(".email-error-empty").hide();
        });

        //EMPTY USERNAME BOX VALIDATION
        username = $("#usernameSignUp").val();
        if (username == '') {
            $(".username-error-empty").show();
        }
        $("#usernameSignUp").focus(function () {
            $(".username-error-empty").hide();
        });

        //EMPTY PASSWORD BOX VALIDATION
        password = $("#passwordSignUp").val();
        if (password == '') {
            $(".password-error-empty").show();
        }
        $("#passwordSignUp").focus(function () {
            $(".password-error-empty").hide();
        });

        //EMPTY CONFIRM PASSWORD BOX VALIDATION
        confirmPassword = $("#confirmPasswordSignUp").val();
        if (confirmPassword == '') {
            $(".confirmPassword-error-empty").show();
        }
        $("#confirmPasswordSignUp").focus(function () {
            $(".confirmPassword-error-empty").hide();
        });

    });

    $("#emailSignUp").blur(function () {
        emailVerif = $("#emailSignUp").val();
        // }).blur(function () {
        if (IsEmail(emailVerif) == false) {
            // if(formate){
            //     errorMsg = emailErrorMsg.formatError;
            // }
            //$('#invalid_email').text()
            //$('#invalid_email').innerHTML()
            //$('#invalid_email').val()
            $('.email-error-format').show();
            return false;
        }
    }).focus(function () {
        $('.email-error-format').hide();
    });

    $("#usernameSignUp").blur(function () {
        usernameVerif = $("#usernameSignUp").val();
        if (isValidUsername(usernameVerif) == false) {
            // if(formate){
            //     errorMsg = emailErrorMsg.formatError;
            // }
            //$('#invalid_email').text()
            //$('#invalid_email').innerHTML()
            //$('#invalid_email').val()
            $('.username-error-format').show();
            return false;
        }
    }).focus(function () {
        $('.username-error-format').hide();
    });

    $("#confirmPasswordSignUp").blur(function () {
        passwordVerif = $("#passwordSignUp").val();
        confirmPasswordVerif = $("#confirmPasswordSignUp").val();
        
        if (passwordVerif != confirmPasswordVerif) {
            $('.confirmPassword-error-mismatch').show();
            return false;
        }
    }).focus(function () {
        $('.confirmPassword-error-mismatch').hide();
    });

    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ((!regex.test(email)) && (!(email == ''))) {
            return false;
        } else {
            return true;
        }
    }

    function isValidUsername(username){
        if(((username.length<5) || (username.length>15)) && (!(username == ''))) {
            return false;
        }
        else{
            return true;
        }
    }

    $("#passwordSignUp").keyup(function () {
        var pswd = $(this).val();
        var passwordStrength = false;
        //validate the length
        if (pswd.length < 8) {
            $('#length').removeClass('valid').addClass('invalid');
            passwordStrength = true;
        } else {
            $('#length').removeClass('invalid').addClass('valid');
        }
        //validate letter
        if (pswd.match(/[A-z]/)) {
            $('#letter').removeClass('invalid').addClass('valid');
        } else {
            $('#letter').removeClass('valid').addClass('invalid');
        }

        //validate capital letter
        if (pswd.match(/[A-Z]/)) {
            $('#capital').removeClass('invalid').addClass('valid');
        } else {
            $('#capital').removeClass('valid').addClass('invalid');
        }

        //validate number
        if (pswd.match(/\d/)) {
            $('#number').removeClass('invalid').addClass('valid');
        } else {
            $('#number').removeClass('valid').addClass('invalid');
        }
    }).focus(function () {
        $("#pswd_info").show();
    }).blur(function () {
        $("#pswd_info").hide();
    });
});