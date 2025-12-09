let pm=document.getElementById("pm")
let extra=document.getElementById("extra")
let msg=document.getElementById("msg")
let pay=document.getElementById("pay")

pm.onchange=function(){
    extra.innerHTML=''

    if(pm.value=='bank'){
        extra.innerHTML="<div class='sec'><label>Bank Number</label><input placeholder='enter bank number'></div>"
    }

    else if(pm.value=='wallet'){
        extra.innerHTML="<div class='sec'><label>Wallet ID</label><input placeholder='enter wallet id'></div>"
    }

    else if(pm.value=='cod'){
        extra.innerHTML="<div class='sec'>Payment will be done during pickup</div>"
    }
}

pay.onclick=function(){
    if(!pm.value){
        msg.innerHTML="choose method first"
    } else {
        msg.innerHTML="payment done ✔"
    }
}
