function signup(){
    alert("Your Account is Successfully Created")
}
function signin(){
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if(username=="username" && password=="password")
    {
        alert("Login Succesfull");
        return false;
    }
    else{
        alert("Login Failed");
    }
}
function pagechange(){
    location.href="signin index.html"
}
function pagechange2(){
    location.href="index.html"
}
function play(){
    // var mysong = document.getElementById("mysong");
    // var icon = document.getElementById("icon");
    if(mysong.paused){
        mysong.play();
        icon.src="pause.png";
    }
    else{
        mysong.pause();
        icon.src = "play.png";
    }
}