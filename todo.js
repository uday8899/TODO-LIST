//add the effect on clicking on "li" inside an "ul" and turn back to normal on unclicking
$("ul").on("click","li",function(){
	$(this).toggleClass("effect");
});
//delete the todo when we click on X
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropogation();
});
//add new todo
$("input[type = 'text']").on("keypress",function(event){
	if(event.which === 13){
		var todoText = $(this).val();
		$(this).val("");           //empty the input box after hitting enter.
		$("ul").append("<li><span><i class=\"far fa-trash-alt\"></i> </span>" + todoText + "</li>");
	}
});
$(".fa-plus").on("click",function(){
	$("input[type = 'text']").fadeToggle();

});