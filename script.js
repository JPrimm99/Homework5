$(document).ready(function(){
    $("#currentDay").text(moment().format('MMMM Do YYYY, h:mm:ss a'));
    $(".saveBtn").on("click",function (){
       console.log(this);
        var value =$(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time,value);
    })

    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    //whats the difference between Updater vs Tracker?
    //stick with hourTracker
    function hourTracker(){
    var currentHour = moment().hours();
$(".time-block").each(function(){
    var blockHour = parseInt($(this).attr("id").split("-")[1]);
    console.log( blockHour,currentHour); 

    if (blockHour < currentHour){
        $(this).addClass("past");
        $(this).removeClass("future");
        $(this).removeClass("present");
    }
    else if (blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
        $(this).removeClass("future"); 
    }
    else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
    }
})
}
hourTracker();
})
//moment().subtract(10, 'days').calendar(); 
//moment().subtract(6, 'days').calendar();  
//moment().subtract(3, 'days').calendar();  
//moment().subtract(1, 'days').calendar();  
//moment().calendar();                      
//moment().add(1, 'days').calendar();       
//moment().add(3, 'days').calendar();       
//moment().add(10, 'days').calendar(); 