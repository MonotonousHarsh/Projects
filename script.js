const buts = document.querySelectorAll('.button');
const body = document.querySelector("body");
buts.forEach(function(button){
    button.addEventListener('click' ,function(e){
        //e.taget.  kuch bhi likho jo bhi information chahiya or jo tumhre e varible mae event perform hone kai baad hue hogi.
         if(e.target.id=== 'yellow'){
            body.style.backgroundColor = "yellow";
         }
         if(e.target.id=== 'grey'){
            body.style.backgroundColor = "grey";
         }
         if(e.target.id=== 'black'){
            body.style.backgroundColor = "black";
         }
         if(e.target.id=== 'red'){
            body.style.backgroundColor = "red";
         }
    });
});