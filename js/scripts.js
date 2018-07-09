$(document).ready(function() {
  $("#blanks form").submit(function(event) {
	var person1Input= $("input#person1").val();
	console.log(person1Input);
	var person2Input= $("input#person2").val();
	console.log(person2Input);
	var animalInput= $("input#animal").val();
	console.log(animalInput);
	var exclamationInput= $("input#exclamation").val();
	var verbInput= $("input#verb").val();
	var nounInput= $("input#noun").val();
	$(".person1").append(person1Input);
    $(".person2").append(person2Input);
    $(".animal").append(animalInput);
    $(".exclamation").append(exclamationInput);
    $(".verb").append(verbInput);
    $(".noun").append(nounInput);

    $("#story").show();

	event.preventDefault();
	    });
	  });
    
    
    
    


    
