var form1 =document.querySelector(".form1");
var form2 =document.querySelector(".form2");

var logbtn = document.getElementById('loginBtn');
var signbtn = document.getElementById('regsBtn');

logbtn.onclick =function(){
    form2.classList.add("dis_none");
    form1.classList.remove("dis_none");
}

signbtn.onclick =function(){
    form1.classList.add("dis_none");
    form2.classList.remove("dis_none");
}