
/*display of date and time in header */ 
var myVar = setInterval(currentDate, 1000);
function currentDate() {
    
    var date = new Date(); 
    $("#currentDate").html(date);
  
}
    /* evaluation of time */
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
    
    /* storage of input tasks in localStorage */
    /* saves input values upon refresh*/

    /* task at 9am */
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


   
   /* task at 10am */
   var storageInput1 = document.querySelector(".storage1");
   var textEl1 = document.querySelector(".text1");
   var saveBtnEl1 = document.querySelector(".saveBtn1");
   var storedInput1 = localStorage.getItem("textInput1");

   if (storageInput1){
       textEl1.textContent=storedInput1;
   }

   storageInput1.addEventListener("input", letter1 =>{
       textEl1.textContent=letter1.target.value
   })

   const saveToLocalStorage1=() =>{
       localStorage.setItem("textInput1",textEl1.textContent)

   }
   saveBtnEl1.addEventListener("click",  saveToLocalStorage1)

   /* task at 11am */
   var storageInput2 = document.querySelector(".storage2");
   var textEl2 = document.querySelector(".text2");
   var saveBtnEl2 = document.querySelector(".saveBtn2");
   var storedInput2 = localStorage.getItem("textInput2");

   if (storageInput2){
       textEl2.textContent=storedInput2;
   }

   storageInput2.addEventListener("input", letter2 =>{
       textEl2.textContent=letter2.target.value
   })

   const saveToLocalStorage2=() =>{
       localStorage.setItem("textInput2",textEl2.textContent)

   }
   saveBtnEl2.addEventListener("click",  saveToLocalStorage2)

   /* task at 12pm */
   var storageInput3 = document.querySelector(".storage3");
   var textEl3 = document.querySelector(".text3");
   var saveBtnEl3 = document.querySelector(".saveBtn3");
   var storedInput3 = localStorage.getItem("textInput3");

   if (storageInput3){
       textEl3.textContent=storedInput3;
   }

   storageInput3.addEventListener("input", letter3 =>{
       textEl3.textContent=letter3.target.value
   })

   const saveToLocalStorage3=() =>{
       localStorage.setItem("textInput3",textEl3.textContent)

   }
   saveBtnEl3.addEventListener("click",  saveToLocalStorage3)

   /* task at 1pm */
   var storageInput4 = document.querySelector(".storage4");
   var textEl4 = document.querySelector(".text4");
   var saveBtnEl4 = document.querySelector(".saveBtn4");
   var storedInput4 = localStorage.getItem("textInput4");

   if (storageInput4){
       textEl4.textContent=storedInput4;
   }

   storageInput4.addEventListener("input", letter4 =>{
       textEl4.textContent=letter4.target.value
   })

   const saveToLocalStorage4=() =>{
       localStorage.setItem("textInput4",textEl4.textContent)

   }
   saveBtnEl4.addEventListener("click",  saveToLocalStorage4)

   /* task at 2pm */
   var storageInput5 = document.querySelector(".storage5");
   var textEl5 = document.querySelector(".text5");
   var saveBtnEl5 = document.querySelector(".saveBtn5");
   var storedInput5 = localStorage.getItem("textInput5");

   if (storageInput5){
       textEl5.textContent=storedInput5;
   }

   storageInput5.addEventListener("input", letter5 =>{
       textEl5.textContent=letter5.target.value
   })

   const saveToLocalStorage5=() =>{
       localStorage.setItem("textInput5",textEl5.textContent)

   }
   saveBtnEl5.addEventListener("click",  saveToLocalStorage5)

   /* task at 3pm */
   var storageInput6 = document.querySelector(".storage6");
   var textEl6 = document.querySelector(".text6");
   var saveBtnEl6 = document.querySelector(".saveBtn6");
   var storedInput6 = localStorage.getItem("textInput6");

   if (storageInput6){
       textEl6.textContent=storedInput6;
   }

   storageInput6.addEventListener("input", letter6 =>{
       textEl6.textContent=letter6.target.value
   })

   const saveToLocalStorage6=() =>{
       localStorage.setItem("textInput6",textEl6.textContent)

   }
   saveBtnEl6.addEventListener("click",  saveToLocalStorage6)

   /* task at 4pm */
   var storageInput7 = document.querySelector(".storage7");
   var textEl7 = document.querySelector(".text7");
   var saveBtnEl7 = document.querySelector(".saveBtn7");
   var storedInput7 = localStorage.getItem("textInput7");

   if (storageInput7){
       textEl7.textContent=storedInput7;
   }

   storageInput7.addEventListener("input", letter7 =>{
       textEl7.textContent=letter7.target.value
   })

   const saveToLocalStorage7=() =>{
       localStorage.setItem("textInput7",textEl7.textContent)

   }
   saveBtnEl7.addEventListener("click",  saveToLocalStorage7)

   /* task at 5pm */
   var storageInput8 = document.querySelector(".storage8");
   var textEl8 = document.querySelector(".text8");
   var saveBtnEl8 = document.querySelector(".saveBtn8");
   var storedInput8 = localStorage.getItem("textInput8");

   if (storageInput8){
       textEl8.textContent=storedInput8;
   }

   storageInput8.addEventListener("input", letter8 =>{
       textEl8.textContent=letter8.target.value
   })

   const saveToLocalStorage8=() =>{
       localStorage.setItem("textInput8",textEl8.textContent)

   }
   saveBtnEl8.addEventListener("click",  saveToLocalStorage8)

}

timer();










 

  
