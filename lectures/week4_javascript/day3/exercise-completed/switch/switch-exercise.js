/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var cats = [{
    name: "Buster",
    type: "long hair"
}, {
    name: "Thomas",
    type: "cartoon"
}, {
    name: "Garfield",
    type: "cartoon"
}, {
    name: "Blunder",
    type: "tiger"
}, {
    name: "Leo",
    type: "Lion"
}, {
    name: "Alex",
    type: "lion"
}],
    i;
// Loop through the cats. Use a switch statement, depending on cat type perform the following.
// Lions alert "Roarrrrr said " + lions name
// For tigers alert "Meowwwww said " + tigers name
// For cartoon cats "Purrrrrr said " + cartoon cats name
// For all the other types alert "Howdy dudey " + cats name
for (i = 0; i < cats.length; i = i + 1) {
    switch (cats[i].type.toLowerCase()) {
    case "lion":
        alert("Roarrrrr said " + cats[i].name);
        break;
    case "tiger":
        alert("Meowwwww said " + cats[i].name);
        break;
    case "cartoon":
        alert("Purrrrrr said " + cats[i].name);
        break;
    default:
        alert("Howdy dudey " + cats[i].name);
    }
}