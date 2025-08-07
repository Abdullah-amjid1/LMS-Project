function notifyBar(event)
{
    event.preventDefault();
    const notify = document.getElementById("notify");
    notify.style.right = "10px";
}

function Close(event)
{
    event.preventDefault();
    const notify = document.getElementById("notify");
    notify.style.right = "-100%";
}


// ForgetPassword Form
function verification(event)
{
    event.preventDefault();
    const Error = document.getElementById("error");
    const Error1 = document.getElementById("error-2");

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(document.getElementById("email").value.trim() === "")
    {
        Error1.classList.add("invisible");
        Error1.classList.remove("visible");
        Error.classList.remove("invisible");
        Error.classList.add("visible");
    }
    else
    {
        Error.classList.add("invisible");
        Error.classList.remove("visible");
        if(!emailPattern.test(document.getElementById("email").value.trim()))
        {
            Error1.classList.remove("invisible");
            Error1.classList.add("visible");
        }
        else
        {
            Error.classList.add("invisible");
            Error.classList.remove("visible");
            Error1.classList.add("invisible");
            Error1.classList.remove("visible");
            window.location.href = "/Forms/OTP.html";  
        }
        
    }
    
}