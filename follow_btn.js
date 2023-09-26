let istatus = document.querySelector("h5")
let btn = document.querySelector('#follow')
let check = 0

follow.addEventListener("click", function(){
    if(check == 0){
        istatus.innerHTML="Following"
        istatus.style.color ="green"
        btn.innerHTML="Unfollow"
        check = 1
    
    }else{
        istatus.innerHTML="Unfollow"
        istatus.style.color ="red"
        btn.innerHTML="Follow"
        check = 0
    }
})
    
