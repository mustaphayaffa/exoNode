const userInfo = require("./information.js")

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : "I'm " +userInfo.name +"je suis a la" +userInfo.campus,
    e : "oO",
    T : "U "
}));

// or cowsay.think()