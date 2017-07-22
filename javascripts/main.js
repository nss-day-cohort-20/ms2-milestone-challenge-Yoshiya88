
let request = new XMLHttpRequest();
request.addEventListener("load", loadJson);
request.open("GET", "inventory.json");
request.send();

let text = document.getElementById("input");
let container = document.getElementById("container");
let fluidcontainer = document.getElementsByClassName("container-fluid");
let row = document.getElementsByClassName("row");
let card = document.getElementsByClassName("card");

function loadJson() {
	var data = JSON.parse(event.target.responseText);
	console.log("data", data);
	parkingLot(data.cars);
};





function parkingLot(cars){
	for (var i = 0; i < cars.length; i++) {
		container.innerHTML += 
		`
			<div class="col-md-4">
				<div class="card blackBorder">
					<div>Make:${cars[i].make}</div>
					<div>Model:${cars[i].model}</div>
					<div>Year:${cars[i].year}</div>
					<div>Price:${cars[i].price}</div>
					<div class="description">Description:${cars[i].description}</div>
				</div>
			</div>
		`;
	}
	popCard();
};
parkingLot();

function popCard() {
	for (var i = 0; i < card.length; i++){
		card[i].addEventListener("click", function(doIt) {
			deselectIt();
			selectIt(doIt.currentTarget);
		});
	}
}

function selectIt(card) {
	text.value = "";
	text.focus();
	console.log("card", card);
	card.classList.add("bigBorder", "bgcolor");
	text.addEventListener("keyup", function(){
		selectText(card);
	})
};

function selectText(card){
	console.log("selectText", card);
	if (card.classList.contains("bigBorder", "bgcolor")) {
		card.querySelector(".description").innerHTML = text.value
	}
};

function deselectIt() {
	for (var i = 0; i < card.length; i++) {
		card[i].classList.remove("bigBorder", "bgcolor")
	}
};








