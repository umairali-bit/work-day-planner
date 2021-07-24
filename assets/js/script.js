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
        
         
    var storageInput = document.querySelector(".storage");
    var textEl = document.querySelector(".text");
    var saveBtnEl = document.querySelector(".saveBtn");
    var storedInput = localStorage.getItem("textInput")

    if (storageInput){
        textEl.textContent=storedInput;
    }

    storageInput.addEventListener("input", letter =>{
        textEl.textContent=letter.target.value
    })

    const saveToLocalStorage=() =>{
        localStorage.setItem("textInput",textEl.textContent)

    }
    saveBtnEl.addEventListener("click",  saveToLocalStorage)


   localStorage.clear();


   
}






   
    


timer();










 

  
