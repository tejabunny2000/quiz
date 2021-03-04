var ques1, ques2, ques3, ques4, ques5, ques6, ques7, ques8, ques9, ques10;
var a, b, c, d;
var a_img, b_img, c_img, d_img;
var score = 0;
var gameState = 0;
var backgroundimg;
var start;
var ques1Flag = true,ques2Flag = true,ques3Flag = true,ques4Flag = true,ques5Flag = true,
ques6Flag = true,ques7Flag = true,ques8Flag = true,ques9Flag = true,ques10Flag = true;


function preload(){
    backgroundimg = loadImage ("oneTreeHill.jpg");
    a_img = loadImage ("code1.png");
    b_img = loadImage("code2.png");
    c_img = loadImage("code3.png");
    d_img = loadImage("code4.png");
}

function setup(){
    createCanvas (700, 500);
    start = createSprite(340, 300, 50, 30);
    start.shapeColor = "gray";
    a = createSprite(55, 195, 10, 10);
    a.addImage(a_img);
    a.scale = 0.2;
    a.visible = false;
    b = createSprite(55, 245, 10, 10);
    b.addImage(b_img);
    b.scale = 0.2;
    b.visible = false;
    c = createSprite(55, 295, 10, 10);
    c.addImage(c_img);
    c.scale = 0.2;
    c.visible = false;
    d = createSprite(55, 345, 10, 10);
    d.addImage(d_img);
    d.scale = 0.2;
    d.visible = false;
    //a.debug = true;
    //b.debug = true;
    //c.debug = true;
    //d.debug = true;
    a.setCollider("circle", -5, -15, 55);
    b.setCollider("circle", -5, -15, 55);
    c.setCollider("circle", -5, -15, 55);
    d.setCollider("circle", -5, -15, 55);
    ques1 = new question ("Q1: When did Haley and Nathan get married ?", "Senior Year", "After High School", "After Jamie's birth", "First Year of College", 1);
    ques2 = new question ("Q2: Who played Lucas Scott ?", "James Lafferty", "Paul Johansson", "Chad Michael Murray", "Austin Nicholas", 3);
    ques3 = new question ("Q3: Who did Dan Scott kill ?", "Chris Keller", "Keith Scott", "Chase Adam", "Clay Evans", 2);
    ques4 = new question ("Q4: What did Karen name Keith and her child?", "Jamie Scott", "Sam Walker", "Chuck Scolick", "Lily Roe Scott", 4);
    ques5 = new question ("Q5: Which season and episode did Lucas and Peyton get married ?", "Season 4,Episode 10", "Season 3, Episode 21", "Season 6, Episode 24", "Season 7, Episode 15", 3);
    ques6 = new question ("Q6: Who did Brooke Davis bring to the wedding of Lucas and Peyton?", "Owen Morello","Julian Backer","Nick Lachey","Chris Keller", 3);
    ques7 = new question ("Q7: Who beated up Brooke Davis ?", "Xavier", "Dan Scott", "Debora Scott", "Rachel Gatina", 1);
    ques8 = new question ("Q8: What was Haley's and Nathan second child name ?", "Victoria Scott","Lily Roe Scott", "Rachel Gatina", "Lydia Scott", 2);
    ques9 = new question ("Q9: What was the title of the 1st season 2nd episode", "The Living Years", "I Shall Believe" ,"The Places You Have Come To Fear The Most", "To Wish Impossible Things", 3);
    ques10 = new question ("Q10: What is the title of the theme song ?", "I Don't Want to Be , by Gavin DeGraw", "Don't Dream It's Over, by Crowed House", "Don't Confess, by Teagan and Sara", "I Don't Want to Miss a Thing, by Aerosmith", 1);
}

function draw(){
    console.log(gameState);
    background("orange");  
    if (gameState === 0){
        textSize (40);
        text("Hello OTH fan", 160, 145);
        text("Press Start to Start", 140, 245);

        if (mousePressedOver(start)){
            gameState = 1;
        }
    }
    
    if(gameState >= 1  &&  gameState <= 10){
        start.visible = false;
        //set score
        textSize (40);
        textFont("Georgia");
        text ("score : " + score, 40, 40);
    }

    //to display questions one after another
    switch (gameState) {
        case 1: ques1.display();
                ques1.scoreUpdate();
                if(ques1Flag) {
                        ques1.flag = true;
                        ques1Flag = false;    
                }
                break;
        case 2: ques2.display();
                ques2.scoreUpdate();
                if(ques2Flag) {
                        ques2.flag = true;
                        ques2Flag = false;    
                }
                break;
        case 3: ques3.display();
                ques3.scoreUpdate();
                if(ques3Flag) {
                        ques3.flag = true;
                        ques3Flag = false;    
                }
                break;
        case 4: ques4.display();
                ques4.scoreUpdate();
                if(ques4Flag) {
                        ques4.flag = true;
                        ques4Flag = false;    
                }
                break;
        case 5: ques5.display();
                ques5.scoreUpdate();
                if(ques5Flag) {
                        ques5.flag = true;
                        ques5Flag = false;    
                }
                break;
        case 6: ques6.display();
                ques6.scoreUpdate();
                if(ques6Flag) {
                        ques6.flag = true;
                        ques6Flag = false;    
                }
                break;
        case 7: ques7.display();
                ques7.scoreUpdate();
                if(ques7Flag) {
                        ques7.flag = true;
                        ques7Flag = false;    
                }
                break;
        case 8: ques8.display();
                ques8.scoreUpdate();
                if(ques8Flag) {
                        ques8.flag = true;
                        ques8Flag = false;    
                }
                break;
        case 9: ques9.display();
                ques9.scoreUpdate();
                if(ques9Flag) {
                        ques9.flag = true;
                        ques9Flag = false;    
                }
                break;
        case 10: ques10.display();
                ques10.scoreUpdate();
                if(ques10Flag) {
                        ques10.flag = true;
                        ques10Flag = false;    
                }
                 break;

    }

    if(gameState >= 11){
        clear();
        textSize(60);
        fill("black");
        text("Your Score is : " + score, 120, 250);
        a.visible = false;
        b.visible = false;
        c.visible = false;
        d.visible = false;
        start.visible = false;
        
    }

    drawSprites();
}