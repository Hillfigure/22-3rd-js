const age = 24;
const isFemale = false;
const driverStatus = "drunk";
const firstName = "Brammie";
const totalAmount = 160;

if (age>18 && age<25) {
    console.log("Je krijgt 50% korting!");
} else {
        console.log("NO!");
}

if (firstName === "Abraham" || firstName.toLocaleLowerCase().includes("bram") || firstName.toLocaleLowerCase().includes("sara")) {
    console.log("You get a free beer!")
} else console.log("So sorry, you have to pay, thank your parents")

if (totalAmount > 25) {
    console.log("Free Vegan Bittere Balls");
} else if (totalAmount > 50) {
    console.log("Also Los Nachos!");
} else if (totalAmount > 100) {
    console.log("A bottle of our finest Champagne.. from the lidl");
} else {
    console.log("Another drink?");
}