var ibars=document.getElementById("icon-bars");
var sidebar= document.getElementById("side-bar");
var logo=document.getElementById("Tera")
var cright=document.getElementById("card-right")
var divinfo=document.getElementById("info-card")
var aftnav=document.getElementById("after-nav")
var t=document.querySelector(".card-edit-tech")
var l=document.querySelector(".card-edit-lang")
var radios = document.querySelectorAll("input[type='radio']")
function is_null(params) {
    if (params == null) {
        return true
    }
    return false
}

function SideToogle() {

 (!is_null(sidebar)) ? sidebar.classList.toggle("hidden") : '';
 (!is_null(logo)) ? logo.classList.toggle("lg:hidden") : '';
 (!is_null(cright)) ? cright.classList.toggle("lg:w-[80%]") : ''
 (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-3/4") : '';
 (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-full") : '';
}

function ShowAfterNav(){
aftnav.classList.toggle("hidden");
}
function Permute(){
if (radios[0].checked) {
    t.classList.toggle('hidden')
    l.classList.toggle('hidden')
}
else if (radios[1].checked) {
    t.classList.toggle('hidden')
    l.classList.toggle('hidden')
}

}
