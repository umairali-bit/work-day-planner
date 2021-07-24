var myVar = setInterval(currentDate, 1000);
function currentDate() {
    
    var date = new Date(); 
    $("#currentDate").html(date);

    
}
   
    function timer(){
        let currentTime = moment().hour();
        
        $(".text").each(function() {
    
        var hourText = $(this).siblings().attr("id")
        console.log(hourText);   
        if (hourText > currentTime) {
            $(this).addClass("future");
            
        } else if (hourText == currentTime) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    
        
    
    });
   
}






   
    


timer();









 

  
