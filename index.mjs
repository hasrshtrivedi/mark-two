// console.log("What's your name? ");
import chalk, { Chalk } from "chalk";
import readlineSync, { question } from "readline-sync";
console.log(chalk.bgGray("My second cli app ?? "));
var userAnswer = readlineSync.question("What's your name? ");
console.log("\n");
console.log(
//   Chalk.bgBlue(
    "Welcome! " +
      userAnswer +
      " Do you know Harsh?\nSeems u know me `to chalo mere sawalon ka zawab do 😸.` \n"
//   )
);

var questions = [
  {
    question: "Where do i live? ",
    option: ["unnao", "kanpur", "lucknow", "agra"],
    answer: "unnao"
  },
  {
    question: "Nick-name of my college? ",
    option: ["roady", "baba", "trivedi", "baby"],
    answer: "baby"
  },
  {
    question: "endYear of my college? ",
    option: ["2020", "2021", "2022", "2023"],
    answer: "2022"
  }
];

var score = 0;

function check(question , option , answer) {
    // # KEY IN SELECT ( TO SELCT KEY)
    var indexAt=readlineSync.keyInSelect(option,question)
    var userAnswer=option[indexAt]
    // #
if(userAnswer===answer){
    console.log("Right!!");
    score=score+1;
    console.log("your score is "+score);
    console.log("----------------------");
}else{
    console.log("Wrong!!");
    score=score-1;
    console.log("your score is "+score);
    console.log("----------------------");
}
  
}

for (var i = 0; i < questions.length; i++) {
    var ourQuestion=questions[i];
//   var checkPoints = options[i];
  check(ourQuestion.question, ourQuestion.option , ourQuestion.answer);
}
console.log(chalk.bgBlue("How's u found my Second cli_app"));
