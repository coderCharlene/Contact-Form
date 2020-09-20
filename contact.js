function validation()
{
    var username = document.getElementById("username").value;
    var subject = document.getElementById("subject").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("mymessage").value;

    var error_message = document.getElementById("error_message");
    var text;

    if (username.length < 1)
    {
        error_message.style.padding = "16px";
        text = "Enter a valid name";
        error_message.innerHTML = text;
        return false;
    }

    if (subject.length < 1)
    {
        error_message.style.padding = "16px";
        text = "Enter a valid subject matter";
        error_message.innerHTML = text;
        return false;
    }

    if (telephone.length < 10 || isNaN(telephone))
    {
        error_message.style.padding = "16px";
        text = "Enter a valid phonenumber";
        error_message.innerHTML = text;
        return false;
    }

    if (email.length < 6 || email.indexOf("@") == -1)
    {
        error_message.style.padding = "16px";
        text = "Enter a valid email";
        error_message.innerHTML = text;
        return false;
    }

    if (message.length < 15)
    {
        error_message.style.padding = "16px";
        text = "Please enter at least 15 characters";
        error_message.innerHTML = text;
        return false;
    }

    alert("Contact form is submitted.");
    return true;
}