 let a=true;
 function slid(){
 if(a){
        let d=document.getElementById("d")
    d.style.right = "0px"
    a=false;
 }
 else{
    let d=document.getElementById("d").style.right = "-250px"
    a=true;
 }
 }