
function Calendar(){
    var date = new Date(); 
    var day = date.getDate();
    var month = date.getMonth() +1;
    var year = date.getFullYear();
    
    var time = day+ "/" + month + "/" + year;
    document.getElementById("Calendar").innerHTML = time;
    setTimeout(Calendar);
    }
    Calendar();