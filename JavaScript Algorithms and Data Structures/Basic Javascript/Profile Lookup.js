//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop){
// Only change code below this line
    for (var n = 0; n < contacts.length; n++) {
        if (name == contacts[n]["firstName"]) {
            //name was found
            if (contacts[n].hasOwnProperty(prop)) {
                //prop was found
                return contacts[n][prop];
            } else {
                //name was found but prop was not
                return "No such property";
            }
        }
    }
    return "No such contact";

// Only change code above this line
}
// Change these values to test your function
lookUpProfile("Akira", "likes");
