/*jslint browser:true */
/*global alert: false, confirm: false, console: false, Debug: false, opera: false, prompt: false, WSH: false */
var users = [{
    name: "Tom",
    authenticated: false,
    accessLevel: 3,
    administrator: true,
    age: 17
}, {
    name: "Jon",
    authenticated: true,
    accessLevel: 1,
    administrator: false,
    age: 23
}, {
    name: "Jasmine",
    authenticated: true,
    accessLevel: 5,
    administrator: false,
    age: 16
}, {
    name: "Flaurence",
    authenticated: true,
    accessLevel: 2,
    administrator: true,
    age: 47
}, {
    name: "Sally",
    authenticated: true,
    accessLevel: 3,
    administrator: false,
    age: 12
}];
// Loop through all the users
// Alert the users name if the user is authenticated and either an administrator
// or is a young super user. A young super user has an accessLevel 
// greater than 3 and is under the age of 20