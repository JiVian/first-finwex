

jQuery(document).ready(function($){

 $("#lukyBtn").click(function(){

     })
     $("#btnIKnow").click(function(){
         $("#shareMask").hide();
       $("#btnIKnow").hide();

     })
     $("#closeBtn").click(function(){
         $("#activityAccessWindow").hide();
         $("#floatBtn").show();
    })
    $("#floatBtn").click(function(){
        $("#activityAccessWindow").show();
        $("#floatBtn").hide();
   })
	$("#shareBtn").click(function(){
        $("#shareMask").show();
        $("#btnIKnow").show();
  })

});


