
$("document").ready(function () {
    //I hope to god this displays date and time
    $('#currentDay').text(moment().format('dddd, MMMM Do, YYYY'))
    var currentTime = moment();
    function timer(){
        
        $(".text").each(function() {
    
        var hour = $(this).parent().attr("id")
    
        if (hour > currentTime) {
            $(this).addClass("future")
        } else if (hour == currentTime) {
            $(this).addClass("present")
        } else {
            $(this).addClass("past")
        }
    
    
    
    });
   
}
console.log(moment());
setInterval(function () {
    taskColors()
}, (1000*60)* 10)


$(".saveBtn").on("click", function () {
    // Get nearby values of the description in JQuery
    var text = $(this).siblings(".text").val();
    var time = $(this).parent().attr("id");

    // Save text in local storage
    localStorage.setItem(time, text);
    
})

$("hours .text").val(localStorage.getItem("hour"));
timer();

})







 

  
