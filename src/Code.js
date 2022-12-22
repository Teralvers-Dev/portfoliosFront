var ibars=document.getElementById("icon-bars");
var closeicons = document.getElementById("close-icons");
var sidebar= document.getElementById("side-bar");
var logo=document.getElementById("Tera")
var cright=document.getElementById("card-right")
var divinfo=document.getElementById("info-card")
var aftnav=document.getElementById("after-nav")
var t=document.querySelector(".card-edit-tech")
var l=document.querySelector(".card-edit-lang")
var p=document.getElementById("point")
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
 (!is_null(cright)) ? cright.classList.toggle("lg:w-[80%]") : '';
 (!is_null(cright)) ? cright.classList.toggle("lg:w-full") : '';
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
document.onclick = check;
function check(e) {
  var target = (e && e.target) || (event && event.srcElement);

  //Nav Menu
  if (!checkParent(target, sidebar)) {
    // click NOT on the menu
    console.log(target);
    if (checkParent(target, ibars)) {
      (!is_null(sidebar)) ? sidebar.classList.toggle("hidden") : '';
      (!is_null(logo)) ? logo.classList.toggle("lg:hidden") : '';
      (!is_null(cright)) ? cright.classList.toggle("lg:w-[80%]") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-3/4") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-full") : '';
    } 
    else {
      // click both outside link and outside menu, hide menu
      sidebar.classList.add("hidden");
      (!is_null(logo)) ? logo.classList.toggle("lg:hidden") : '';
      (!is_null(cright)) ? cright.classList.toggle("lg:w-[80%]") : '';
      (!is_null(cright)) ? cright.classList.toggle("lg:w-full") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-3/4") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-full") : '';
    }
  }
  if (checkParent(target, p )) {
    aftnav.classList.toggle("hidden");
  } 
  else{ 
    aftnav.classList.toggle("hidden");
   }
  if(checkParent(target, closeicons)) {
    (!is_null(sidebar)) ? sidebar.classList.toggle("hidden") : '';
    (!is_null(logo)) ? logo.classList.toggle("lg:hidden") : '';
      (!is_null(cright)) ? cright.classList.toggle("lg:w-[80%]") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-3/4") : '';
      (!is_null(divinfo)) ? divinfo.classList.toggle("lg:w-full") : '';
   }
}
function checkParent(t, elm) {
  while (t.parentNode) {
    if (t == elm) {
      return true;
    }
    t = t.parentNode;
  }
  return false;
}