const kahootJS = require('kahoot.js-updated');
const prompt = require('prompt-sync')({sigint:true});

var pinK;
var amountK;

var nameArray = [31];

nameArray[0] = "Alex";
nameArray[1] = "Alexane";
nameArray[2] = "Alycia";
nameArray[3] = "Anne-Sophie";
nameArray[4] = "Beatrice";
nameArray[5] = "Cassandre";
nameArray[6] = "Judy";
nameArray[7] = "Chris";
nameArray[8] = "Eric";
nameArray[9] = "Etienne";
nameArray[10] = "Felix";
nameArray[11] = "Gab";
nameArray[12] = "Gab";
nameArray[13] = "Inuk";
nameArray[14] = "Jia-Xin";
nameArray[15] = "Julianne";
nameArray[16] = "Justine";
nameArray[17] = "Kaiden";
nameArray[18] = "LP";
nameArray[19] = "Maika";
nameArray[20] = "Marc-Olivier";
nameArray[21] = "Maxandre";
nameArray[22] = "Maxim";
nameArray[23] = "Megane";
nameArray[24] = "Nathan";
nameArray[25] = "Olivia";
nameArray[26] = "Renaud";
nameArray[27] = "Renaud";
nameArray[28] = "Simon";
nameArray[29] = "Tristan";
nameArray[30] = "Zach";

//big test here
function wait(n){
	n = n || 1;
	return new Promise(resolve => {
		setTimeout(resolve,n * 1000);
	});
}


function randomNumber(max) {
	return Math.floor(Math.random() * max);
}

function getName(){
	return nameArray[randomNumber(30)];
}

var pinK = prompt('Enter the PIN: ');
var amountK = prompt('Number of bots: ');

async function sendBots(pin, amount){
	for(let i = 0; i < amount; i++) {
		const bot = new kahootJS;
		bot.join(pin, nameArray[randomNumber(30)]);
		await wait (0.1);
	}
}

sendBots(pinK, amountK);
sendBots().catch(err => console.error('error:  ' + err));

