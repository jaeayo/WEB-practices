var answer = prompt("are we there yet?");

//while(answer != "yes" && answer != "yeah"){

while(answer.indexOf("yes") === -1){
	//it means that the word yes does not exist inside of our answer 
	var answer = prompt("are we there yet?");
}

alert("Yay, WE MADE IT!!");

