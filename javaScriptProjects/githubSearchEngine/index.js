import readline from "readline-sync";
import axios from "axios";

// let ask = readline.question("Enter your name: ")
// console.log(ask)


let output = axios.get("https://api.github.com/users/namirafaiz")

.then((response) => {
console.log(response.data.followers) //response.status //.data
})
.catch((error)=>{
    console.log(error,"I am Error")
});