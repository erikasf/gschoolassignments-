function makeBoard(){
//making the grid pattern.
	var body = document.querySelector("body");
	var flag = true;
	for (var i = 0; i < 900; i++){ //row
			var aSquare = document.createElement("div");
			aSquare.style.width = "3.23%";
			aSquare.style.float = "left";
			aSquare.style.paddingBottom = "3.23%";
			aSquare.style.border = "1px solid black";
			aSquare.style.backgroundColor = "white";
			body.appendChild(aSquare);
		}
		//different color palat, wiht the the ability to click and paste color
	var tiles = document.querySelectorAll("div");
	for (var j = 29; j < tiles.length; j++){
		tiles[j].addEventListener("click", function(){changeColor(this);});
		tiles[j].addEventListener("dragover", function(event) {event.preventDefault(); changeColor(this);}, false);
		tiles[j].draggable = false;
	}
	createPallette();
}

function createPallette(){
	var tiles = document.querySelectorAll("div");

	//to make the gradiation of the rainbow

	var frequency = .3;
	var rand1 = 0;
	var rand2 = 0;
	var rand3 = 0;
	for (var i = 0; i < 29 ; i++){
		
		rand1 = Math.round(Math.sin(frequency*i + 0) * 127 + 128);
		rand2 = Math.round(Math.sin(frequency*i + 2) * 127 + 128);
		rand3 = Math.round(Math.sin(frequency*i + 4) * 127 + 128);

		tiles[i].style.backgroundColor = "rgb("+rand1+","+rand2+","+rand3+")";
		tiles[i].addEventListener("click", function(){changeBrush(this);});

	}
}

var color = "rgb(0, 0, 0)";

function changeBrush(palletteSq){

	color = palletteSq.style.backgroundColor;

}

function changeColor(aSquare){

	aSquare.style.backgroundColor = color;
	
}

function dragChange(aSquare){
	//When "New Color" is pressed
$("#revealColorSelect").click(function(){
  //Show color select or hide the color select
  changeColor();
  $("#colorSelect").toggle();
});

//update the new color span
function changeColor() {
  var r = $("#red").val();
  var g = $("#green").val();
  var b = $("#blue").val();
  $("#newColor").css("background-color", "rgb(" + r + "," + g +", " + b + ")");
}

//When color sliders change
$("input[type=range]").change(changeColor);

//When "Add Color" is pressed
$("#addNewColor").click(function(){
  //Append the color to the controls ul
  var $newColor = $("<li></li>");
  $newColor.css("background-color", $("#newColor").css("background-color"));
  $(".controls ul").append($newColor);
  //Select the new color
  $newColor.click();
});
function

