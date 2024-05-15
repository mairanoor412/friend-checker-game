// Friend checker game:
// • Prompt the user to enter a name.
// • Use a switch statement to check if the entered name is a known friend.
// • Output a confirmation message if the name is known, otherwise output a default response.

import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name : "userName",
        type : "string",
        message : "Enter your name: "
    },
]);

switch (answer){
    case "tooba":
        console.log("you're know");
        break;
    case "zainab":
        console.log("you're know");
        break;
    case "kashaf":
        console.log("you're know");
        break;  
    case "zahira":
        console.log("you're know");
        break;  
     default:
        console.log("default response");
               
        
}