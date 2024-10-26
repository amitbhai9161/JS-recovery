function showclock(){
    var dt = new Date();

    var a = dt.getDay();
    var b = dt.getDate();
    var c = dt.getMonth();
    var d = dt.getFullYear();
    var e = dt.getHours();
    var f = dt.getMinutes();
    var g = dt.getSeconds();


    var day = "";
    if(a==0){
        day = "sunday";

    }
    else if(a==1){
        day = "Monday"
    }

    else if(a==2){
        day = "tuesday"
    }

    else if(a==3){
        day = "wednsday"
    }

    else if(a==4){
        day = "thu"
    }

    else if(a==5){
        day = "friday"
    }

    else if(a==6){
        day = "saturday"
    }

c = c+1;

ampm ="AM";

if(e>=12)
{
    ampm="AM";
    e=e-12; //only 12 hour time out//
}




    var str = ""+day+", "+twoDigit(b)+"-"+twoDigit(c)+"-"+d+" "+twoDigit(e)+":"+twoDigit(f)+":"+twoDigit(g)+" "+ampm;
    clock .innerHTML = str;
    setTimeout(showclock,1000);
}

function twoDigit(num){
    if(num<10){
        return "0"+num;

    }
    else{
        return num;
    }
}