const Kahoot = require("kahoot.js-updated");
const client = new Kahoot();

var pin = 0;

console.log("Joining kahoot...");

client.join(pin, "bruh").catch(err=>{console.log("Failed to join: " + err.description || err.status);});

//client.on("Joined", () => {consold.log("Kahoot joined!")});

client.on("QuizStart", () => {
	console.log("Quiz started!");
});
client.on("QuestionStart", (question) => {
	console.log("A question has been asked, answering");
	question.answer(0);
});
client.on("QuizEnd", () => {
	console.log("Quiz has ended");
});
client.on("Disconnect", (reason) => {
	console.log("Disconnected: " + reason);
});
