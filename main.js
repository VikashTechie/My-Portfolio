$(document).ready(function(){
    $('#submit').click(function(event){
    event.preventDefault();
    var user=$('#name').val();
    $(".error").html("");
    $("#success").html("");
    if (user == "")
    {
        $('#name_error').html('Name should be filled');
        return false;
    }
    else if (user.length < 3 || user.length > 30)
    {
        $('#name_error').html('Name should contain min 3 char and max 30 char');
        return false;
    }
    
    var email=$('#email').val();
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (email === "")
     {
        $("#email_error").html("Email should be filled");
        return false;
    } 
    else if (!emailPattern.test(email)) {
        $("#email_error").html("Please enter a valid email address");
        return false;
    }

        var phone = $('#phone').val().trim();
        const phonePattern = /^[0-9]{10}$/;
        if (phone === "") {
            $("#phone_error").html("Phone number should be filled");
            return false;
        } else if (!phonePattern.test(phone)) {
            $("#phone_error").html("Phone number should be 10 digits");
            return false;
        }

         const subject = $('#subject').val().trim();
         if (subject === "") {
             $("#subject_error").html("Subject should be filled");
             return false;
         }
 
         const message = $('#message').val().trim();
         if (message === "") {
             $("#message_error").html("Message should be filled");
             return false;
         } else if (message.length < 10) {
             $("#message_error").html("Message should be at least 10 characters long");
             return false;
         }
         
         if(true)
         {
            $("#success").html("Form Submitted Successfully!");
            $(".error").html("");
            $('#name').val("");
            $('#email').val("");
            $('#phone').val("");
            $('#subject').val("");
            $('#message').val("");
         }
});
});

var typed = new Typed(".text",{
    strings:["Frontend Developer","Data Analyst","Software Developer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});

