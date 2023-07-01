var a = document.querySelector("input");
function btn(){
     if(a.value==""){
        alert("Enter Valid email");
     }
     if(a.value!=""){
        alert("Subscribed...");
        a.value="";
     }
};
var close = document.querySelector("#close");
close.addEventListener('click',function(){
 document.querySelector(".container").classList.add("hide");
})

