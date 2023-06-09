const figlet = require("figlet");

const text = "Antonio Francesco";

figlet(text, function(error, data){
    if(error){
        console.log("Stai sbagliando")
        console.log(error)
        return
    }
    console.log(data)
})
