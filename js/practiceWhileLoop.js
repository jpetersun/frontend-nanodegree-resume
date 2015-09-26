//practice while loop

var james = {};
james.job = "dish washer";

var washDishes = function() {
	console.log("Wash dem dishes");
}

var dishes = 0;
while (james.job === "dish washer") {
	washDishes();
	dishes = dishes + 1;
	if (dishes === 10) {
		james.job = "manager";
	}
}

console.log(james.job);