  function showTime() 
    {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    h = (h<10) ? "0"+ h : h ;
  
    var m = date.getMinutes(); // 0 - 59
    m  = (m<10) ? "0"+ m : m;
    var s = date.getSeconds(); // 0 - 59 
    s =  (s<10) ? "0"+ s : s ;

    if (h == 0) {
        h = 24;
    }
    if (h >24){
        h = h - 24;
    }

   

    var time = h +":"+m +":"+ s;
    document.getElementById("zegar").innerHTML = time;

    setTimeout (showTime,1000);
    }
    showTime();
  