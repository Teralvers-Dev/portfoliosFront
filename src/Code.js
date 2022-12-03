var ibars=document.getElementById("icon-bars");
var sidebar= document.getElementById("side-bar");
var logo=document.getElementById("Tera")
var cright=document.getElementById("card-right")
var divinfo=document.getElementById("info-card")
var aftnav=document.getElementById("after-nav")



function SideToogle() {

 sidebar.classList.toggle("hidden");
 logo.classList.toggle("lg:hidden")
 cright.classList.toggle("lg:w-[80%]")
 divinfo.classList.toggle("lg:w-3/4")
 divinfo.classList.toggle("lg:w-full")
}
function SideClose(){
    sidebar.classList.toggle("hidden")
    logo.classList.toggle("lg:hidden")
    cright.classList.toggle("lg:w-[80%]")
    divinfo.classList.toggle("lg:w-3/4")     
}
function ShowAfterNav(){
aftnav.classList.toggle("hidden");
}

