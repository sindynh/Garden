var list= [];
var InputU;

$(".add").click(function() {
	InputU=$(".picture-url").val();
    list.push(InputU);
    $(".gallery").append('<img src='+InputU+'>');
	$(".numtasks").text(list.length);


});