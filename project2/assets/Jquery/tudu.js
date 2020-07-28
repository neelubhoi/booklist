//check off specific todos
$("ul").on("click", "li", function(){

/*console.log($(this).css("color"));
if($(this).css("color") === "rgb(128, 128, 128)"){
	$(this).css("color","black");
	$(this).css("text-decoration","none");

	}
else{

	$(this).css({
		color: "gray",
		textDecoration: "line-through"
	});
}*/

$(this).toggleClass("completed");


});

$("ul").on("click","span",function(exx){
	$(this).parent().fadeOut(700,function(){
		$(this).remove();
	});
		exx.stopPropagation();
});

//input box working
$("input[type ='text']").keypress(function(ex){
	if(ex.which === 13) {
		var todo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-class'></i></span> " + todo + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});