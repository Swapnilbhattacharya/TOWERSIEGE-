var  world;


const 



function setup(){
    createCanvas(1200,400);
    
    engine=Engine.create();

    ground=new Ground(600,390,1200,20);

    stand1=new Ground(350,280,100,15);
    stand2=new Ground(700,300,80,15);

    block1= new block(300,275,30,40);
    block2= new block(330,275,30,40);
    block3= new block(360,275,30,40);
    block4= new block(390,275,30,40);
    block5= new block(420,275,30,40);
    block6= new block(450,275,30,40);
    block7= new block(480,275,30,40);

    block8= new block(330,235,30,40);
    block9= new block(360,235,30,40);
    block10=new block(390,235,30,40);
    block11=new block(420,235,30,40);
    block12=new block(450,235,30,40);
    
    block13= new block(360,195,30,40);
    block14= new block(390,195,30,40);
    block15= new block(420,195,30,40);

    block16= new block(390,155,30,40);


    block17= new block(650,295,30,40);
    block18= new block(680,295,30,40);
    block19= new block(710,295,30,40);
    block20= new block(740,295,30,40);
    block21= new block(770,295,30,40);

    block22= new block(680,255,30,40);
    block23= new block(710,255,30,40);
    block24= new block(740,255,30,40);

    block25= new block(650,215,30,40);

    
    text("DRAG THE HEXAGONAL STONE AND RELEASE IT TO HIT THE PYRAMIDS")
    textColor="white";
}

function Draw(){
   ground.display();
   stand1.display();
   stand2.display();

   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   vlock6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block13.display();
   block14.display();
   block15.display();
   block16.display();
   block17.display();
   block18.display();
   block19.display();
   block20.display();
   block21.display();
   block22.display();
   block23.display();
   block24.display();
   block25.display();

}