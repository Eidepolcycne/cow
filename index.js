const  useObjet = require("./information.js");
let cowsay = require("cowsay");

console.log(cowsay.say({
    text : useObjet.objet.name + " " + useObjet.objet.campus,
    e : "oO",
    T : "U "
}))