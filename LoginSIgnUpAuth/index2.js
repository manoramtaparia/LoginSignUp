$(document).ready(function () {
    $(".hide").hide();
    $(".login-form").hide();
    $(".login").css("background", "none");
    var emailErrorMsg = {
        formatError: "",
        validEmailError: "nflkjfdrnh"
    }

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

    $(".btn").click(function () {
        $(".input").val("");
    });

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


    $(".submitBtn").click(function () {
        password1 = document.getElementById("passwordSignUp").value;
        password2 = document.getElementById("confirmPasswordSignUp").value;
        username = document.getElementById("usernameSignUp").value;
        email = document.getElementById("emailSignUp").value;

        if (email == '') {
            alert("Please enter email");
            var errorMsg = ""
            if(IsEmail(email)==false){
                if(formate){
                    errorMsg = emailErrorMsg.formatError;
                }
                //$('#invalid_email').text()
                //$('#invalid_email').innerHTML()
                //$('#invalid_email').val()
                $('#invalid_email').show();
                return false;
              }
        }
        else if (username == '') {
            alert("Please enter username");
        }
        else if (password1 == '') {
            alert("Please enter Password");
        }
        // If confirm password not entered 
        else if (password2 == '') {
            alert("Please enter confirm password");
        }
        // If Not same return False.     
        else if (password1 != password2) {
            alert("\nPassword did not match: Please try again...")
            return false;
        }

        // If same return True. 
        else {
            // alert("Password Match: Welcome to GeeksforGeeks!") 
            // return true;
            $(".input").val("")
        }
        
    });
    function IsEmail(email) {
        var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if(!regex.test(email)) {
          return false;
        }else{
          return true;
        }
      }
});