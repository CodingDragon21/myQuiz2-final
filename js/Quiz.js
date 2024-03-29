class Quiz {
  constructor(){
    this.quizResult = createElement("h1")
  }
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
question.hide()
    //write code to change the background color here
   background("purple")
    //write code to show a heading for showing the result of Quiz
  this.quizResult.html("Quiz Result")
  this.quizResult.position(350,0)
    //call getContestantInfo( ) here
Contestant.getPlayerInfo()
    //write condition to check if contestantInfo is not undefined
if(allContestants !== undefined){
  fill("white")
  textSize(20)
  text("NOTE: Contestants who answered correct are in Green", 130,230)
  for(var plr in allContestants){
    var correctAns = "2"
    if(correctAns === allContestants[plr].answer){
      fill("lime")
      textSize(22)
      text( allContestants[plr].name+ ":" + allContestants[plr].answer, 300, 320)
    }else{
      fill("red")
      textSize(22)
      text( allContestants[plr].name + ":" + allContestants[plr].answer, 300,370)
    }
  }
}
    //write code to add a note here

    //write code to highlight contest who answered correctly
    
  }

}
