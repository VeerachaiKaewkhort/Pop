var point = 0;
var pic = 0;


function pop(){
    point = point + 1;
    changPic();
    document.getElementById("point").innerHTML = point
    
    document.getElementById("sound").play();
}
function changPic(){
    if(pic ==0){
        pic = 1;
        document.getElementById("pic").style.backgroundImage="url('Dogpop2.svg')";
        time();
    }   
    else{
        pic = 0;
        document.getElementById("pic").style.backgroundImage="url('Dogpop1.svg')";

      }        
}

function time() {
    var check = true;
    let start = Date.now();

    setInterval(function () {
        if (check) {
            let diff = Math.floor((Date.now() - start) / 10);
            console.log(diff);

            if (diff == 10){
                check = false;
                changPic();
            }
        }
    }, 10);
}