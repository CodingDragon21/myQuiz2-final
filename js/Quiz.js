class Quiz{
    constructor(){

    }
    getState(){
        database.ref('gameState').on("value",(data)=>{
            gameState = data.val();
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            contestantCount = contestant.constCount();
            ques = new Question();
            ques.display();
        }
       
    }
    play(){
        ques.hide();
        var note = createElement("h4");
        note.style("color","blue");
        note.html("RESULT");
        note.position(270,250);
       
        Contestant.getPlayerInfo();
        
        if(allPlayers !== undefined){
          background("yellow");
          
         
          //index of the array
          var index = 0;
    
          //x and y position of the cars
          var x =200 ;
          var y= 275;
    
          for(var plr in allPlayers){
            //add 1 to the index for every loop
            index = index + 1 ;
    
            //position the cars a little away from each other in x direction
            y = y + 20;
            //use data form the database to display the cars in y direction
            
            var correctAns = "2"
    
            if (correctAns === allPlayers[plr].answer){
              //class40
              fill("green")
            
            }
            else{
                fill("red");
               
            }
            
            textAlign(CENTER);
            textSize(20);
            text(allPlayers[plr].name +": "+allPlayers[plr].answer, x,y);
            }
           
           
           
            //textSize(15);
            //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
          }
    
        }
    
}
