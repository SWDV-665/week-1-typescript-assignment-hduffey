var Grocery = /** @class */ (function () {
    function Grocery(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.quantity = [1, 2, 4, 1];
        this.list = ["Milk", "Eggs", "Cheese", "Ketchup"];
        this.fullName = firstName + " " + lastName;
    }
    return Grocery;
}());
function output(grocery) {
    var x = "Your grocery list is: ";
    for (var i = 0; i < grocery.list.length; i++) {
        x = x + grocery.list[i] + ": " + grocery.quantity[i] + " ";
    }
    return x;
}
var user = new Grocery("Allison", "Duffey");
document.body.textContent = output(user);
