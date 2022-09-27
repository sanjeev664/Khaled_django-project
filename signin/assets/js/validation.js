$(document).ready(function () {
    $('#accountForm').validate({
        rules: {
            firstName: {
                required: true,
            },
            familyName: {
                required: true,
            },
            email: {
                required: true,
            },
          
            password: {
                required: true,
            },
            confirmPassword: {
                required: true,
            }

        },
        submitHandler: function(form)
        {
            $("#btn_next").on("click", function (e)
            {	
                $("#btn_next").attr("disabled", true);
                e.preventDefault();
            });


            $(".spinner").removeClass('d-none');
            $("#btn_next-text").text("{{trans('messages.listing_basic.next')}} ..");
            return true;
        },
        messages: {
            firstName: {
                required:  "<strong>Error:</strong> First Name is required",
            },
            familyName: {
                required:  "<strong>Error:</strong> Family Name is required",
            },
            email: {
                required:  "<strong>Error:</strong> Email is required",
            },
            password: {
                required:  "<strong>Error:</strong> Password is required",
            },
            confirmPassword: {
                required:  "<strong>Error:</strong> Confirm Password is required",
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errorTxt'
    });
    $('#signinForm').validate({
        rules: {
            email: {
                required: true,
            },
            password: {
                required: true,
            }

        },
        submitHandler: function(form)
        {
            $("#btn-login").on("click", function (e)
            {	
                $("#btn-login").attr("disabled", true);
                e.preventDefault();
            });


            $(".spinner").removeClass('d-none');
            $("#btn_next-text").text("{{trans('messages.listing_basic.next')}} ..");
            return true;
        },
        messages: {
            email: {
                required:  "<strong>Error:</strong> Email is required",
            },
            password: {
                required:  "<strong>Error:</strong> Password is required",
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errorLogin'
    });
    $('#profileForm').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
            },
            phone: {
                required: true,
            },
            current: {
                required: true,
            },
            newpassword: {
                required: true,
            },
            confirm: {
                required: true,
            }

        },
        submitHandler: function(form)
        {
            $("#btn-changes").on("click", function (e)
            {	
                $("#btn-changes").attr("disabled", true);
                e.preventDefault();
            });


            $(".spinner").removeClass('d-none');
            $("#btn_next-text").text("{{trans('messages.listing_basic.next')}} ..");
            return true;
        },
        messages: {
            name: {
                required:  "<strong>Error:</strong> Name is required",
            },
            email: {
                required:  "<strong>Error:</strong> Email is required",
            },
            phone: {
                required:  "<strong>Error:</strong> Phone Number is required",
            },
            current: {
                required:  "<strong>Error:</strong> Current Password is required",
            },
            newpassword: {
                required:  "<strong>Error:</strong> New Password is required",
            },
            confirm: {
                required:  "<strong>Error:</strong> New Password Confirmation is required",
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errorProfile'
    });
    $('#verify-Form').validate({
        rules: {
            number: {
                required: true,
            }

        },
        submitHandler: function(form)
        {
            $("#btn-verify").on("click", function (e)
            {	
                $("#btn-verify").attr("disabled", true);
                e.preventDefault();
            });


            $(".spinner").removeClass('d-none');
            $("#btn_next-text").text("{{trans('messages.listing_basic.next')}} ..");
            return true;
        },
        messages: {
            number: {
                required:  "<strong>Error:</strong> Verification code is required",
            }
        },
        errorElement : 'div',
        errorLabelContainer: '.errorverify'
    });
});