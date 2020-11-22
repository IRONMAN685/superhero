var canvas=new fabric.Canvas("myCanvas");

var player_x=10;
var player_y=10;

var blockwidth=30;
var blockheight=30

var playerobject="";
var blockobject="";

function player_update()
{
    fabric.Image.fromURL("player.png", function(Img)
    {
   playerobject=Img;
   playerobject.scaleToWidth(150);
   playerobject.scaleToHeight(140);
   playerobject.set(
   {
       top: player_y ,
       left: player_x 
   });
   canvas.add(playerobject);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image, function(Img)
    {
   blockobject=Img;
   blockobject.scaleToWidth(blockwidth);
   blockobject.scaleToHeight(blockheight);
   blockobject.set(
   {
       top: player_y ,
       left: player_x 
   });
   canvas.add(blockobject);
    });
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keypress=e.keyCode
    console.log(keypress);
    if(e.shiftKey == true && keypress == "80")
    {
        console.log("shift and p");
        blockwidth=blockwidth+10;
        blockheight=blockheight+10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    }
    
    if(e.shiftKey == true && keypress == "77")
    {
        console.log("shift and m");
        blockwidth=blockwidth-10;
        blockheight=blockheight-10;
        document.getElementById("current_width").innerHTML=blockwidth;
        document.getElementById("current_height").innerHTML=blockheight;
    }
    
    if(keypress == "38")
    {
         up();
    }

    if(keypress == "40")
    {
         down();
    }

    if(keypress == "39")
    {
         right();
    }

    if(keypress == "37")
    {
         left();
    }

    if(keypress == "87")
  {
        new_image("captain_america_left_hand.png");
        console.log("w")
  }
  
  if(keypress == "67")
  {
        new_image("hulk_face.png");
        console.log("c")
  }

  if(keypress == "68")
  {
        new_image("hulk_right_hand.png");
        console.log("d")
  }

  if(keypress == "71")
  {
        new_image("hulk_left_hand.png");
        console.log("g")
  }

  if(keypress == "76")
  {
        new_image("hulkd_body.png");
        console.log("l")
  }

  if(keypress == "83")
  {
        new_image("hulk_legs.png");
        console.log("s")
  }

  if(keypress == "82")
  {
        new_image("ironman_body.png");
        console.log("r")
  }

  if(keypress == "84")
  {
        new_image("ironman_left_hand.png");
        console.log("t")
  }

  if(keypress == "73")
  {
        new_image("ironman_right_hand.png");
        console.log("i")
  }

  if(keypress == "85")
  {
        new_image("ironman_face.png");
        console.log("u")
  }

  if(keypress == "69")
  {
        new_image("ironman_legs.png");
        console.log("e")
  }

  if(keypress == "89")
  {
        new_image("spiderman_body.png");
        console.log("y")
  }

  if(keypress == "75")
  {
        new_image("spiderman_right_hand.png");
        console.log("k")
  }

  if(keypress == "78")
  {
        new_image("spiderman_face.png");
        console.log("n")
  }

  if(keypress == "79")
  {
        new_image("spiderman_left_hand.png");
        console.log("o")
  }

  if(keypress == "65")
  {
        new_image("spiderman_legs.png");
        console.log("a")
  }

  if(keypress == "66")
  {
        new_image("thor_face.png");
        console.log("b")
  }

  if(keypress == "67")
  {
        new_image("thor_left_hand.png");
        console.log("c")
  }

  if(keypress == "68")
  {
        new_image("thor_right_hand.png");
        console.log("d")
  }
}

function up() 
{
       if(player_y >=0) 
      { 
             player_y = player_y - blockheight;
             console.log("block image height = " + blockheight); 
             console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
             canvas.remove(playerobject); 
             player_update();
      }
}

function down() 
{
       if(player_y <=500) 
      { 
             player_y = player_y + blockheight;
             console.log("block image height = " + blockheight); 
             console.log("When down arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
             canvas.remove(playerobject); 
             player_update();
      }
}

function right() 
{
       if(player_x <=850) 
      { 
             player_x = player_x + blockheight;
             console.log("block image height = " + blockheight); 
             console.log("When right arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
             canvas.remove(playerobject); 
             player_update();
      }
}

function left() 
{
       if(player_x >=0) 
      { 
             player_x = player_x - blockheight;
             console.log("block image height = " + blockheight); 
             console.log("When left arrow key is pressed, X = " + player_x + " , Y = "+player_y); 
             canvas.remove(playerobject); 
             player_update();
      }
}

