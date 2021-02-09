class Game {
    constructor(){
  
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
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    ground = createSprite(displayWidth, displayHeight, displayWidth, 10)
     player1 = createSprite(500,600)
     player1.y = player1.y + 10
     player1.addImage(cyber1)
     player2 = createSprite(1000,600)
     player2.y = player2.y + 10
     player2.addImage(cyber2)
     players = [player1, player2]
    }
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        image(backImage)
        //index of the array
        var index = 0;
  
        //x and y position of the cars
        var x = 375;
        var y;
  
        for(var plr in allPlayers){
          //add 1 to the index for every loop
          index = index + 1 ;
  
          //position the cars a little away from each other in x direction
          x = x + 250;
          //use data form the database to display the cars in y direction
          y = displayHeight - allPlayers[plr].distance;
          players[index-1].x = x;
          players[index-1].y = y;
  
          if (index === player.index){
            stroke(10)
            fill("red")
            ellipse(x,y,60,60)
            players[index - 1].shapeColor = "red";
            camera.position.x = displayWidth/2;
            camera.position.y = players[index-1].y
          }
         
          //textSize(15);
          //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
        }
  
      }
  
      if(keyCode(32) && player.index !== null){
        var laser = createSprite(player.x,player.y,30,10)
        if(laser.x === player1.x){
          laser.velocityX = 10;
        }
        if(laser.x === player2.x){
          laser.velocityX = -10;
        }
        if(player.collide(laser)){
          gameState = 2;
        }
      }
      if(keyCode(38)){
        player.y = player.y - 5
        player.update();
      }
      drawSprites();
    }
    end(){
      console.log("Game End")
    }
  }