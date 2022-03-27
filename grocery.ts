class Grocery {
        fullName: string;
        quantity = [1,2,4,1];
        list = ["Milk", "Eggs", "Cheese", "Ketchup"];
        constructor(
            public firstName: string,
            public lastName: string
        ) {
            this.fullName = firstName + " " + lastName;
        }
}

interface Person {
    firstName: string;
    lastName: string;
}

function output(grocery: Grocery) {
    var x = "Your grocery list is: ";
    for(let i = 0; i < grocery.list.length; i++) {
        x = x + grocery.list[i] + ": " + grocery.quantity[i] + " ";
    }
    return x;
} 

let user = new Grocery("Allison", "Duffey")
document.body.textContent = output(user);