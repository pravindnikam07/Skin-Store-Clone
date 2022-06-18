

var form = document.querySelector("#form")
form.addEventListener("submit",checkdata)

document.querySelector("#facebook").addEventListener("click",function()
{
    window.location.href="https://www.facebook.com/login.php?skip_api_login=1&api_key=1215984228522362&kid_directed_site=0&app_id=1215984228522362&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv3.2%2Fdialog%2Foauth%3Fclient_id%3D1215984228522362%26redirect_uri%3Dhttps%253A%252F%252Floginservice.thehut.net%252Ffacebook%252FhandleLogin%26state%3DRkFGRTYwNzNBQjU5RUE1NzU5NEJBQkQxRTYyRkVCMkVBRERGNDg3ODRGOEUzRTVEQTEwMjVCMTY5NjVGQUM3RQ%253D%253D.ZXlKbGVIQnBjbmxVYVcxbElqb3hOalUxTkRRNU1qWTVNVGt6TENKamMzSm1WRzlyWlc0aU9pSmxPRGMwWTJabU55MHlaakppTFRRM05Ua3RZbVJoT1MwelpqQmpZamcxTkdSbE56TWlMQ0p6YVhSbElqb2lNVEl4SWl3aWMzVmljMmwwWlNJNkluVnpJaXdpY0hKdmRtbGtaWElpT2lKbVlXTmxZbTl2YXlJc0luSmxaR2x5WldOMFZYSnNJam9pYUhSMGNITTZMeTkzZDNjdWMydHBibk4wYjNKbExtTnZiUzl6YjJOcFlXeEJkWFJvWlc1MGFXTmhkR2x2Ymk1aFkyTnZkVzUwSWl3aVpteHZkeUk2SWxOSVNVVk1SQ0o5%26scope%3Demail%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D73339e3a-5f6c-47f6-bacc-c51614805369%26tp%3Dunspecified&cancel_url=https%3A%2F%2Floginservice.thehut.net%2Ffacebook%2FhandleLogin%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3DRkFGRTYwNzNBQjU5RUE1NzU5NEJBQkQxRTYyRkVCMkVBRERGNDg3ODRGOEUzRTVEQTEwMjVCMTY5NjVGQUM3RQ%253D%253D.ZXlKbGVIQnBjbmxVYVcxbElqb3hOalUxTkRRNU1qWTVNVGt6TENKamMzSm1WRzlyWlc0aU9pSmxPRGMwWTJabU55MHlaakppTFRRM05Ua3RZbVJoT1MwelpqQmpZamcxTkdSbE56TWlMQ0p6YVhSbElqb2lNVEl4SWl3aWMzVmljMmwwWlNJNkluVnpJaXdpY0hKdmRtbGtaWElpT2lKbVlXTmxZbTl2YXlJc0luSmxaR2x5WldOMFZYSnNJam9pYUhSMGNITTZMeTkzZDNjdWMydHBibk4wYjNKbExtTnZiUzl6YjJOcFlXeEJkWFJvWlc1MGFXTmhkR2x2Ymk1aFkyTnZkVzUwSWl3aVpteHZkeUk2SWxOSVNVVk1SQ0o5%23_%3D_&display=page&locale=en_GB&pl_dbl=0"
})

document.querySelector("#google").addEventListener("click",function()
{
    window.location.href="https://accounts.google.com/o/oauth2/v2/auth/oauthchooseaccount?client_id=1047782293270-uc6gapukv57blt03hbc6lt82dq80knbc.apps.googleusercontent.com&redirect_uri=https%3A%2F%2Floginservice.thehut.net%2Fgoogle%2FhandleLogin&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email%20https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&response_type=code&state=NERFN0MyQjM3REEwRDM5MEQ3MkRCQ0Y1QzQyRUY5MjA0RkMwODZEN0I3MTJFNDc4QTU4MDdBMDc2MEYwNkJFNA%3D%3D.ZXlKbGVIQnBjbmxVYVcxbElqb3hOalUxTkRRNU5UQTJNekUxTENKamMzSm1WRzlyWlc0aU9pSTVaREl4WXpobVpDMWtNR05pTFRSbE9Ua3RPRGcxTlMxak0ySXlPR0ptWWpVeE56RWlMQ0p6YVhSbElqb2lNVEl4SWl3aWMzVmljMmwwWlNJNkluVnpJaXdpY0hKdmRtbGtaWElpT2lKbmIyOW5iR1VpTENKeVpXUnBjbVZqZEZWeWJDSTZJbWgwZEhCek9pOHZkM2QzTG5OcmFXNXpkRzl5WlM1amIyMHZjMjlqYVdGc1FYVjBhR1Z1ZEdsallYUnBiMjR1WVdOamIzVnVkQ0lzSW1ac2IzY2lPaUpUU0VsRlRFUWlmUT09&prompt=consent&flowName=GeneralOAuthFlow"
})

document.querySelector("#register").addEventListener("click",function()
{
    window.location.href="./register.html"
})

function checkdata() {
    event.preventDefault()

    document.querySelector("#invalid").style.display="none"

    var flag=true
    var userdatabase = JSON.parse(localStorage.getItem("userdatabase")) || []

    var email = form.email.value
    var password = form.password.value
    

    
    if (email.length == 0) {
        seterror("email", "emailerror", "Email is a required field")
        flag=false

    }
    else {
        deleteerror("email", "emailerror")
    }
    
    if (password.length == 0) {
        seterror("password", "passworderror", "Password is a required field")
        flag=false 
    }
    else {
        deleteerror("password", "passworderror")
    }

   if(flag==false)
   {
    return false
   }

    userdatabase.forEach(function(ele,index)
    {
        if(ele.email==email && ele.password==password)
        {
            var user=userdatabase.splice(index,1)
            localStorage.setItem("user",JSON.stringify(user))
            window.location.href="index.html"
            return false;
        }
    })

    document.querySelector("#invalid").style.display="flex"



    
    
}

function seterror(inputid, alertid, error) {
    let element = document.getElementById(alertid)
    element.querySelector("span").innerText = error

    document.getElementById(alertid).style.display = "flex"
    document.getElementById(inputid).style.borderWidth = "2px"
    document.getElementById(inputid).style.borderColor = "rgb(196, 44, 33)";

    return false
}


function clearerror(inputid) {
    var element = event.target.nextSibling.nextSibling
    element.style.display = "none"
    document.getElementById(inputid).style.borderWidth = "1px"
    document.getElementById(inputid).style.borderColor = "gray";


}
function emailerrorclear() {
    var email = document.getElementById("email").value
    var emailconfirm = document.getElementById("emailconfirm").value
    if (email == emailconfirm) {

        deleteerror("emailconfirm", "emailconferror")
    }
}


function passworderrorclear() {
    var password = document.getElementById("password").value
    var passwordconfirm = document.getElementById("passwordconfirm").value
    if (password == passwordconfirm) {

        deleteerror("passwordconfirm", "passwordconferror")
    }
}

function deleteerror(inputid, alertid) {
    document.getElementById(alertid).style.display = "none"
    document.getElementById(inputid).style.borderWidth = "1px"
    document.getElementById(inputid).style.borderColor = "gray";
}

let link_location = () => {
    window.location.href = './index.html';
}