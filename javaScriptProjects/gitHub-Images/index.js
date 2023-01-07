// import axios from "axios";
// import readline from "readline-sync";
// import terminalImage from "terminal-image";
// import fs from "fs";

// let main = () => {
    //var image;
//   console.clear();
//   let userName = readline.question("Enter your username: ");
//   axios
//     .get(`https://api.github.com/users/${userName}`)
//     .then((response) => {
//       image = response.data.avatar_url;
//       console.log(response.data.avatar_url);
//       //    image = response.data.avatar_url;
//       axios.get(
//         image,
//         { responseType: "stream" }.then((response) => {
//           console.log(image);
//           response.data.pipe(fs.createWriteStream(`image.png`));
//         })
//       );
//     })
//     .catch((error) => {
//       console.log("I am error", error);
//     });
// };
// main();



import readline from "readline-sync";
import axios from "axios";
import terminalImage from "terminal-image";
import fs from "fs";
let main = () => {
  var image;
  let userName = readline.question("Enter Github UserName : ");
  console.log(userName);
  axios
    .get(`https://api.github.com/users/${userName}`)
    .then((res) => {
      console.log(res.data.avatar_url);
      image = res.data.avatar_url;
      axios.get(image, { responseType: "stream" }).then((res) => {
        console.log(image);

        res.data.pipe(fs.createWriteStream(`file.png`));
      });
      terminalImage.file("file.png").then((img)=>{
        console.log(img)
      })

    })
    .catch((error) => {
      console.log("I am Error", error);
    });
};
main();