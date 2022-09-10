let line=require("readline-sync")
let x=line.question("what's your name? ");
console.log("Welcome "+x+", How well do you you brooklyn nine-nine? ")
console.log()
console.log("--------------")
let score=0;

const questions=[
  {
    ques: "how many seasons are there?",
    ans: "8"
  },
  {
    ques: "Who is captain of the precinct 99? (Surname)",
    ans: "Holt"
  },
  {
    ques: "Who is charles' best friend? ",
    ans: "Jake"
  },
  {
    ques: "Who is hitchcock's best friend?",
    ans: "scully"
  },
  {
    ques: "what is Holt's dog's name?",
    ans: "cheddar"
  },
  
]

function play(sawaal, jawaab){
  let i=line.question(sawaal);


  if (i.toLowerCase()===jawaab.toLowerCase()){
    console.log("Noice");
    score++;
  }
  else{
    console.log("wrong, PAIN !!!")
    score--;
  }

  console.log("--------------")
}

for (let i=0; i<questions.length; i++){
  play(questions[i].ques, questions[i].ans)
}

function comments(){
  console.log("your score is ", score);
  console.log("cool cool cool cool no-doubt no-doubt");
}

comments();