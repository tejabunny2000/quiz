class question{

    constructor(ques, option1, option2, option3, option4, correct){
        this.ques = ques;
        this.option1 = option1;
        this.option2 = option2;
        this.option3 = option3;
        this.option4 = option4;
        this.correct = correct;
        this.flag = false;
    }

   

    display(){
      textSize (20);
      text (this.ques, 50, 150);
      text (this.option1, 70, 200);
      text (this.option2, 70, 250);
      text (this.option3, 70, 300);
      text (this.option4, 70, 350);
      a.visible = true;
      b.visible = true;
      c.visible = true;
      d.visible = true;
    }     
    
    
    scoreUpdate(){
      // console.log("_______________________________________")
      // console.log("GAME STATE==  "+gameState)
      // console.log("Correct:  "+this.correct);
      // console.log(this.flag);
     
        if (mousePressedOver(a) && this.flag){
          
          if(this.correct === 1 && this.flag){
            score+= 5;
            this.flag=false;
            setTimeout(function() {
              console.log("1000 milliseconds have elapsed");
              gameState += 1;
            }, 1000);
            
            console.log("if A");
          }
          else if(this.flag) {
            score-= 2;
            this.flag =false;
            setTimeout(function() {
              console.log("1000 milliseconds have elapsed");
              gameState += 1;
            }, 1000);
            console.log("else A");
          }
          console.log("mouseA"+ this.flag);
        }
        else if (mousePressedOver(b) && this.flag){
 
          if(this.correct === 2 && this.flag){
            score+= 5;
            this.flag =false;
            setTimeout(function() {
              console.log("1000 milliseconds have elapsed");
              gameState += 1;
            }, 1000);
            console.log("if B");
          }
          else if(this.flag){
            score-= 2;
            this.flag =false;
            setTimeout(function() {
              console.log("1000 milliseconds have elapsed");
              gameState += 1;
            }, 1000);
            console.log("else B");
          }
          console.log("mouseB"+ this.flag);
        }
        else if (mousePressedOver(c) && this.flag){

          if(this.correct === 3 && this.flag){
            score+= 5;
            this.flag =false;
            setTimeout(function() {
              
              gameState += 1;
            }, 1000);
            console.log("if C");
          }
          else if(this.flag){
            score-= 2;
            this.flag =false;
            setTimeout(function() {
              
              gameState += 1;
            }, 1000);
            console.log("else C");
          }
          console.log("mouseC"+ this.flag);
        }
        else if (mousePressedOver(d) && this.flag){

          if(this.correct === 4 && this.flag){
            score+= 5;
            this.flag =false;

            setTimeout(function() {
            
              gameState += 1;
            }, 1000);

            console.log("if D");
          }
          else if(this.flag){
            score-= 2;
            this.flag =false;

            setTimeout(function() {
              
              gameState += 1;
            }, 1000);
            console.log("else D");
          }

          console.log("mouseD" + this.flag);
        }
    }
}

